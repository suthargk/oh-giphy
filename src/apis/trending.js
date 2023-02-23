import { GiphyFetch } from "@giphy/js-fetch-api";

const gf = new GiphyFetch(import.meta.env.VITE_GIPHY);

export const getTrending = async (limit = 10, offset = 25, rating = "g") => {
  const { data: gifs } = await gf.trending({ limit, offset, rating });
  return gifs;
};
