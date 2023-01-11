"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginCtrl = exports.registerCtrl = void 0;
const auth_1 = require("../services/auth");
const errorHandler_1 = require("../utils/errorHandler");
const registerCtrl = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseUser = yield (0, auth_1.registerNewUser)(body);
        res.status(200).json(responseUser);
    }
    catch (e) {
        (0, errorHandler_1.handleHttp)(res, 'ERROR_REGISTER_USER');
    }
});
exports.registerCtrl = registerCtrl;
const loginCtrl = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = body;
        const responseLogin = yield (0, auth_1.loginNewUser)({ email, password });
        if (responseLogin === 'WRONG_PASSWORD') {
            res.status(404).json(responseLogin);
        }
        else {
            res.status(200).json(responseLogin);
        }
    }
    catch (e) {
        (0, errorHandler_1.handleHttp)(res, 'ERROR_LOGIN_USER');
    }
});
exports.loginCtrl = loginCtrl;
