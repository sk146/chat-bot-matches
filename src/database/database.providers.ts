import { Pool } from 'pg';

export const databaseProviders = [
  {
    provide: 'PgPool',
    useFactory: async () => {
      const pool = new Pool({
        user: process.env.RDS_USERNAME,
        host: process.env.RDS_HOSTNAME,
        database: process.env.RDS_DB_NAME,
        password: process.env.RDS_PASSWORD,
        port: Number(process.env.RDS_PORT),
      });
      return pool;
    },
  },
];
