import { Injectable } from '@nestjs/common';

export class Opponent {
  constructor(public readonly name: string) {}

  [Symbol.toPrimitive](hint: string) {
    if (hint === 'string') {
      return `${this.name}`;
    }
  }
}

export class Match {
  constructor(
    public readonly id: number,
    public readonly time: string,
    public readonly opponents: Opponent[],
    public readonly status: MatchStatus,
  ) {}

  [Symbol.toPrimitive](hint: string) {
    if (hint === 'string') {
      const opponents = this.opponents.join(' vs ');
      const watchTime = this.status === MatchStatus.Live ? ' 🔴 ' : this.time;
      return `${watchTime} ${opponents} ${this.status}`;
    }
  }
}
export enum MatchStatus {
  Wait = 'wait',
  Live = 'live',
}

export type MatchDataType = {
  id: number;
  time: string;
  status: MatchStatus;
  opponents: string[];
};

@Injectable()
export class MatchMapper {
  public static toInstance(match: any) {
    const data = match as MatchDataType;
    const opponents = data.opponents.map((o) => new Opponent(o));
    return new Match(data.id, data.time, opponents, data.status as MatchStatus);
  }
}
