type Database = any;

class UserDao {
  private db: Database;
  constructor({ db }: any) {
    this.db = db;
  }

  async createUserTable() {
    console.log("Creating user table");
    return this.db.exec(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
            )`);
  }

  async insertUser(name: string, email: string, password: string) {
    return this.db.run(
      `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
      [name, email, password]
    );
  }
}

module.exports = UserDao;
