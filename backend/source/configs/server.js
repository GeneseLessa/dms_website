import express from "express";
import cors from "cors";
import routes from "../routes.js";
import mongoose from "../configs/mongoose.js";

class Server {
  constructor() {
    this.server = express();
    this.setUp();
  }

  setUp() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(routes);
    this.server.use(express.urlencoded({ extended: false }));
  }

  async listen() {
    await mongoose();

    this.server.listen(3000, () =>
      console.log(`Backend running at http://localhost:3000/ 🚀`),
    );
  }
}

export default Server;
