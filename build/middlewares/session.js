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
exports.checkSession = void 0;
const jwtHandler_1 = require("../utils/jwtHandler");
const checkSession = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = (0, jwtHandler_1.verifyToken)(`${jwt}`);
        if (!isUser) {
            return res.status(401).send('INVALID_JWT');
        }
        else {
            next();
        }
    }
    catch (e) {
        return res.status(400).send('INVALID_SESSION');
    }
});
exports.checkSession = checkSession;
