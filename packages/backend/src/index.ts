import "dotenv/config";

import express from "express";
import cors from "cors";

import { queryMovies } from "./controllers";
import { getCachedResult } from "./services";

const main = async () => {
  const app = express();
  const port = process.env.PORT || 3000;

  app.use(express.json());
  app.use(cors());

  app.get("/", (req, res) => {
    res.send("This is the API. Next versions will add authorization.");
  });

  app.get("/movies", async (req, res) => {
    const title = (req.query.title as string) || "";
    const page = (req.query.page as string) || "1";

    const cachedResult = await getCachedResult(title, page);

    if (cachedResult) {
      return res.json(cachedResult);
    }

    const result = await queryMovies(title, page);
    res.json(result);
  });

  app.listen(port, () => {
    console.log(`🚀 Development API started at http://localhost:${port}`);
  });
};

main();
