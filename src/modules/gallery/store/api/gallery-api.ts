import { log } from "@root/modules/general/libraries/utils";
import axios from "axios";
import {
  GalleryListCriteria,
  GalleryListEntity,
} from "../../libraries/gallery-types";
import { generateUrl } from "./helper";

export async function fetchGalleryList(
  criteria: GalleryListCriteria
): Promise<GalleryListEntity> {
  const url = generateUrl(criteria);
  log("generated url in fetchGalleryList", url)
  try {
    const response = await axios.get<any>(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.data) return response.data;
  } catch (err: any) {
    return Promise.reject(err.message);
  }
  return Promise.reject();
}
