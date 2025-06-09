import { useState } from 'react';
import type { MouseEvent } from 'react';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import i18n from '../../../../config/i18n';

export const LanguageSwitcher = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const selectedLanguage = i18n.language;

  const handleLanguageClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
    handleLanguageClose();
  };

  return (
    <div>
      <IconButton
        color='inherit'
        aria-label='change language'
        onClick={handleLanguageClick}
      >
        <LanguageIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleLanguageClose}
      >
        <MenuItem
          selected={selectedLanguage === 'en'}
          onClick={() => handleLanguageSelect('en')}
        >
          English
        </MenuItem>
        <MenuItem
          selected={selectedLanguage === 'uk'}
          onClick={() => handleLanguageSelect('uk')}
        >
          Українська
        </MenuItem>
      </Menu>
    </div>
  );
};
export default LanguageSwitcher;
