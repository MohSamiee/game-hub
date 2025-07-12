import useData from "./useData";
import { Platform } from "./useGames";

interface Platfor {
  id: number;
  name: string;
  slug: string;
}
const usetPlatforms = () => useData<Platform>("platforms/lists/parents");
export default usetPlatforms;
