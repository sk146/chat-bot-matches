import { Controller } from '@nestjs/common';
import { Update, Start, Context, Command, On } from 'nestjs-telegraf';
import { AddMatchPoll } from 'src/polling/polling.service';
import { BotService } from './bot.service';

@Update()
@Controller()
export class BotUpdate {
  constructor(private readonly service: BotService) {}

  @Start()
  async startCommand(ctx: Context) {
    await ctx.replyWithMarkdown('Привет)))');
  }

  @On('callback_query')
  async poll(ctx: Context) {
    const { message, data } = ctx.update.callback_query;
    const { chat, text } = message;
    const poll = new AddMatchPoll(chat.id, text, data);
    try {
      await this.service.addPoll(poll);
    } catch (error) {
      ctx.replyWithMarkdown('Голосовать можно только раз!');
    }
  }

  @Command('matches')
  async matchesCommand(ctx: Context) {
    const matches = await this.service.getMatchesWithKeybord();
    matches.forEach(async (match) => {
      await ctx.replyWithMarkdown(match.message, {
        reply_markup: match.keyboard,
      });
    });
  }

  @Command('polling')
  async pollingCommand(ctx: Context) {
    const message = await this.service.getPollingMessage();
    await ctx.replyWithMarkdown(message);
  }
}
