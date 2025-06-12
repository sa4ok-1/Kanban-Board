import type { SvgIconComponent } from '@mui/icons-material';

export interface NavItemProps {
  to: string;
  labelKey: string;
  icon: SvgIconComponent;
  open: boolean;
}
