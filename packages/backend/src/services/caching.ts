import { createClient } from "redis";
import { SearchResult } from "../types";

const cacheUri = process.env.CACHE_URI || "redis://localhost:6379";
const cache = createClient({ url: cacheUri });
cache.on("error", (err) => console.log("Redis Client Error", err));

export const getCachedResult = async (
  title: string,
  page: string
): Promise<SearchResult | null> => {
  try {
    await cache.connect();
    const cacheKey = `${title}:${page}`;
    const cachedResult = (await cache.json.get(
      cacheKey
    )) as unknown as SearchResult;
    await cache.disconnect();

    if (cachedResult) {
      console.log(`Cache hit for "${cacheKey}"`);
      return cachedResult;
    }

    console.log(`Cache miss for "${cacheKey}"`);

    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const cacheResult = async (
  searchResult: SearchResult,
  title: string,
  page: string
) => {
  try {
    await cache.connect();

    const cacheKey = `${title}:${page}`;
    const expirationTime = 300; // 5 minutes
    await cache.json.set(cacheKey, "$", searchResult as any);
    await cache.expire(cacheKey, expirationTime);
    console.log(`Cached result for "${cacheKey}"`);

    await cache.disconnect();
  } catch (error) {
    console.log(error);
  }
};
