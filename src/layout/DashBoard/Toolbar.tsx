import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { ThemeSwitcher } from "infrastructure/theme/ThemeSwitcher";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import type { MouseEvent } from "react";
import i18n from "../../config/i18n";

export default function ToolbarActionsSearch() {
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
    localStorage.setItem("language", language);
    handleLanguageClose();
  };

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
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
