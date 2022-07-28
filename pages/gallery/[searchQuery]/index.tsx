import React from "react";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import { log } from "@root/modules/general/libraries/utils";
import { AVAILABLE_COLORS } from "@root/modules/general/libraries/constants";
import { fetchGalleryList } from "@root/modules/gallery/store/api/gallery-api";
import {
  AvailableColorsString,
  GalleryItem,
} from "@root/modules/gallery/libraries/gallery-types";

const GalleryGrid = dynamic(() => import("@modules/sections/gallery-grid")),
  Box = dynamic(() => import("@mui/material/Box")),
  Typography = dynamic(() => import("@mui/material/Typography"));

const CustomGalleryPage = ({
  query,
  color,
  list,
}: {
  query: string;
  color: string;
  list: GalleryItem[];
}) => {
  const style = { display: "flex", alignItems: "center", mx: 2, gap: 1 };
  return (
    <div className="page">
      <Box sx={{ mb: 4, display: "flex" }}>
        <Box sx={{ ...style }}>
          <Typography>search results for </Typography>
          <Typography variant="h5">{query}</Typography>
        </Box>
        <Box sx={{ ...style }}>
          <Typography>in color </Typography>
          <Typography variant="h5">{color}</Typography>
        </Box>
      </Box>
      {list.length > 0 ? (
        <GalleryGrid galleryList={list} />
      ) : (
        <Typography>no results</Typography>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { searchQuery } = context.query;
  let list: GalleryItem[] = [],
    query: string = "",
    searchedClr: string = "",
    color: AvailableColorsString = "any_color";

  if (Array.isArray(searchQuery))
    [query, searchedClr] = searchQuery[0].split("&");
  else if (searchQuery) [query, searchedClr] = searchQuery.split("&");

  if (searchedClr && AVAILABLE_COLORS.some((clr) => clr === searchedClr))
    color = searchedClr as AvailableColorsString;

  try {
    const response = await fetchGalleryList({
      query,
      color,
      per_page: 10,
      order_by: "popular",
    });
    list = response.results;
  } catch (err) {
    log("error in ssr [searchQuery]", err);
  }

  return {
    props: {
      query,
      color,
      list,
    },
    notFound: true,
  };
};

export default CustomGalleryPage;
