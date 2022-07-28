import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import UserCard from "../user-card/userCard";
import DownloadIcon from "@mui/icons-material/Download";
import { GalleryItem } from "../../libraries/gallery-types";
import { trimText } from "@root/modules/general/libraries/utils";

const ImageModal = ({
  image,
  open,
  onClose,
}: {
  image: GalleryItem;
  open: boolean;
  onClose: () => void;
}) => {
  const {
    alt_description,
    description,
    urls: { regular },
    links: { download },
    categories,
    height,
    width,
  } = image;
  return (
    <Dialog {...{ open, onClose, scroll: "body", fullWidth:true, maxWidth:"lg" }}>
      <Box
        sx={{ width: "80vw", mx: "auto", height: "fit-content", mt: 2, p: 3 }}
      >
        <Grid container spacing={2}>
          <Grid item md={7} lg={8}>
            <Box sx={{ width: "100%" }}>
              <Image
                alt={alt_description}
                src={regular}
                width={width}
                height={height}
              />
            </Box>
          </Grid>
          <Grid
            sx={{
              p: { md: 2, xs: 1 },
              display: "flex",
              flexDirection: "column",
            }}
            item
            md={5}
            lg={4}
          >
            <UserCard {...{ image }} />
            <Box sx={{ mt: 1, width:"100%", p:2 }}>
              <Typography gutterBottom variant="h6">{trimText(description, 300)}</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection:"row-reverse",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  {categories.map((category, i) => (
                    <Chip key={i} label={category} />
                  ))}
                </div>
                <Button
                  component="a"
                  href={download}
                  target="_blank"
                  download
                  endIcon={<DownloadIcon />}
                  size="large"
                  variant="contained"
                  sx={{mt:2}}
                >
                  Download Image
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};

export default ImageModal;
