import type { ReactNode } from 'react';

export interface DesktopSearchProps {
  showSearch: boolean;
  toggleSearch: () => void;
  children: ReactNode;
  tooltipTitle: string;
}

export interface MobileSearchDialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface SeacrhInputProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  onSearch: (query: string) => void;
}
