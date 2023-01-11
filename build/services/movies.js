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
exports.deleteMovie = exports.updateMovie = exports.getMovieDetails = exports.getAllMovies = exports.insertMovie = void 0;
const movies_model_1 = __importDefault(require("../models/movies.model"));
const getAllMovies = () => __awaiter(void 0, void 0, void 0, function* () {
    const movie = movies_model_1.default.find({});
    return movie;
});
exports.getAllMovies = getAllMovies;
const getMovieDetails = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const movie = yield movies_model_1.default.findOne({ _id: id });
    return movie;
});
exports.getMovieDetails = getMovieDetails;
const insertMovie = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const movie = new movies_model_1.default(data);
    yield movie.save();
    return movie;
});
exports.insertMovie = insertMovie;
const updateMovie = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const movie = yield movies_model_1.default.findByIdAndUpdate({ _id: id }, data, { new: true });
    return movie;
});
exports.updateMovie = updateMovie;
const deleteMovie = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const movie = yield movies_model_1.default.findByIdAndDelete({ _id: id });
    return { success: true };
});
exports.deleteMovie = deleteMovie;
