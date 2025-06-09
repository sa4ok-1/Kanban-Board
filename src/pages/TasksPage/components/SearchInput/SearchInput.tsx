import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  useMediaQuery,
  type Theme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DesktopSearch from './DesktopSearch';
import MobileSearchDialog from './MobileSearchDialog';
import type { SeacrhInputProps } from './type';

export default function SearchInput({
  searchQuery,
  setSearchQuery,
  onSearch,
}: SeacrhInputProps) {
  const { t } = useTranslation('task_board_page');
  const [showSearch, setShowSearch] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );

  const toggleSearch = () => {
    isMobile ? setMobileOpen(true) : setShowSearch((prev) => !prev);
  };

  useEffect(() => {
    if ((showSearch || mobileOpen) && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch, mobileOpen]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const clearSearch = () => {
    setSearchQuery('');
    onSearch('');
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const renderSearchInput = (withAutoFocus = false) => (
    <OutlinedInput
      fullWidth
      inputRef={searchInputRef}
      autoFocus={withAutoFocus}
      placeholder={t('search_tasks...')}
      value={searchQuery}
      onChange={handleSearchChange}
      onBlur={
        !isMobile ? () => searchQuery === '' && setShowSearch(false) : undefined
      }
      size='small'
      startAdornment={
        <InputAdornment position='start'>
          <SearchIcon />
        </InputAdornment>
      }
      endAdornment={
        searchQuery && (
          <InputAdornment position='end'>
            <IconButton onClick={clearSearch} edge='end' size='small'>
              <HighlightOffIcon fontSize='small' />
            </IconButton>
          </InputAdornment>
        )
      }
      sx={{ width: isMobile ? '100%' : 210 }}
    />
  );

  return (
    <>
      {isMobile ? (
        <>
          <IconButton onClick={toggleSearch} aria-label='search'>
            <SearchIcon />
          </IconButton>
          <MobileSearchDialog
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
          >
            {renderSearchInput(true)}
          </MobileSearchDialog>
        </>
      ) : (
        <DesktopSearch
          showSearch={showSearch}
          toggleSearch={toggleSearch}
          tooltipTitle={t('search')}
        >
          {renderSearchInput()}
        </DesktopSearch>
      )}
    </>
  );
}
