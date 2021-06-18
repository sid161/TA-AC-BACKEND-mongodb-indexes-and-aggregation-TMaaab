var express = require('express');
const { db, count } = require('../models/user');
var Question = require('../models/question');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

Question.aggregate([
  {
    $group: {
      _id: "null",
      count: {$sum:1}
    }
}
]);

Question.aggregate([
  {
    $group:{
      _id:"views",
      count: {$sum:$views}
    }
  }
])

Question.aggregate([
  {
    $unwind: '$tags'
  },
  {
  $group: {
    _id: '$tags',
    count: {$sum:1}

  }
  }
])



module.exports = router;
