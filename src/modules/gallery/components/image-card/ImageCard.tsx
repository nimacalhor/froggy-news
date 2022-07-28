import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { GalleryItem } from "../../libraries/gallery-types";
import { trimText } from "@root/modules/general/libraries/utils";
import {
  CARD_IMAGE_H,
  CARD_IMAGE_W,
} from "@root/modules/general/libraries/constants";

const ImageCard = ({
  image,
  onClick,
}: {
  image: GalleryItem;
  onClick: (image: GalleryItem) => void;
}) => {
  return (
    <Box
      onClick={() => onClick(image)}
      sx={{
        cursor: "pointer",
        transition: "all 0.2s ease-out",
        ":hover img": { scale: 1.1 },
      }}
    >
      <Paper>
        <Image
          src={image.urls.thumb}
          alt={image.alt_description}
          height={image.height / 10}
          width={image.width / 10}
        />
        {image.description && (
          <Box sx={{ p: 2 }}>
            <Typography>{trimText(image.description, 70)}</Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default ImageCard;
