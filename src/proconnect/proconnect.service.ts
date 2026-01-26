import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ExportPreparationDto } from './dto/proconnect.dto';

// Import the bot service from local folder
import startTaxFormsFiller from './bot/taxFormsFiller';
import { manualLoginProcess } from './bot/auth/manualLoginProcess';

export interface ExportProgress {
  status: 'idle' | 'in_progress' | 'completed' | 'failed';
  overall: number;
  children: Record<string, { completed: number; total: number }>;
  message: string;
}

@Injectable()
export class ProconnectService {
  private readonly logger = new Logger(ProconnectService.name);
  private readonly backendApiUrl: string;

  private exportProgress: ExportProgress = {
    status: 'idle',
    overall: 0,
    children: {},
    message: '',
  };

  constructor(private readonly configService: ConfigService) {
    this.backendApiUrl = this.configService.get<string>('backend.apiUrl');
    this.logger.log('✅ ProConnect Bot Service initialized');
    this.logger.log('🧪 Currently using MOCK data from proconnect_dev.json');
    this.logger.log('   To use real API: Uncomment code in getData.ts and set BACKEND_API_URL');
  }

  async fillTaxReturn(exportDto: ExportPreparationDto, accessToken: string) {
    let playwrightService = null;
    let page = null;

    this.exportProgress.status = 'in_progress';
    this.exportProgress.message = 'Initializing bot service...';

    try {
      this.logger.log('🤖 Starting ProConnect bot service');
      this.logger.log('Step 1: Loading login page. Please log in manually.');

      // Launch browser and manual login
      const autoNavigate = exportDto.autoNavigateToReturn ?? true;
      const loginResult = await manualLoginProcess(autoNavigate);
      playwrightService = loginResult.playwrightService;
      page = loginResult.page;

      this.logger.log('Step 2: Proceeding to fill forms.');
      this.exportProgress.message = 'Filling tax forms...';

      // Call the bot service with progress callback
      const fillResponse = await startTaxFormsFiller(
        exportDto,
        accessToken,
        { page },
        this.updateExportProgress.bind(this),
      );

      this.exportProgress.status = 'completed';
      this.exportProgress.overall = 100;
      this.exportProgress.message = 'Tax forms filled successfully';

      return {
        success: fillResponse.success,
        message: fillResponse.message || 'Tax forms filled successfully',
        failedFields: fillResponse.failedFields || {},
      };
    } catch (error) {
      this.logger.error('❌ Error in fillTaxReturn:', error);
      this.exportProgress.status = 'failed';
      this.exportProgress.message = error.message || 'Failed to fill tax forms';

      throw new InternalServerErrorException({
        message: 'Failed to fill tax forms',
        error: error.message,
      });
    } finally {
      this.logger.log('🧹 Cleaning up resources');
      try {
        if (page && !page.isClosed()) {
          await page.close();
        }
        if (playwrightService) {
          await playwrightService.cleanup();
        }
      } catch (cleanupError) {
        this.logger.warn('⚠️  Error during cleanup:', cleanupError);
      }
    }
  }

  getExportProgress() {
    return this.exportProgress;
  }

  private updateExportProgress(key: string, completed: number, total: number) {
    this.exportProgress.children[key] = { completed, total };

    // Calculate overall progress
    const allForms = Object.values(this.exportProgress.children);
    if (allForms.length > 0) {
      const totalCompleted = allForms.reduce((sum, form) => sum + form.completed, 0);
      const totalFields = allForms.reduce((sum, form) => sum + form.total, 0);
      this.exportProgress.overall = totalFields > 0 ? (totalCompleted / totalFields) * 100 : 0;
    }

    this.logger.log(
      `📊 Progress - ${key}: ${completed}/${total} (Overall: ${this.exportProgress.overall.toFixed(1)}%)`,
    );
  }
}
