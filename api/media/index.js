"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var media_controller_1 = require("./media.controller");
var controller = new media_controller_1.default();
var auth_service_1 = require("../../auth/auth.service");
var auth = new auth_service_1.default();
var express = require('express');
var router = express.Router();
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();
var router = express.Router();
router.use(multiparty({ uploadDir: './uploads' }));
router.post('/', auth.isAuthenticated(), multipartyMiddleware, controller.create);
// router.post('/product', auth.isAuthenticated(), multipartyMiddleware, controller.updateProductImage);
// router.post('/profile', auth.isAuthenticated(), multipartyMiddleware, controller.updateProfile);
router.get('/', auth.isAuthenticated(), controller.index);
router.get('/my', auth.isAuthenticated(), controller.my);
router.get('/:id', auth.isAuthenticated(), controller.get);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.patch('/:id', auth.isAuthenticated(), controller.update);
router.delete('/:id', auth.isAuthenticated(), controller.delete);
module.exports = router;
//# sourceMappingURL=index.js.map