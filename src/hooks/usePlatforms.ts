import useData from "./useData";
import { Platform } from "./useGames";
import platforms from "../data/Platform";
interface Platfor {
  id: number;
  name: string;
  slug: string;
}
//const usetPlatforms = () => useData<Platform>("platforms/lists/parents");
const usetPlatforms = () => ({
  data: platforms,
  isLoading: false,
  error: null,
});

export default usetPlatforms;
