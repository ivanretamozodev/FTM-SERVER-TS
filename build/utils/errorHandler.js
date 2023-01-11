"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttp = void 0;
const handleHttp = (res, error, errRaw) => {
    console.log(errRaw);
    res.status(400).json({ error });
};
exports.handleHttp = handleHttp;
