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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginNewUser = exports.registerNewUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const jwtHandler_1 = require("../utils/jwtHandler");
const passwordHandler_1 = require("../utils/passwordHandler");
const registerNewUser = ({ email, password, name }) => __awaiter(void 0, void 0, void 0, function* () {
    const userExist = yield user_model_1.default.findOne({ email });
    if (userExist)
        return 'USER_ALREADY_EXIST';
    const passwordHash = yield (0, passwordHandler_1.enctrypt)(password);
    const user = new user_model_1.default({ email, password: passwordHash, name });
    yield user.save();
    return user;
});
exports.registerNewUser = registerNewUser;
const loginNewUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const userExist = yield user_model_1.default.findOne({ email });
    if (!userExist)
        return 'USER_NOT_FOUND';
    const passwordHash = userExist.password;
    const isValid = yield (0, passwordHandler_1.verifyPassword)(password, passwordHash);
    if (!isValid)
        return 'WRONG_PASSWORD';
    const token = (0, jwtHandler_1.generateToken)(userExist.id);
    return token;
});
exports.loginNewUser = loginNewUser;
