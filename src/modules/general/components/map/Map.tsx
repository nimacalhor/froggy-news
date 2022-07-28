import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import * as eventHandlers from "./libraries/helper";
import { MapPosition } from "@modules/general/libraries/generalTypes";
import {
  GEO_URL,
  FOOTER_MAP_COORDINATES,
  FOOTER_HEIGHT,
} from "../../libraries/constants";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";

const Map = () => {
  const {
    palette: { secondary },
  } = useTheme();
  const [position, setPosition] = useState<MapPosition>({
    coordinates: [0, 0],
    zoom: 0.9,
  });

  return (
    // <Box sx={{ height:"200px", overflow:"hidden" }}>
    <Box>
      <ComposableMap height={FOOTER_HEIGHT + 70}>
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={(position) =>
            eventHandlers.handleMoveEnd(setPosition, position)
          }
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
          {FOOTER_MAP_COORDINATES.map((cor: [number, number], i) => (
            <Marker key={i} coordinates={cor.reverse() as [number, number]}>
              <circle r={10} fill={secondary.main} />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </Box>
  );
};

export default Map;
