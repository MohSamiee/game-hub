import usetPlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platforms } = usetPlatforms();
  return platforms?.results.find((p) => p.id === id);
};

export default usePlatform;
