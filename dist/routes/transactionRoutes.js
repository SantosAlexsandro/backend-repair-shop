"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _TransactionController = require('../controllers/TransactionController'); var _TransactionController2 = _interopRequireDefault(_TransactionController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _TransactionController2.default.index);
router.post('/', _loginRequired2.default, _TransactionController2.default.store);
router.put('/:id', _loginRequired2.default, _TransactionController2.default.update);
router.get('/:id', _TransactionController2.default.show);
router.delete('/:id', _loginRequired2.default, _TransactionController2.default.delete);

exports. default = router;
