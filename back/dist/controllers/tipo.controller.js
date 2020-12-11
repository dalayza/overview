"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTipos = getTipos;
exports.createTipo = createTipo;
exports.getTipById = getTipById;
exports.deleteTipoById = deleteTipoById;
exports.updateTipoById = updateTipoById;
exports.geTipoByProject = geTipoByProject;

var _Tipos = _interopRequireDefault(require("../models/Tipos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getTipos(_x, _x2) {
  return _getTipos.apply(this, arguments);
}

function _getTipos() {
  _getTipos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var tipos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Tipos["default"].findAll({
              attributes: ["id", "descricao", "situacao", "datahoraactual", "datahoracriacao"],
              order: [["id", "DESC"]]
            });

          case 2:
            tipos = _context.sent;
            res.json({
              tasks: tasks
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getTipos.apply(this, arguments);
}

function createTipo(_x3, _x4) {
  return _createTipo.apply(this, arguments);
}

function _createTipo() {
  _createTipo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, descricao, situacao, membroid, datahoracriacao, newTipo;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, descricao = _req$body.descricao, situacao = _req$body.situacao, membroid = _req$body.membroid, datahoracriacao = _req$body.datahoracriacao;
            _context2.next = 3;
            return Task.create({
              descricao: descricao,
              situacao: situacao,
              membroid: membroid,
              datahoracriacao: datahoracriacao
            }, {
              fields: ["descricao", "situacao", "membroid", "datahoracriacao"]
            });

          case 3:
            newTipo = _context2.sent;
            res.json({
              message: "New tipo created!"
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createTipo.apply(this, arguments);
}

function getTipById(_x5, _x6) {
  return _getTipById.apply(this, arguments);
}

function _getTipById() {
  _getTipById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, tipo;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _Tipos["default"].findOne({
              where: {
                id: id
              }
            });

          case 3:
            tipo = _context3.sent;
            res.json(tipo);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getTipById.apply(this, arguments);
}

function deleteTipoById(_x7, _x8) {
  return _deleteTipoById.apply(this, arguments);
}

function _deleteTipoById() {
  _deleteTipoById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;

            _Tipos["default"].destroy({
              attributes: ["id", "descricao", "situacao", "membroid", "datahoracriacao", "datahoraactual"],
              where: {
                id: id
              }
            });

            res.send({
              message: "Tipo deleted!"
            });

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteTipoById.apply(this, arguments);
}

function updateTipoById(_x9, _x10) {
  return _updateTipoById.apply(this, arguments);
}

function _updateTipoById() {
  _updateTipoById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, descricao, situacao, membroid, datahoracriacao, tipo, udateTipo;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, descricao = _req$body2.descricao, situacao = _req$body2.situacao, membroid = _req$body2.membroid, datahoracriacao = _req$body2.datahoracriacao;
            _context5.next = 4;
            return _Tipos["default"].findOne({
              attributes: ["id", "descricao", "situacao", "membroid", "datahoraactual"],
              where: {
                id: id
              }
            });

          case 4:
            tipo = _context5.sent;
            _context5.next = 7;
            return _Tipos["default"].update({
              descricao: descricao,
              situacao: situacao,
              membroid: membroid,
              datahoracriacao: datahoracriacao
            }, {
              where: {
                id: id
              }
            });

          case 7:
            udateTipo = _context5.sent;
            res.json({
              message: "Tipo updated!",
              udateTipo: udateTipo
            });

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _updateTipoById.apply(this, arguments);
}

function geTipoByProject(_x11, _x12) {
  return _geTipoByProject.apply(this, arguments);
}

function _geTipoByProject() {
  _geTipoByProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var membroid, tipo;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            membroid = req.params.membroid;
            _context6.next = 3;
            return Task.findAll({
              attributes: ["id", "descricao", "situacao", "membroid", "datahoracriacao", "datahoraactual"],
              where: {
                membroid: membroid
              }
            });

          case 3:
            tipo = _context6.sent;
            res.json({
              tipos: tipo
            });

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _geTipoByProject.apply(this, arguments);
}