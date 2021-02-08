import { Injectable } from '@nestjs/common';
import { MatchesService } from 'src/matches/matches.service';
import { AddMatchPoll, PollingService } from 'src/polling/polling.service';
import { InlineKeyboardMarkup } from 'telegraf/typings/telegram-types';

export type MatchWithKeybord = {
  message: string;
  keyboard: InlineKeyboardMarkup;
};

@Injectable()
export class BotService {
  constructor(
    private matches: MatchesService,
    private polling: PollingService,
  ) {}

  public async getMatchesWithKeybord(): Promise<MatchWithKeybord[]> {
    const matches = await this.matches.getLastMatches(5);
    const matchesWithKeybord: MatchWithKeybord[] = matches.map(
      (m): MatchWithKeybord => {
        const message = String(m);

        const opponents = m.opponents.map((opponent) => {
          return { text: opponent.name, callback_data: opponent.name };
        });

        const keyboard: InlineKeyboardMarkup = {
          inline_keyboard: [[...opponents]],
        };

        return {
          message,
          keyboard,
        };
      },
    );

    return matchesWithKeybord;
  }

  public async getPollingMessage() {
    const polling = await this.polling.getLastPolling();
    const rows = polling.map((poll) => String(poll));
    return rows.join('\n');
  }

  public async addPoll(poll: AddMatchPoll) {
    await this.polling.add(poll);
  }
}
