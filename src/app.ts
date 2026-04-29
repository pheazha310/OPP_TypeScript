import express from "express";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(express.json());

// routes
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server running: http://localhost:3000");
});