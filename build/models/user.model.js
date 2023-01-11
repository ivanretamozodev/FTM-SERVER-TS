"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    role: {
        type: String,
        enum: ['USER_ROLE', 'ADMIN_ROLE'],
        default: 'USER_ROLE',
    },
}, {
    versionKey: false,
    timestamps: true,
});
const userModel = (0, mongoose_1.model)('User', UserSchema);
exports.default = userModel;
