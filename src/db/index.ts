const sqlite3 = require("sqlite3").verbose();

function createDb() {
  console.log("Creating in-memory database");
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(":memory:", (err: any) => {
      if (err) {
        console.error(err.message);
        reject(err);
      }
      console.log("Connected to the in-memory SQlite database");
      resolve(db);
    });
  });
}

module.exports = createDb;
