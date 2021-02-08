import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PollingRepository } from './polling.repository';
import { PollingService } from './polling.service';

@Module({
  imports: [DatabaseModule],
  providers: [PollingService, PollingRepository],
  exports: [PollingService],
})
export class PollingModule {}
