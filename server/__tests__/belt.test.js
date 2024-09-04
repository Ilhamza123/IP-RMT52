const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");
const { queryInterface } = sequelize;
const { signToken } = require("../helpers/jwt");

let server;
let access_token;
let belt; // Deklarasikan belt di sini
let user; // Deklarasikan user di sini

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

  user = await sequelize.models.User.findOne({ // Simpan user di sini
    where: { email: "penggunauji@contoh.com" },
  });

  belt = await sequelize.models.Belt.findOne({ // Simpan belt di sini
    where: { title: "Sabuk Test" },
  });
  access_token = signToken({ id: user.id, email: user.email });
//   console.log(`Access Token: ${access_token}`); // access_token
//   console.log(`Title: ${belt.title}`); // menampilkan title
});

afterAll(async () => {
  await server.close();
  await queryInterface.bulkDelete("Belts", null, {
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
  await queryInterface.bulkDelete("Users", null, {
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
  await sequelize.close();
});

describe("ControllerBelt", () => {
  test("GET /belt - harus mengembalikan semua sabuk", async () => {
    const response = await request(app)
      .get("/belt")
      .set("Authorization", `Bearer ${access_token}`); // Pastikan format token yang Anda kirimkan dalam header Authorization adalah Bearer <token>
    expect(response.status).toBe(200);
    expect(response.body[0].title).toBe("Sabuk Test");
    expect(response.body[0].arti).toBe("Arti Sabuk Test");
    expect(response.body[0].teknik).toBe("Teknik Sabuk Test");
    expect(response.body[0].descripsi).toBe("Deskripsi Sabuk Test");
    expect(response.body[0].imgUrl).toBe("urlGambarSabukTest.jpg");
  });
  
  test('Berhasil membuat entitas utama', async () => {
    const response = await request(app)
      .post('/belt')
      .set('Authorization', `Bearer ${access_token}`)
      .send({
        title: "Sabuk Baru",
        arti: "Arti Sabuk Baru",
        teknik: "Teknik Sabuk Baru",
        descripsi: "Deskripsi Sabuk Baru",
        imgUrl: "urlGambarSabukBaru.jpg",
      });

    expect(response.status).toBe(201);
    expect(response.body.title).toBe("Sabuk Baru");
    expect(response.body.arti).toBe("Arti Sabuk Baru");
    expect(response.body.teknik).toBe("Teknik Sabuk Baru");
    expect(response.body.descripsi).toBe("Deskripsi Sabuk Baru");
    expect(response.body.imgUrl).toBe("urlGambarSabukBaru.jpg");
  });

  test("PUT /belt/:id - harus memperbarui sabuk", async () => {
    const updatedBelt = {
      title: "Sabuk Diperbarui",
      arti: "Arti Sabuk Diperbarui",
      teknik: "Teknik Sabuk Diperbarui",
      descripsi: "Deskripsi Sabuk Diperbarui",
      imgUrl: "urlGambarSabukDiperbarui.jpg",
    };
    const response = await request(app)
      .put(`/belt/${belt.id}`)
      .set('Authorization', `Bearer ${access_token}`)
      .send(updatedBelt);
    expect(response.status).toBe(200);
    expect(response.body.title).toBe(updatedBelt.title);
    expect(response.body.arti).toBe(updatedBelt.arti);
    expect(response.body.teknik).toBe(updatedBelt.teknik);
    expect(response.body.descripsi).toBe(updatedBelt.descripsi);
    expect(response.body.imgUrl).toBe(updatedBelt.imgUrl);
  });

  test("DELETE /belt/:id - harus menghapus sabuk", async () => {
    const response = await request(app)
      .delete(`/belt/${belt.id}`)
      .set('Authorization', `Bearer ${access_token}`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Sabuk berhasil dihapus");
  });
});
