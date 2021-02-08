import { v4 as UUID } from 'uuid';
export class MatchPollId {
  constructor(public readonly id: string) {}
  static next(): MatchPollId {
    return new MatchPollId(UUID());
  }

  [Symbol.toPrimitive](hint: string) {
    if (hint === 'string') {
      return this.id;
    }
  }
}
export class MatchPoll {
  constructor(
    public readonly id: MatchPollId,
    public readonly id_chat: number,
    public readonly match: string,
    public readonly result: string,
    public readonly date_polling: Date,
  ) {}
}

export class PollResult {
  constructor(
    public readonly match: string,
    public readonly result: string,
    public readonly amount: number,
  ) {}

  [Symbol.toPrimitive](hint: string) {
    if (hint === 'string') {
      return `${this.match} ${this.result} ${this.amount}`;
    }
  }
}

export class PollResultMapper {
  public static toInstance(row: any) {
    return new PollResult(row['match'], row['result'], row['amount']);
  }
}

export class MatchPollMapper {
  public static toArray(pool: MatchPoll): any[] {
    return [
      String(pool.id),
      pool.id_chat,
      pool.match,
      pool.result,
      pool.date_polling,
    ];
  }
  public static toInstance(row: any) {
    return new MatchPoll(
      new MatchPollId(row['id']),
      row['id_chat'],
      row['match'],
      row['result'],
      row['date_polling'],
    );
  }
}
