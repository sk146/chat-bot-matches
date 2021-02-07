import { Injectable } from '@nestjs/common';
import { MatchMapper, Match } from './match.entity';
import matchesData from './matches.json';

@Injectable()
export class MatchesRepository {
  public async load(limit: number) {
    return matchesData.matches.slice(0, limit).map(MatchMapper.toInstance);
  }
}
