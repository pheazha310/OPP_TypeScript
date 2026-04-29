import Database from "../config/db";

class User {
  static async create(name: string, email: string) {
    const db = await Database.connect();

    const [result] = await db.execute(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );

    return result;
  }

  static async findAll() {
    const db = await Database.connect();
    const [rows] = await db.execute("SELECT * FROM users");
    return rows;
  }

  static async findById(id: number) {
    const db = await Database.connect();
    const [rows]: any = await db.execute(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );
    return rows[0];
  }

  static async update(id: number, name: string, email: string) {
    const db = await Database.connect();

    return await db.execute(
      "UPDATE users SET name = ?, email = ? WHERE id = ?",
      [name, email, id]
    );
  }

  static async delete(id: number) {
    const db = await Database.connect();

    return await db.execute("DELETE FROM users WHERE id = ?", [id]);
  }
}

export default User;