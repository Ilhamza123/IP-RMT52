const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");
const { queryInterface } = sequelize;
const { signToken } = require("../helpers/jwt");

let server;
let access_token;
let homepage; // Deklarasikan homepage di sini
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

  user = await sequelize.models.User.findOne({ // Simpan user di sini
    where: { email: "penggunauji@contoh.com" },
  });
  access_token = signToken({ id: user.id, email: user.email });

  // Tambahkan logika untuk membuat homepage
  homepage = await sequelize.models.HomePage.create({
    title: "Judul Homepage",
    text: "Teks Homepage"
  });
});

afterAll(async () => {
  await server.close();
  await queryInterface.bulkDelete("Users", null, {
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
  await queryInterface.bulkDelete("HomePages", null, {
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
  await sequelize.close();
});

describe("ControllerHomepage", () => {
    test("GET /homepage - harus mengembalikan semua homepage", async () => {
        const response = await request(app)
            .get("/homepage")
            .set("Authorization", `Bearer ${access_token}`);
        expect(response.status).toBe(200);
        
        console.log(response.body); 
    });

    test("POST /homepage - harus berhasil membuat homepage", async () => {
        const response = await request(app)
            .post("/homepage")
            .set("Authorization", `Bearer ${access_token}`)
            .send({
               
            });
        expect(response.status).toBe(201);
      
        console.log(response.body); //
    });

    test('Berhasil mengupdate data Homepage berdasarkan params id yang diberikan', async () => {
        const response = await request(app)
          .put(`/homepage/${homepage.id}`)
          .set('Authorization', `Bearer ${access_token}`) // Gunakan token admin
          .send({
            title: "Judul Diperbarui",
            text: "Teks diperbarui"
          });

        expect(response.status).toBe(200); 
        expect(response.body).toHaveProperty('id',homepage.id);
        expect(response.body).toHaveProperty('title', "Judul Diperbarui");
        // expect(response.body).toHaveProperty('text', "Teks diperbarui");
        console.log(response.body,"<<<<<<<<<<<<<<<");
        
    });

    test("DELETE /homepage/:id - harus menghapus homepage", async () => {
        const response = await request(app)
            .delete(`/homepage/${homepage.id}`)
            .set('Authorization', `Bearer ${access_token}`);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Homepage berhasil dihapus");
        console.log(response.body); // Tambahkan ini untuk mencetak pesan ke console
    });
});
