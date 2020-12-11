"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tipo = require("../controllers/tipo.controller");

var router = (0, _express.Router)();
router.get('/', _tipo.getTipos);
router.post('/', _tipo.createTipo);
router.get('/:id', _tipo.getTipoById);
router["delete"]('/:id', _tipo.deleteTipoById);
router.put('/:id', _tipo.updateTipoById);
router.get('/membro/:membroid', _tipo.geTipoByProject);
var _default = router;
exports["default"] = _default;