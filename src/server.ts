import app from "./app";
import Database from "./config/db";

const PORT = 3000;

async function startServer() {
  try {
    await Database.connect();

    app.listen(PORT, () => {
      console.log(`Server running: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
}

startServer();
