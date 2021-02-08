import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { MatchesModule } from './matches/matches.module';
import { TelegrafModule } from 'nestjs-telegraf';
import { BotModule } from './bot/bot.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { PollingModule } from './polling/polling.module';

@Module({
  imports: [
    MatchesModule,
    ConfigModule.forRoot(),
    DatabaseModule,
    EventEmitterModule.forRoot(),
    TelegrafModule.forRoot({
      token: process.env.TELEGRAM_TOKEN,
    }),
    BotModule,
    PollingModule,
  ],
})
export class AppModule {}
