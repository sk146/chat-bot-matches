import { Injectable, Module } from '@nestjs/common';
import { MatchesRepository } from './matches.repository';

@Injectable()
export class MatchesService {
  constructor(private readonly matches: MatchesRepository) {}
  public async getLastMatches(limit: number) {
    // TODO: Add number check
    return this.matches.load(limit);
  }
}

@Module({
  providers: [MatchesService, MatchesRepository],
  exports: [MatchesService, MatchesRepository],
})
export class MatchesModule {}
