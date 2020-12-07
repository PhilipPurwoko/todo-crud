const express = require('express');
const router = express.Router();
const todoController = require('./controller/todo');

router.get('/',todoController.getToDo);
router.post('/',todoController.postToDo);

module.exports = router;