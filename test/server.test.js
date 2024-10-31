const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('should respond with Hello from Node.js backend!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello from Node.js backend!');
  });
});
