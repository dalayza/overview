"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _task = require("../controllers/task.controller");

var router = (0, _express.Router)();
router.get('/', _task.getTasks);
router.post('/', _task.createTask);
router.get('/:id', _task.getTaskById);
router["delete"]('/:id', _task.deleteTaskById);
router.put('/:id', _task.updateTaskById);
router.get('/project/:projectid', _task.geTaskByProject);
var _default = router;
exports["default"] = _default;