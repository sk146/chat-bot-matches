import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { MatchPoll, MatchPollMapper, PollResultMapper } from './polling.entity';

@Injectable()
export class PollingRepository {
  constructor(@Inject('PgPool') private readonly connect: Pool) {}
  public async add(pool: MatchPoll) {
    const sql = `INSERT INTO polling(id, id_chat, match, result, date_polling)  VALUES ($1, $2, $3, $4, $5) returning *`;
    const res = await this.connect.query(sql, MatchPollMapper.toArray(pool));
    return MatchPollMapper.toInstance(res.rows[0]);
  }

  public async getLastPolling() {
    const sql = `SELECT DISTINCT match, result, COUNT( result) as amount FROM polling group by match, result limit 5`;
    const res = await this.connect.query(sql);
    return res.rows.map((r) => {
      return PollResultMapper.toInstance(r);
    });
  }
}
