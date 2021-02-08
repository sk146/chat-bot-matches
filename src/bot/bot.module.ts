import { Injectable, Module } from '@nestjs/common';
import { MatchesModule } from 'src/matches/matches.module';
import { PollingModule } from 'src/polling/polling.module';
import { BotService } from './bot.service';
import { BotUpdate } from './bot.update';

@Module({
  imports: [MatchesModule, PollingModule],
  controllers: [BotUpdate],
  providers: [BotService, BotUpdate],
})
export class BotModule {}
