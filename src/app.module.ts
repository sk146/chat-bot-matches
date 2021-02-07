import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { MatchesModule } from './matches/matches.module';
import { TelegrafModule } from 'nestjs-telegraf';
import { BotModule } from './bot/bot.module';

@Module({
  imports: [
    MatchesModule,
    ConfigModule.forRoot(),
    DatabaseModule,
    TelegrafModule.forRoot({
      token: '1593512576:AAFN7Gu4v78XNPVD9Tmu41z2sfvIy3L-8Hk',
    }),
    BotModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
