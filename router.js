const express = require('express');
const UserController = require('./controllers/UserController.js');

const router = express.Router();

router.get("/", function (req, res) {
    res.send("Hello World!");
  });
router.post('/user/create', UserController.create);

module.exports = router;