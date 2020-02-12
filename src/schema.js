"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const merge_graphql_schemas_1 = require("merge-graphql-schemas");
const path_1 = __importDefault(require("path"));
const allTypes = merge_graphql_schemas_1.fileLoader(path_1.default.join(__dirname, "./api/**/*.graphql"));
const allResolvers = merge_graphql_schemas_1.fileLoader(path_1.default.join(__dirname, "./api/**/*.resolvers.*"));
exports.mergedTypes = merge_graphql_schemas_1.mergeTypes(allTypes);
exports.mergedResolvers = merge_graphql_schemas_1.mergeResolvers(allResolvers);
const schema = graphql_tools_1.makeExecutableSchema({
    typeDefs: exports.mergedTypes,
    resolvers: exports.mergedResolvers
});
exports.default = schema;
//# sourceMappingURL=schema.js.map