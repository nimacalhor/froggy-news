import React, { useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { GalleryItem } from "../../libraries/gallery-types";
import { log } from "@root/modules/general/libraries/utils";

const UserCard = ({ image }: { image: GalleryItem }) => {
  const {
    user: { first_name, last_name, profile_image, username },
  } = image;
  const avatarSize = "min(100px, 80vw)";
  // useEffect(() => {
  //   axios
  //     .get<any>(profile_image.medium)
  //     .then(({ data }) => log("image data ", data));
  // }, [profile_image.medium]);

  return (
    <Box
      sx={{
        width: "100%",
        pl: 2,
        mx: "auto",
        display: "flex",
        // flexDirection: { xs: "column", sm: "row", md: "column" },,
        // justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ width: avatarSize, height: avatarSize }}>
        <Image
          src={profile_image.medium}
          layout="fill"
          objectFit="cover"
          alt={`${first_name} ${last_name} image`}
        />
      </Avatar>
      <Box sx={{ ml: 2 }}>
        <Typography variant="h6">
          {first_name}{" "}{last_name}
        </Typography>
        <Typography sx={{fontWeight:"bold"}} variant="h5">
          {username}
        </Typography>
      </Box>
    </Box>
  );
};

export default UserCard;
