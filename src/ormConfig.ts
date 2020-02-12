import { ConnectionOptions } from 'typeorm';
console.log(process.env.DB_ENDPOINT);

const defaultConnectionOptions: ConnectionOptions = {
  type: 'postgres',
  database: 'postgres',
  synchronize: true,
  logging: true,
  entities: ['entities/**/*.*'],
  host: process.env.DB_ENDPOINT || 'localhost',
  port: 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'mysecret'
};

export default defaultConnectionOptions;
