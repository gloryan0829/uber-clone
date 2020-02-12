"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const app_1 = __importDefault(require("./app"));
const typeorm_1 = require("typeorm");
const ormConfig_1 = __importDefault(require("./ormConfig"));
const PORT = process.env.PORT || 4000;
const PLAYGROUND = '/playground';
const GRAPHQL_ENDPOINT = '/graphql';
const appOptions = {
    port: PORT,
    playground: PLAYGROUND,
    endpoint: GRAPHQL_ENDPOINT,
};
const handleAppStart = () => console.log(`Listening on port : ${PORT}`);
typeorm_1.createConnection(ormConfig_1.default).then(() => app_1.default.start(appOptions, handleAppStart)).catch(err => console.log(err));
//# sourceMappingURL=index.js.map