import type { RefObject, FocusEvent } from 'react';

export interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  onSearch: (val: string) => void;
}

export interface SearchInputFieldProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  onSearch: (val: string) => void;
  inputRef?: RefObject<HTMLInputElement | null>;
  autoFocus?: boolean;
  onClear?: () => void;
  placeholder?: string;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}
