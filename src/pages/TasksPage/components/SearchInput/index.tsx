import { IconButton, useMediaQuery, type Theme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DesktopSearch from './DesktopSearch';
import MobileSearchDialog from './MobileSearchDialog';
import SearchInputField from './SearchInputField';
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
    if (isMobile) {
      setMobileOpen(true);
    } else {
      setShowSearch((prev) => !prev);
    }
  };

  const handleClearMobile = () => {
    setMobileOpen(false);
  };

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
            <SearchInputField
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSearch={onSearch}
              inputRef={searchInputRef}
              isMobile={true}
              autoFocus
              onClear={handleClearMobile}
              placeholder={t('search_tasks...')}
            />
          </MobileSearchDialog>
        </>
      ) : (
        <DesktopSearch
          showSearch={showSearch}
          toggleSearch={toggleSearch}
          tooltipTitle={t('search')}
        >
          <SearchInputField
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearch={onSearch}
            inputRef={searchInputRef}
            isMobile={false}
            onBlur={() => searchQuery === '' && setShowSearch(false)}
            placeholder={t('search_tasks...')}
          />
        </DesktopSearch>
      )}
    </>
  );
}
