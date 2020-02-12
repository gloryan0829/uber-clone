"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers = {
    Query: {
        sayHello: (_, args) => {
            return {
                error: false,
                text: `hi there ${args.name}`
            };
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=sayHello.resolvers.js.map