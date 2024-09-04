const request = require('supertest');
const app = require("../app");

describe("server", () => {
  test ("GET / ", async () => {
    const {status, body} = await request(app).get("/");
    expect(status).toBe(200);
    expect(body).toHaveProperty("message", "server running broo")
    // console.log(status, body);
  });
});