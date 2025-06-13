import { PaletteColor } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    custom?: PaletteColor;
    status: {
      todo: string;
      inProgress: string;
      done: string;
    };
  }

  interface PaletteOptions {
    custom?: PaletteColor;
    status?: {
      todo?: string;
      inProgress?: string;
      done?: string;
    };
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    custom: true;
  }
}

declare module '@mui/material/ToggleButton' {
  interface ToggleButtonPropsVariantOverrides {
    contained: true;
  }
}
