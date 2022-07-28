import { AvailableColorsString } from "./../../gallery/libraries/gallery-types";
import { NewsCategory } from "@modules/news/libraries/news-types";
export const CONTAINER_WIDTH = "min(1200px, 90vw)";
export const SITE_NAME = "froggy news";
export const GEO_URL =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
export const FOOTER_MAP_COORDINATES: [number, number][] = [
  [50, 37],
  [140, 49],
  [115, 155],
  [10, 175],
  [-50, 180],
];
export const FOOTER_HEIGHT = 300;
export const DOMAIN =
  process.env.NODE_ENV === "production" ? "http://localhost:3000" : "...";
export const CARD_IMAGE_W = 300;
export const CARD_IMAGE_H = 150;
export const NEWS_CARD_ITEM_H = 350;
export const PAPER_BG_ALPHA = 0.075;
export const REVALIDATION_TIME = 600;
export const UNSPLASH_ACCESS_KEY =
  "zbEdLlgE7QPjlwuotc1YN-fBMDklHab3jE8-uq35Axc";
export const PAGE_SIZE = 10;
export const SERVICES_TITLE: NewsCategory[] = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];
export const GALLEY_QUERIES = [
  "sea",
  "desert",
  "city",
  "space",
  "sky",
  "art",
  "jungle",
];
export const AVAILABLE_COLORS = [
  "black_and_white",
  "black",
  "white",
  "yellow",
  "orange",
  "red",
  "purple",
  "magenta",
  "green",
  "teal",
  "blue",
  "any_color",
];
