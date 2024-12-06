"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { setup, container } = require("./container");
setup();
const app = (0, express_1.default)();
const port = 3000;
const userDao = container.resolve("userDao");
userDao.createTable();
app.get("/", (req, res) => {
    res.send("Hello worldl");
});
app.listen(port, () => {
    console.log("Server listening at", port);
});
