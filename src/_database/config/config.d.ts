import { Dialect } from 'sequelize';

interface DBConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  dialect: Dialect;
}

interface DBConfigGroup {
  development: DBConfig;
  test: DBConfig;
  production: DBConfig;
}

declare const config: DBConfigGroup;

export default config;
