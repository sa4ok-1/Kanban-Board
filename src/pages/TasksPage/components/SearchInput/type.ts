import type { ReactNode, RefObject } from 'react';

export interface DesktopSearchProps {
  showSearch: boolean;
  toggleSearch: () => void;
  children: ReactNode;
  tooltipTitle: string;
}

export interface MobileSearchDialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export interface SeacrhInputProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  onSearch: (query: string) => void;
}

export interface SearchInputFieldProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  onSearch: (query: string) => void;
  inputRef: RefObject<HTMLInputElement | null>;
  isMobile: boolean;
  autoFocus?: boolean;
  onClear?: () => void;
  onBlur?: () => void;
  placeholder: string;
}
