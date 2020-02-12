"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_yoga_1 = require("graphql-yoga");
var cors_1 = __importDefault(require("cors"));
// import schema, {mergedResolvers, mergedTypes} from "./schema";
var path_1 = __importDefault(require("path"));
var sayHello_resolvers_1 = __importDefault(require("./api/Hello/sayHello/sayHello.resolvers"));
var schema = path_1.default.join(__dirname, './api/Hello/sayHello/sayHello.graphql');
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.middlewares = function () {
            _this.app.express.use(cors_1.default());
            // this.app.express.use(logger("dev"));
            // this.app.express.use(helmet());
        };
        console.log(schema);
        this.app = new graphql_yoga_1.GraphQLServer({
            typeDefs: schema,
            resolvers: sayHello_resolvers_1.default
            // typeDefs: mergedTypes,
            // resolvers: mergedResolvers
        });
        this.middlewares();
    }
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map