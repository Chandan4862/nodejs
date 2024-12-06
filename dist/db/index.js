"use strict";
const sqlite3 = require("sqlite3").verbose();
function createDb() {
    return sqlite3.Database(":memory:", (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log("Connected to the in-memory SQlite database");
    });
}
