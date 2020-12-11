"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _membro = require("../controllers/membro.controller");

var router = (0, _express.Router)();
router.get('/', _membro.getMembros);
router.post('/', _membro.createMembro);
router.get('/:id', _membro.getembroById);
router["delete"]('/:id', _membro.deleteembroById);
router.put('/:id', _membro.updateembroById);
var _default = router;
exports["default"] = _default;