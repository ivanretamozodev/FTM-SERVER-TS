"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GenreSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
}, {
    versionKey: false,
    timestamps: true,
});
const genreModel = (0, mongoose_1.model)('Genre', GenreSchema);
exports.default = genreModel;
