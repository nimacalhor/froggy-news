import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface NavLink {
  id: number;
  title: string;
  url: string;
}
export interface MenuItem extends NavLink {
  children?: MenuItem[];
}
export interface FooterLinks extends NavLink {}

export type FooterSegmentTitle = "fast access" | "contact us";

export interface MapPosition{
  coordinates:[number, number];
  zoom:number;
}

export type SetMapPositionCB = (pos:((pos:MapPosition) => MapPosition) | MapPosition) => void;

export type IconType = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
  muiName: string;
}
