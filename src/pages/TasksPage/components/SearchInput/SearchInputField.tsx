import { OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import type { ChangeEvent } from 'react';
import type { SearchInputFieldProps } from './type';

const SearchInputField = ({
  searchQuery,
  setSearchQuery,
  onSearch,
  inputRef,
  autoFocus = false,
  onClear,
  onBlur,
  placeholder,
}: SearchInputFieldProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSearch('');
    onClear?.();
  };

  return (
    <OutlinedInput
      fullWidth
      inputRef={inputRef}
      autoFocus={autoFocus}
      placeholder={placeholder}
      value={searchQuery}
      onChange={handleChange}
      onBlur={onBlur}
      size='small'
      startAdornment={
        <InputAdornment position='start'>
          <SearchIcon />
        </InputAdornment>
      }
      endAdornment={
        searchQuery ? (
          <InputAdornment position='end'>
            <IconButton onClick={handleClear} edge='end' size='small'>
              <HighlightOffIcon fontSize='small' />
            </IconButton>
          </InputAdornment>
        ) : null
      }
    />
  );
};

export default SearchInputField;
