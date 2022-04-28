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

if (process.env.NODE_ENV === 'development') {
  // Save user readable type system shorthand of schema
  fs.writeFileSync(`${__dirname}/../schema/schema.graphql`, printSchema(schema));

  // Save JSON of full schema introspection for Babel Relay Plugin to use
  (async () => {
    const result = await graphql({schema, source: getIntrospectionQuery()});
    if (result.errors) {
      console.error('ERROR introspecting schema: ', JSON.stringify(result.errors, null, 2));
      process.exit(1);
    } else {
      console.log('Rebuild GraphQL Schema...');
      fs.writeFileSync(`${__dirname}/../schema/schema.json`, JSON.stringify(result, null, 2));
      // process.exit(0);
    }
  })();
}
