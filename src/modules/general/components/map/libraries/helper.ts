import {
  MapPosition,
  SetMapPositionCB,
} from "@modules/general/libraries/generalTypes";

//  ZoomableGroupProps.onMoveEnd

export function handleZoomIn(
  position: MapPosition,
  setPosition: SetMapPositionCB
) {
  if (position.zoom >= 4) return;
  setPosition((pos: MapPosition) => ({ ...pos, zoom: pos.zoom * 2 }));
}
export function handleZoomOut(
  position: MapPosition,
  setPosition: SetMapPositionCB
) {
  if (position.zoom <= 1) return;
  setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
}

export function handleMoveEnd(
  setPosition: SetMapPositionCB,
  position: MapPosition
) {
  setPosition(position);
}
