"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Tipos = _database.sequelize.define('tipos', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  descricao: {
    type: _sequelize["default"].TEXT
  },
  situacao: {
    type: _sequelize["default"].TEXT
  },
  datahoraactual: {
    type: _sequelize["default"].DATE
  },
  datahoracriacao: {
    type: _sequelize["default"].DATE
  },
  membroid: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
});

var _default = Tipo;
exports["default"] = _default;