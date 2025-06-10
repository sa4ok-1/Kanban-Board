import { OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import type { FC } from 'react';
import type { SearchInputFieldProps } from './type';

const SearchInputField: FC<SearchInputFieldProps> = ({
  searchQuery,
  setSearchQuery,
  onSearch,
  inputRef,
  isMobile,
  autoFocus = false,
  onClear,
  onBlur,
  placeholder,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      onBlur={!isMobile ? onBlur : undefined}
      size='small'
      startAdornment={
        <InputAdornment position='start'>
          <SearchIcon />
        </InputAdornment>
      }
      endAdornment={
        searchQuery && (
          <InputAdornment position='end'>
            <IconButton onClick={handleClear} edge='end' size='small'>
              <HighlightOffIcon fontSize='small' />
            </IconButton>
          </InputAdornment>
        )
      }
      sx={{ width: isMobile ? '100%' : 210 }}
    />
  );
};

export default SearchInputField;
