const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Selamat datang di aplikasi saya!');
});

module.exports = router;