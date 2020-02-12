"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(process.env.DB_ENDPOINT);
const defaultConnectionOptions = {
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
exports.default = defaultConnectionOptions;
//# sourceMappingURL=ormConfig.js.map