import axios from "axios";
export interface FetchResponse<T> {
  results: T[];
  count: number;
}

export interface FetchResponse<T> {
  results: T[];
  count: number;
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_KEY,
  },
});
