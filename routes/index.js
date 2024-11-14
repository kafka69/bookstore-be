var express = require('express');
var router = express.Router();

let dotenv = require('dotenv').config();
console.log(dotenv)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send("Welcome to CoderSchool!");
});
/* Book router */
const bookRouter= require('./book.api.js')
router.use('/books',bookRouter)
module.exports = router;
