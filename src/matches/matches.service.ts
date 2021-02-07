import { Injectable } from '@nestjs/common';
import { MatchesRepository } from './matches.repository';

@Injectable()
export class MatchesService {
  constructor(private readonly matches: MatchesRepository) {}
  public async getLastMatches(limit = 5) {
    // TODO: Add number check
    return this.matches.load(limit);
  }
}
