import fs from 'fs';
import {makeExecutableSchema} from '@graphql-tools/schema';
import {getIntrospectionQuery, graphql, printSchema} from 'graphql';

export const typeDefs = `#graphql
  type Query {
    foo: Int
  }
`;

export const resolvers = {
  Query: {
    foo: () => 1,
  },
};

// export const schema = applyDirectives(makeExecutableSchema({resolvers, typeDefs}), Directives.directives);
export const schema = makeExecutableSchema({resolvers, typeDefs});
