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
exports.deleteItem = exports.updateItem = exports.postItem = exports.getItem = exports.getItems = void 0;
const movies_1 = require("../services/movies");
const errorHandler_1 = require("../utils/errorHandler");
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, movies_1.getAllMovies)();
        res.status(200).json(response);
    }
    catch (e) {
        (0, errorHandler_1.handleHttp)(res, 'ERROR_GET_MOVIES');
    }
});
exports.getItems = getItems;
const getItem = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, movies_1.getMovieDetails)(params.id);
        res.status(200).json(response);
    }
    catch (e) {
        (0, errorHandler_1.handleHttp)(res, 'ERROR_GET_MOVIE');
    }
});
exports.getItem = getItem;
const postItem = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, movies_1.insertMovie)(body);
        res.send(response);
    }
    catch (e) {
        (0, errorHandler_1.handleHttp)(res, 'ERROR_CREATE_MOVIE', e);
    }
});
exports.postItem = postItem;
const updateItem = ({ params, body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, movies_1.updateMovie)(params.id, body);
        res.status(200).json(response);
    }
    catch (e) {
        (0, errorHandler_1.handleHttp)(res, 'ERROR_UPDATE_MOVIE');
    }
});
exports.updateItem = updateItem;
const deleteItem = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, movies_1.deleteMovie)(params.id);
        res.status(200).json(response);
    }
    catch (e) {
        (0, errorHandler_1.handleHttp)(res, 'ERROR_DELETE_MOVIE');
    }
});
exports.deleteItem = deleteItem;
