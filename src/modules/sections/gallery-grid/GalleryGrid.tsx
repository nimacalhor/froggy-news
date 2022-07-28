import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { GalleryItem } from "@root/modules/gallery/libraries/gallery-types";
import ImageCard from "@root/modules/gallery/components/image-card/ImageCard";
import ImageModal from "@root/modules/gallery/components/image-modal/ImageModal";

const GalleryGrid = ({ galleryList }: { galleryList?: GalleryItem[] }) => {
  const [modalState, setModalState] = useState(false);
  const [currentItem, setCurrentItem] = useState<GalleryItem | undefined>();

  const onClick = (image: GalleryItem) => {
    setCurrentItem(image);
    setModalState(true);
  };
  const onClose = () => {
    setCurrentItem(undefined);
    setModalState(false);
  };
  return (
    <>
      {galleryList && (
        <Grid container spacing={2}>
          {galleryList.map((image) => (
            <Grid item sm={6} md={4} lg={3} key={image.id}>
              <ImageCard onClick={onClick} {...{ image }} />
            </Grid>
          ))}
        </Grid>
      )}
      {currentItem && (
        <ImageModal image={currentItem} onClose={onClose} open={modalState} />
      )}
    </>
  );
};

export default GalleryGrid;
