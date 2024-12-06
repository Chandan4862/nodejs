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
class UserDao {
    constructor({ db }) {
        this.db = db;
    }
    createUserTable() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Creating user table");
            return this.db.exec(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
            )`);
        });
    }
    insertUser(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.run(`INSERT INTO users (name, email, password) VALUES (?, ?, ?)`, [name, email, password]);
        });
    }
}
module.exports = UserDao;
