import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  getHealth() {
    return this.appService.getHealth();
  }

  @Get()
  getRoot() {
    return {
      name: 'Tax Form Automation API',
      version: '1.0.0',
      status: 'running',
      description: 'Automated tax form filling using Playwright',
      endpoints: {
        health: '/health',
        taxForms: {
          fillTaxReturn: 'POST /tax-forms/fill-tax-return',
          exportProgress: 'GET /tax-forms/export-progress',
        },
      },
    };
  }
}
