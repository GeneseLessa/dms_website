import express from "express";
import cors from "cors";

import mongoose from "../setup/mongoose.js";
import routes from "../routes.js";

class Server {
  constructor() {
    this.server = express();
    this.setUp();
    this.port = process.env.API_PORT || 3000;
  }

  setUp() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
    this.server.use(routes);
  }

  async listen() {
    await mongoose();

    this.server.listen(this.port, () =>
      console.log(`API running at http://localhost:${this.port}/ 🚀`),
    );
  }
}

export default new Server();
