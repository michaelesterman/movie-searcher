import "dotenv/config";

import express from "express";
import cors from "cors";

const main = async () => {
  const app = express();
  const port = process.env.PORT || 3000;

  app.use(express.json());
  app.use(cors());

  app.get("/", (req, res) => {
    res.send("This is the API. Next versions will add authorization.");
  });

  app.listen(port, () => {
    console.log(`🚀 Development API started at http://localhost:${port}`);
  });
};

main();
