import React, { useState } from "react";
import Box from "@mui/material/Box";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Search } from "@mui/icons-material";
import { AVAILABLE_COLORS } from "@modules/general/libraries/constants";
import { AvailableColorsString } from "@modules/gallery/libraries/gallery-types";
import {
  grey,
  yellow,
  orange,
  red,
  purple,
  common,
  indigo,
  green,
  teal,
  blue,
} from "@mui/material/colors";

const FormControlLabel = dynamic(
    () => import("@mui/material/FormControlLabel")
  ),
  InputAdornment = dynamic(() => import("@mui/material/InputAdornment")),
  TextField = dynamic(() => import("@mui/material/TextField")),
  RadioGroup = dynamic(() => import("@mui/material/RadioGroup")),
  Typography = dynamic(() => import("@mui/material/Typography")),
  Button = dynamic(() => import("@mui/material/Button")),
  Radio = dynamic(() => import("@mui/material/Radio"));

const colors: { [key in AvailableColorsString]: string } = {
  any_color: grey[800],
  black_and_white: grey[600],
  black: common.black,
  white: common.white,
  yellow: yellow[500],
  orange: orange[700],
  red: red[600],
  purple: indigo[600],
  magenta: purple[500],
  green: green[500],
  teal: teal[300],
  blue: blue[500],
};

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [color, setColor] = useState<AvailableColorsString>("any_color");
  const router = useRouter();
  const submitHandler = (e: SubmitEvent) => {
    e.preventDefault();
    if (!searchQuery) return;
    router.push(
      {
        pathname: "/gallery/[searchQuery]",
        query: {
          searchQuery: `${searchQuery.trim()}${
            color !== "any_color" ? `&${color}` : ""
          }`,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <Box
      onSubmit={(e: any) => submitHandler(e)}
      component="form"
      sx={{ height: "max(40vh, 300px)", width: "min(900px, 80vw)" }}
    >
      <Typography sx={{ mb: 3 }} variant="h3" gutterBottom>
        search image
      </Typography>
      <Box sx={{ display: "flex" }}>
        <TextField
          sx={{ flexGrow: 1, pr: 2 }}
          value={searchQuery}
          onChange={({ target }) => setSearchQuery(target.value)}
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ fontSize: "2rem" }} />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <Button endIcon={<Search />} variant="contained" type="submit">
          search
        </Button>
      </Box>
      <Box>
        <RadioGroup
          sx={{ mt: 3 }}
          row
          value={color}
          onChange={({ target: { value } }) =>
            setColor(value as AvailableColorsString)
          }
          defaultValue="any_color"
        >
          {AVAILABLE_COLORS.map((clr, i) => (
            <FormControlLabel
              key={i}
              value={clr}
              control={
                <Radio sx={{ color: colors[clr as AvailableColorsString] }} />
              }
              label={clr.replace(/_/g, " ")}
              labelPlacement="bottom"
            />
          ))}
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default SearchBox;
