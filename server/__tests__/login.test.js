const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");
const { queryInterface } = sequelize;
const { signToken } = require("../helpers/jwt");

let server;
let access_token;
let user;

beforeAll(async () => {
  server = app.listen(0);
  await queryInterface.bulkInsert("Users", [
    {
      username: "TestUser",
      email: "penggunauji@contoh.com",
      password: "password123",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  user = await sequelize.models.User.findOne({
    where: { email: "penggunauji@contoh.com" },
  });
  access_token = signToken({ id: user.id, email: user.email });
});

afterAll(async () => {
  await server.close();
  await queryInterface.bulkDelete("Users", null, {
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
  await sequelize.close();
});

describe("ControllerUser", () => {
  test("POST /login - harus berhasil login dengan kredensial yang benar", async () => {
    const response = await request(app)
      .post("/login")
      .send({
        email: "penggunauji@contoh.com",
        password: "password123",
      });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("access_token");
    console.log(response.body);
  });

  test.only("POST /login - harus gagal login dengan kredensial yang salah", async () => {
    const response = await request(app)
      .post("/login")
      .send({
        email: "penggunauji@contoh.com",
        password: "salahpassword",
      });
    expect(response.status).toBe(401); // atau status yang sesuai untuk unauthorized
    expect(response.body).toHaveProperty("name", "unauthorized");
    console.log(response.body);
  });
});
