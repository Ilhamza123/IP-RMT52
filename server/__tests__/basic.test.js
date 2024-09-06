const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");
const { queryInterface } = sequelize;
const { signToken } = require("../helpers/jwt");

let server;
let access_token;
let basic; 

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

  await queryInterface.bulkInsert("Belts", [
    {
      title: "Sabuk Test",
      arti: "Arti Sabuk Test",
      teknik: "Teknik Sabuk Test",
      descripsi: "Deskripsi Sabuk Test",
      imgUrl: "urlGambarSabukTest.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
  
  await queryInterface.bulkInsert("Basics", [{
    cardTitle: "Judul Basic",
    cardText: "Deskripsi Basic",
    UserId: 1,
    BeltId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  }]);

  // Ambil data basic setelah penyisipan
  basic = await sequelize.models.Basic.findOne({
    where: { cardTitle: "Judul Basic" }
  });

  console.log("UserId:", 1);
  console.log("BeltId:", 1);

  user = await sequelize.models.User.findOne({ 
    where: { email: "penggunauji@contoh.com" },
  });

  belt = await sequelize.models.Belt.findOne({ 
    where: { title: "Sabuk Test" },
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

  await queryInterface.bulkDelete("Belts", null, {
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });

  await queryInterface.bulkDelete("Basics", null, {
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
  await sequelize.close();
});

describe("ControllerBasic", () => {
    test("GET /basic - harus mengembalikan semua basic", async () => {
        const response = await request(app)
            .get("/basic")
            .set("Authorization", `Bearer ${access_token}`);
        expect(response.status).toBe(200);
        console.log(response.body); 
    });

    test("POST /basic - harus berhasil membuat basic", async () => {
        const response = await request(app)
            .post("/basic")
            .set("Authorization", `Bearer ${access_token}`)
            .send({
                cardTitle: "Basic Baru",
                cardText: "Deskripsi Basic Baru",
                UserId: 1,
                BeltId: 1
            });
        expect(response.status).toBe(201);
        console.log(response.body); 
    });

    test('Berhasil mengupdate data Basic berdasarkan params id yang diberikan', async () => {
        const response = await request(app)
          .put(`/basic/${basic.id}`)
          .set('Authorization', `Bearer ${access_token}`)
          .send({
            cardTitle: "Basic Diperbarui",
            cardText: "Deskripsi diperbarui",
            UserId: 1,
            BeltId: 1
          });

        expect(response.status).toBe(200); 
        expect(response.body).toHaveProperty('id', basic.id);
        expect(response.body).toHaveProperty('cardTitle', "Basic Diperbarui");
        console.log(response.body,"<<<<<<<<<<<<<<<");
    });

    test("DELETE /basic/:id - harus menghapus basic", async () => {
        const response = await request(app)
            .delete(`/basic/${basic.id}`)
            .set('Authorization', `Bearer ${access_token}`);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Basic berhasil dihapus...");
        console.log(response.body); 
    });
});
