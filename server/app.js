if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require('express');
const app = express();
require('dotenv').config();
const routes = require('./routes/routes');
const Controller = require('./controller/ControllerUser');
const ControllerBasic = require('./controller/ControllerBasic');
const ControllerHomepage = require('./controller/ControllerHomePage');
const ControllerBelt = require('./controller/ControllerBelt');
const ControllerMulter = require('./controller/ControllerMulter');
// const ControllerGemini = require('./controller/ControllerGemini');
//
const multer  = require('multer')
const storage = multer.memoryStorage()
//
const upload = multer({ storage: storage })
const ControllerAxiosInstance = require('./controller/ControllerAxiosInstance');
const cors = require('cors');

app.patch('/belt/:id',upload.single("spec"),ControllerMulter.Image)

const authentication = require('./middlewares/authentication');
const gemini = require('./helpers/gemini');

// Middleware untuk parsing JSON
app.use(express.json());
// Middleware untuk parsing URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.post("/Register", Controller.register);
app.post("/Login", Controller.login);

//GEMINI AI
app.post('/tell-me', async (req, res, next) => {
  try {
    const userInput  = req.body;
    const response = await gemini(userInput);
    
    res.status(200).json(response);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({
      message: "Terjadi kesalahan pada server"
    });
  }
});

app.post ('/google-login', Controller.googleLogin);

app.use(authentication)

// Menggunakan routes

app.use('/', routes);
// Menggunakan middleware authentication untuk rute yang memerlukan autentikasi


app.get ('/Homepage',ControllerHomepage.GetHomepage);
app.get('/belt', ControllerBelt.GetBelt);
app.get("/Basic", ControllerBasic.GetBasics);
app.get("/detailteknik", ControllerBasic.GetDetailteknik);
app.get('/TopRanking', ControllerAxiosInstance.GetRanking); //axios

//Homepage
app.post('/Homepage',ControllerHomepage.CreateHomepage);
app.put('/Homepage/:id',ControllerHomepage.UpdateHomepage);
app.delete('/Homepage/:id',ControllerHomepage.DeleteHomepage);

//Belt
app.post('/belt',ControllerBelt.CreateBelt);
app.put('/belt/:id',ControllerBelt.UpdateBelt);
app.delete('/belt/:id',ControllerBelt.DeleteBelt);

//basic
app.post('/basic',ControllerBasic.CreateBasic);
app.put('/basic/:id',ControllerBasic.UpdateBasic);
app.delete('/basic/:id',ControllerBasic.DeleteBasic);

//detailteknik
app.post('/detailteknik',ControllerBasic.CreateDetailteknik);
app.put('/detailteknik/:id',ControllerBasic.UpdateDetailteknik);
app.delete('/detailteknik/:id',ControllerBasic.DeleteDetailteknik);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Terjadi kesalahan pada server!');
});
module.exports = app;
