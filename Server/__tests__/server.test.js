const request = require('supertest');
const app  = require('../server.js');

describe('Test API endpoints', () => {
  it('should get the hello message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Hello, World ✌️');
  });

  it('should get a list of pokemons', async () => {
    const res = await request(app).get('/api/pokemons');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
