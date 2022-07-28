import React, { useState } from "react";
import dynamic from "next/dynamic";
import { GetStaticProps } from "next";
import { log, shuffle } from "@root/modules/general/libraries/utils";
import { GalleryItem } from "@root/modules/gallery/libraries/gallery-types";
import { fetchGalleryList } from "@root/modules/gallery/store/api/gallery-api";
import {
  GALLEY_QUERIES,
  REVALIDATION_TIME,
} from "@root/modules/general/libraries/constants";

const GalleryGrid = dynamic(() => import("@modules/sections/gallery-grid")),
  SearchBox = dynamic(() => import("@modules/gallery/components/search-box"));

const GalleryPage = ({
  galleryList,
}: {
  galleryList: GalleryItem[] | undefined;
}) => {
  return (
    <div className="page">
      <SearchBox />
      <GalleryGrid {...{ galleryList }} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let orangeGalleryList: GalleryItem[] | null;
  let greenGalleryList: GalleryItem[] | null;
  let galleryList: GalleryItem[] = [];
  const query =
    GALLEY_QUERIES[Math.floor(Math.random() * GALLEY_QUERIES.length)];

  try {
    const [responseOrg, responseGrn] = await Promise.all([
      fetchGalleryList({ query, color: "orange", per_page: 10 }),
      fetchGalleryList({ query, color: "red", per_page: 10 }),
    ]);
    if (responseOrg.total > 0 && responseGrn.total > 0) {
      orangeGalleryList = responseOrg.results;
      greenGalleryList = responseGrn.results;
      galleryList = shuffle([...greenGalleryList, ...orangeGalleryList]);
    }
  } catch (err) {
    log("response error from gallery", err);
  }
  return {
    props: {
      galleryList: galleryList ? galleryList : null,
    },
    revalidate: REVALIDATION_TIME,
  };
};

export default GalleryPage;
