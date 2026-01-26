import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProconnectService } from './proconnect.service';
import { ProconnectController } from './proconnect.controller';

@Module({
  imports: [ConfigModule],
  providers: [ProconnectService],
  controllers: [ProconnectController],
  exports: [ProconnectService],
})
export class ProconnectModule {}
