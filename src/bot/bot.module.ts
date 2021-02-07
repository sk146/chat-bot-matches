import { Injectable, Module } from '@nestjs/common';
import { MatchesModule } from 'src/matches/matches.module';
import { BotService } from './bot.service';
import { BotUpdate } from './bot.update';

@Module({
  imports: [MatchesModule],
  controllers: [BotUpdate],
  providers: [BotService, BotUpdate],
})
export class BotModule {}
