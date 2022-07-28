import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  const theme: any = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const clickHandler = function(){
    if(!searchQuery) return;
    router.push(`/gallery/${searchQuery.trim()}`)
  }
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton onClick={clickHandler} sx={{ color: theme.palette.secondary.main, mr: 1, my: 0.5 }}>
        <SearchIcon sx={{ fontSize: "2rem" }} />
      </IconButton>
      <TextField
        onChange={({ target: { value } }) => setSearchQuery(value)}
        value={searchQuery}
        label="search photo"
        variant="outlined"
        id="searchInput"
        size="small"
        color="secondary"
      />
    </Box>
  );
};

export default SearchInput;
