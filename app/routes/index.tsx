import {ActionFunction, json, LoaderFunction} from '@remix-run/node';
import {graphql} from 'graphql';
import {schema} from '~/graphql';

export const action: ActionFunction = async (args) => {
  const {request} = args;

  const {query, variables} = await request.json();

  const result = await graphql({
    contextValue: {},
    rootValue: {},
    schema,
    source: query,
    variableValues: variables,
  });

  return json({result});
};

export const loader: LoaderFunction = async () => {
  const query = '';
  const variableValues = {};

  const result = await graphql({
    contextValue: {},
    rootValue: {},
    schema,
    source: query,
    variableValues,
  });

  return json({result});
};
