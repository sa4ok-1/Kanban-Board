export interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  onSearch: (val: string) => void;
}

export interface SearchInputFieldProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  onSearch?: (query: string) => void;
  inputRef?: React.Ref<HTMLInputElement>;
  autoFocus?: boolean;
  onClear?: () => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
}
