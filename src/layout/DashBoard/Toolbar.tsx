import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { ThemeSwitcher } from "infrastructure/theme/ThemeSwitcher";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState, useRef, useEffect } from "react";
import type { MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import Box from "@mui/material/Box";

export default function ToolbarActionsSearch() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { i18n } = useTranslation();

  const selectedLanguage = i18n.language;

  const handleLanguageClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    handleLanguageClose();
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Tooltip title={t("Search")} enterDelay={1000}>
          <IconButton
            onClick={toggleSearch}
            aria-label="search"
            sx={{ display: { xs: "inline-flex", md: "none" } }}
          >
            <SearchIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <div>
        <IconButton
          color="inherit"
          aria-label="change language"
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
            selected={selectedLanguage === "en"}
            onClick={() => handleLanguageSelect("en")}
          >
            English
          </MenuItem>
          <MenuItem
            selected={selectedLanguage === "uk"}
            onClick={() => handleLanguageSelect("uk")}
          >
            Українська
          </MenuItem>
        </Menu>
      </div>

      <IconButton color="inherit" aria-label="notifications">
        <Badge badgeContent={1} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <IconButton edge="end" aria-label="user profile">
        <Avatar sx={{ width: 32, height: 32 }}>U</Avatar>
      </IconButton>

      <ThemeSwitcher />
    </Stack>
  );
}
