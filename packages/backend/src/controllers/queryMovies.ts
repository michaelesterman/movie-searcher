import axios from "axios";
import { SearchResult, SearchError } from "../types";

export const queryMovies = async (
  title: string,
  page = "1"
): Promise<SearchResult | SearchError> => {
  if (!title) {
    return { error: "No title" };
  }

  try {
    const url = `https://www.omdbapi.com/`;
    const params = {
      s: title,
      apikey: process.env.OMDB_API_KEY,
      page,
      v: "1",
      r: "json",
    };
    const config = {
      method: "get",
      url,
      params,
    };

    const { data } = await axios(config);

    return data;
  } catch (error) {
    console.error(error);
    return { error: "Server is unavailable" };
  }
};
