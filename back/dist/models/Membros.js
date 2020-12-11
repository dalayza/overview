"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Tipos = _interopRequireDefault(require("./Tipos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Membro = _database.sequelize.define('membros', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nome: {
    type: _sequelize["default"].TEXT
  },
  telefone: {
    type: _sequelize["default"].INTEGER
  },
  mail: {
    type: _sequelize["default"].TEXT
  },
  endereco: {
    type: _sequelize["default"].TEXT
  },
  situacao: {
    type: _sequelize["default"].TEXT
  },
  datahoraactual: {
    type: _sequelize["default"].DATE
  },
  datsahoracriacao: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false
});

Membro.hasMany(_Tipos["default"], {
  foreignKey: 'membroid',
  sourcekey: 'id'
});

_Tipos["default"].belongsTo(Membro, {
  foreignKey: 'membroid',
  sourcekey: 'id'
});

var _default = Membro;
exports["default"] = _default;