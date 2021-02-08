import { Injectable } from '@nestjs/common';
import { MatchPoll, MatchPollId } from './polling.entity';
import { PollingRepository } from './polling.repository';

export class AddMatchPoll {
  constructor(
    public readonly id_chat: number,
    public readonly match: string,
    public readonly result: string,
  ) {}
}

@Injectable()
export class PollingService {
  constructor(private readonly polling: PollingRepository) {}
  public async add(data: AddMatchPoll) {
    const poll = new MatchPoll(
      MatchPollId.next(),
      data.id_chat,
      data.match,
      data.result,
      new Date(),
    );
    return await this.polling.add(poll);
  }

  public async getLastPolling() {
    return await this.polling.getLastPolling();
  }
}
