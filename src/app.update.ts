import { Controller } from '@nestjs/common';
import {
  Update,
  Start,
  Help,
  On,
  Hears,
  Context,
  Command,
} from 'nestjs-telegraf';
import { MatchesService } from './matches/matches.module';

@Update()
@Controller()
export class AppUpdate {
  constructor(private readonly appService: MatchesService) {}

  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply('Welcome');
  }

  @Help()
  async helpCommand(ctx: Context) {
    await ctx.reply('Send me a sticker');
  }

  @On('sticker')
  async onSticker(ctx: Context) {
    await ctx.reply('👍');
  }

  @Hears('hi')
  async hearsHi(ctx: Context) {
    await ctx.replyWithPoll('asdsadas?', ['asdasd', 'asdasdasd'], {});
  }

  @Command('test')
  async test(ctx: Context) {
    await ctx.replyWithMarkdown('## hi');
  }
}
