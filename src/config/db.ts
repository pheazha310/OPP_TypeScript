import mysql from "mysql2/promise";

class Database {
  private static connection: mysql.Connection;

  public static async connect() {
    if (!this.connection) {
      this.connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "test_db",
      });

      console.log("MySQL connected to test_db");
    }

    return this.connection;
  }
}

export default Database;
