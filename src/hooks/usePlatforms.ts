import { useQuery } from "@tanstack/react-query";
import platforms from "../data/Platform";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const apiClient = new APIClient<Platform>("/platforms/lists/parents");
const usetPlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platforms.length, results: platforms },
  });

export default usetPlatforms;
