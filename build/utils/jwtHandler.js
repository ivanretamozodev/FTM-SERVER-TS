"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || 'PUT_YOUR_SECRET_KEY_HERE';
const generateToken = (id) => {
    const jwt = (0, jsonwebtoken_1.sign)({ id }, JWT_SECRET, {
        expiresIn: '1d',
    });
    return jwt;
};
exports.generateToken = generateToken;
const verifyToken = (jwt) => {
    const isValid = (0, jsonwebtoken_1.verify)(jwt, JWT_SECRET);
    return isValid;
};
exports.verifyToken = verifyToken;
