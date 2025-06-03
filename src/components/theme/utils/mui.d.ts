import { PaletteColor } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    custom?: PaletteColor;
  }

  interface PaletteOptions {
    custom?: PaletteColor;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    custom: true;
  }
}