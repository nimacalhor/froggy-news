import { BASE_URL } from "../../libraries/constants";
import { GalleryListCriteria } from "../../libraries/gallery-types";
import { UNSPLASH_ACCESS_KEY } from "@root/modules/general/libraries/constants";

export const generateUrl = function (criteria: GalleryListCriteria) {
  const { query, color, order_by, page, per_page } = criteria;
  const url =
    BASE_URL +
    `?client_id=${UNSPLASH_ACCESS_KEY}&query=${query}${
      (color && color !== "any_color") ? `&color=${color}` : ""
    }${order_by ? `&order_by=${order_by}` : ""}${page ? `&page=${page}` : ""}${
      per_page ? `&per_page=${per_page}` : ""
    }`;
  return url;
};
