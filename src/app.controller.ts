import { Controller, Get } from '@nestjs/common';
import { MatchesService } from './matches/matches.module';

@Controller()
export class AppController {
  constructor(private readonly appService: MatchesService) {}

  @Get()
  getHello() {
    return this.appService.getLastMatches(5);
  }
}
