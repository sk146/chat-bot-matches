import { Controller } from '@nestjs/common';
import { Update, Start, Help, Context, Command } from 'nestjs-telegraf';
import { BotService } from './bot.service';

@Update()
@Controller()
export class BotUpdate {
  constructor(private readonly service: BotService) {}

  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply('Welcome');
  }

  @Help()
  async helpCommand(ctx: Context) {
    await ctx.reply('Send me a sticker');
  }

  @Command('matches')
  async test(ctx: Context) {
    const messages = await this.service.getMatchMessage();
    messages.forEach(async (message) => {
      await ctx.reply(message);
    });
  }
}
