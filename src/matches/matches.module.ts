import { Injectable, Module } from '@nestjs/common';
import { MatchesRepository } from './matches.repository';
import { MatchesService } from './matches.service';

@Module({
  providers: [MatchesService, MatchesRepository],
  exports: [MatchesService, MatchesRepository],
})
export class MatchesModule {}
