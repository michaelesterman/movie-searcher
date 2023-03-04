import { SearchError, SearchResult } from "../types";

export const getCachedResult = async (
  title: string,
  page: string
): Promise<SearchResult | SearchError | null> => {
  const cacheKey = `${title}-${page}`;
  // const cachedResult = await cache.get(cacheKey);
  const cachedResult = null;

  if (cachedResult) {
    return cachedResult;
  }

  console.log(`Cache miss for "${cacheKey}"`);

  return null;
};
