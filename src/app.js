"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const schema_1 = __importDefault(require("./schema"));
class App {
    constructor() {
        this.middlewares = () => {
            this.app.express.use(cors_1.default());
            this.app.express.use(morgan_1.default("dev"));
            this.app.express.use(helmet_1.default());
        };
        this.app = new graphql_yoga_1.GraphQLServer({
            schema: schema_1.default,
        });
        this.middlewares();
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map