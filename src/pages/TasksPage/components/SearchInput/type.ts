import type { Ref, FocusEvent } from 'react';

export interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  onSearch: (val: string) => void;
}

export interface SearchInputFieldProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  onSearch?: (query: string) => void;
  inputRef?: Ref<HTMLInputElement>;
  autoFocus?: boolean;
  onClear?: () => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
}
