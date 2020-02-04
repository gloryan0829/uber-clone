"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_yoga_1 = require("graphql-yoga");
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var morgan_1 = __importDefault(require("morgan"));
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.middlewares = function () {
            _this.app.express.use(cors_1.default());
            _this.app.express.use(morgan_1.default("dev"));
            _this.app.express.use(helmet_1.default());
        };
        this.app = new graphql_yoga_1.GraphQLServer({});
        this.middlewares();
    }
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map