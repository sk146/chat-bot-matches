import { Injectable } from '@nestjs/common';
import { MatchesService } from 'src/matches/matches.module';

@Injectable()
export class BotService {
  constructor(private matches: MatchesService) {}
  public async getMatchMessage() {
    const matches = await this.matches.getLastMatches(5);
    const matchesStrings: string[] = matches.map((m) => String(m));
    return matchesStrings;
  }
}
