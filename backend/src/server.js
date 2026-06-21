import express from "express";
import morgan from "morgan";
import cors from "cors";

import { ENV } from "./lib/env.js";
import connectDB from "./lib/db.js";
import noteRoutes from "./router/note.router.js";

const app = express();
const PORT = ENV.PORT || 3000;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api", noteRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server Running on PORT: 3000");
  })
})
