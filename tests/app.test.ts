import { createApolloServer } from '../src/index';
import { ApolloServer } from '@apollo/server';

import request from 'supertest';

const queryData = {
  query: `query sayHello {
    message
  }`
};

describe('e2e Hello World', () => {
  let server: ApolloServer;
  let url: string;

  beforeAll(async () => {
    const aServer = await createApolloServer({ port: 0 });
    url = aServer.url;
    server = aServer.server;
  });

  afterAll(async () => {
    await server?.stop();
  });

  it('hello world', async () => {
    // send our request to the url of the test server
    const response = await request(url).post('/').send(queryData);
    expect(response.body.errors).toBeUndefined();
    expect(response.body.data?.message).toBe('Hello World');
  });
});
