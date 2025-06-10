import type { ComponentType } from 'react';

export interface NavItemProps {
  to: string;
  labelKey: string;
  icon: ComponentType<any>;
  open: boolean;
}
