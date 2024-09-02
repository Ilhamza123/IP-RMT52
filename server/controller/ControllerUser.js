const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");

class Controller {
  static async register(req, res) {
    try {
      // console.log(req.body);
      const { username, email, password } = req.body;

      if (!email || !password) {
        throw { name: "CredentialsRequired" };
      }

      const newUser = await User.create({
        username,
        email,
        password,
      });
      res.status(201).json({ newUser });
    } catch (error) {
      console.log(error, "<<<< error sebelum daftar");
      res.status(500).json({ name: "error server" });
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body; // check isi body

      if (!email || !password) {
        throw { name: "CredentialsRequired" };
      }

      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw { name: "unauthorized" };
      }

      const compare = comparePassword(password, user.password);
      // console.log(compare); // check apakah benar password dengan yang di database sama?
      if (!compare) {
        throw { name: "unauthorized" };
      }

      // console.log("token :", access_token);
      const access_token = signToken({ id: user.id, email: user.email });
      res.status(200).json({ access_token });
    } catch (error) {
      // console.log(error, "<<<<<<<<<<");
      // throw { name: "error" };
      next(error);
    }
  }

  static async googleLogin(req, res, next) {
    try {
      if (!req.body.googleToken) {
        throw { name: "missingGoogleToken" };
      }
      const client = new OAuth2Client();
      const ticket = await client.verifyIdToken({
        idToken: req.body.googleToken,
        audience: process.env.GOOGLE_CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      const { email } = ticket.getPayload();

      const [user] = await User.findOrCreate({
        where: { email },
        defaults: {
          email: email,
          password: Date.now().toString() + "DUMMY" + Math.random().toFixed(0),
          role: "user",
        },
      });
      // const userid = payload['sub'];


      // If the request specified a Google Workspace domain:
      // const domain = payload['hd'];
      // console.log(req.body);
      const access_token = signToken({ id: user.id, email: user.email });
      res.status(200).json({ access_token });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
module.exports = Controller;
