"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var PORT = process.env.PORT || 4000;
var PLAYGROUND = "/playground";
var GRAPHQL_ENDPOINT = "/graphql";
var appOptions = {
    port: PORT,
    playground: PLAYGROUND,
    endpoint: GRAPHQL_ENDPOINT
};
var handleAppStart = function () { return console.log("Listening on port : " + PORT); };
app_1.default.start(appOptions, handleAppStart);
//# sourceMappingURL=index.js.map