"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMembros = getMembros;
exports.createMembro = createMembro;
exports.getMembroById = getMembroById;
exports.deleteMembroById = deleteMembroById;
exports.updateMembroById = updateMembroById;

var _Membros = _interopRequireDefault(require("../models/Membros"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getMembros(_x, _x2) {
  return _getMembros.apply(this, arguments);
}

function _getMembros() {
  _getMembros = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var membros;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Membros["default"].findAll();

          case 2:
            membros = _context.sent;

            try {
              res.json({
                data: membros
              });
            } catch (e) {
              res.status(500).json({
                message: "Somethin goes wrong!",
                data: {}
              });
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getMembros.apply(this, arguments);
}

function createMembro(_x3, _x4) {
  return _createMembro.apply(this, arguments);
}

function _createMembro() {
  _createMembro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, name, priority, description, deliverydate, newMembro;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, priority = _req$body.priority, description = _req$body.description, deliverydate = _req$body.deliverydate;
            _context2.prev = 1;
            _context2.next = 4;
            return _Membros["default"].create({
              name: name,
              priority: priority,
              description: description,
              deliverydate: deliverydate
            }, {
              fields: ["id", "nome", "telefone", "email", "endereco", "situacao", "datahoraactual", "datsahoracriacao"]
            });

          case 4:
            newMembro = _context2.sent;

            if (!newMembro) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: "Membro created sucessfully!",
              date: newMembro
            }));

          case 7:
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            res.status(500).json({
              message: "Somethin goes wrong!",
              data: {}
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _createMembro.apply(this, arguments);
}

function getMembroById(_x5, _x6) {
  return _getMembroById.apply(this, arguments);
}

function _getMembroById() {
  _getMembroById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, membro;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Membros["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            membro = _context3.sent;
            res.json(membro);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            res.status(500).json({
              message: "Somethin goes wrong!",
              data: {}
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _getMembroById.apply(this, arguments);
}

function deleteMembroById(_x7, _x8) {
  return _deleteMembroById.apply(this, arguments);
}

function _deleteMembroById() {
  _deleteMembroById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _Membros["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.json({
              message: "Membro Deleted Sucessfully!",
              count: deleteRowCount
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            res.status(500).json({
              message: "Somethin goes wrong!",
              data: {}
            });

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _deleteMembroById.apply(this, arguments);
}

function updateMembroById(_x9, _x10) {
  return _updateMembroById.apply(this, arguments);
}

function _updateMembroById() {
  _updateMembroById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, name, priority, description, deliverydate, membros;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, priority = _req$body2.priority, description = _req$body2.description, deliverydate = _req$body2.deliverydate;
            _context6.prev = 2;
            _context6.next = 5;
            return _Membros["default"].findAll({
              attributes: ["id", "nome", "telefone", "email", "endereco", "situacao", "datahoraactual", "datsahoracriacao"],
              where: {
                id: id
              }
            });

          case 5:
            membros = _context6.sent;

            if (membros.length > 0) {
              membros.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(membro) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return membro.update({
                            name: name,
                            priority: priority,
                            description: description,
                            deliverydate: deliverydate
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x11) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.json({
              message: "Membro Updated Sucessfully!",
              data: membros
            }));

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](2);
            res.status(500).json({
              message: "Somethin goes wrong!",
              data: {}
            });

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 10]]);
  }));
  return _updateMembroById.apply(this, arguments);
}