import {
  Body,
  Controller,
  Post,
  Get,
  Headers,
  UnauthorizedException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ExportPreparationDto } from './dto/proconnect.dto';
import { ProconnectService, ExportProgress } from './proconnect.service';

@Controller('tax-forms')
export class ProconnectController {
  constructor(private readonly proconnectService: ProconnectService) {}

  @Post('fill-tax-return')
  @HttpCode(HttpStatus.OK)
  async fillTaxReturn(
    @Body() body: ExportPreparationDto,
    @Headers('authorization') authHeader: string,
  ) {
    const token = this.extractToken(authHeader);
    return this.proconnectService.fillTaxReturn(body, token);
  }

  @Get('export-progress')
  getExportProgress(): ExportProgress {
    return this.proconnectService.getExportProgress();
  }

  private extractToken(authHeader: string): string {
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header is required');
    }

    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      throw new UnauthorizedException('Invalid authorization header format');
    }

    return parts[1];
  }
}
