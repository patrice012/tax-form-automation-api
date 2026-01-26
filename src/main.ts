import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Get configuration from environment
  const port = configService.get<number>('PORT', 3000);
  const uiPort = configService.get<number>('UI_PORT', 4000);
  const nodeEnv = configService.get<string>('NODE_ENV', 'development');

  // Enable CORS
  app.enableCors({
    origin: [
      `http://localhost:${uiPort}`,
      `http://127.0.0.1:${uiPort}`,
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Enable validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(port);

  console.log('🚀 ProConnect Bot API');
  console.log(`📍 Environment: ${nodeEnv}`);
  console.log(`🌐 Server running on: http://localhost:${port}`);
  console.log(`📊 Health check: http://localhost:${port}/health`);
  console.log(`📝 API endpoint: http://localhost:${port}/proconnect`);
}

bootstrap();
