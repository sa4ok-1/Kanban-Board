import { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  IconButton,
  Slide,
  Tooltip,
  useMediaQuery,
  type Theme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SearchInputField from './SearchInputField';
import type { SearchInputProps } from './type';

export default function SearchInput({
  searchQuery,
  setSearchQuery,
  onSearch,
}: SearchInputProps) {
  const { t } = useTranslation('task_board_page');
  const [showSearch, setShowSearch] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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

  const handleMobileClose = () => setMobileOpen(false);

  const handleDesktopBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const relatedTarget = e.relatedTarget as HTMLElement | null;

      if (
        relatedTarget &&
        e.currentTarget.parentElement?.contains(relatedTarget)
      ) {
        return;
      }

      if (searchQuery === '') {
        setShowSearch(false);
      }
    },
    [searchQuery],
  );

  // Додаємо debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(searchQuery);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery, onSearch]);

  return (
    <>
      {isMobile ? (
        <>
          <IconButton onClick={toggleSearch} aria-label='search'>
            <SearchIcon />
          </IconButton>
          <Dialog open={mobileOpen} onClose={handleMobileClose} fullWidth>
            <DialogContent>
              <SearchInputField
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                autoFocus
                onClear={handleMobileClose}
                placeholder={t('search_tasks...')}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleMobileClose}>{t('close')}</Button>
            </DialogActions>
          </Dialog>
        </>
      ) : (
        <Box
          sx={{
            width: showSearch ? 240 : 40,
            transition: 'width 0.4s ease',
            overflow: 'hidden',
          }}
        >
          {showSearch ? (
            <Slide direction='right' in={showSearch} mountOnEnter unmountOnExit>
              <Box>
                <SearchInputField
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  onClear={() => setShowSearch(false)}
                  onBlur={handleDesktopBlur}
                  placeholder={t('search_tasks...')}
                />
              </Box>
            </Slide>
          ) : (
            <Tooltip title={t('search')} enterDelay={1000}>
              <IconButton onClick={toggleSearch} aria-label='search'>
                <SearchIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      )}
    </>
  );
}
