import Movie from "./movie";

export interface SearchResult {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

export interface SearchError {
  error: string;
}
