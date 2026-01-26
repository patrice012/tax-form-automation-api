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
      name: 'ProConnect Bot API',
      version: '1.0.0',
      status: 'running',
      endpoints: {
        health: '/health',
        proconnect: {
          fillTaxReturn: 'POST /proconnect/fill-tax-return',
          exportProgress: 'GET /proconnect/export-progress',
        },
      },
    };
  }
}
