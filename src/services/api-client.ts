import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  results: T[];
  count: number;
}

export interface FetchResponse<T> {
  results: T[];
  next?: string | null;
  count: number;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_KEY,
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}
export default APIClient;
