import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import ThemeSwitcher from "styles/ThemeSwitcher";

export default function ToolbarActionsSearch() {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Tooltip title="Search" enterDelay={1000}>
        <div>
          <IconButton
            type="button"
            aria-label="search"
            sx={{ display: { xs: "inline", md: "none" } }}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </Tooltip>

      <TextField
        label="Search"
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: (
            <IconButton type="button" aria-label="search" size="small">
              <SearchIcon />
            </IconButton>
          ),
        }}
        sx={{ display: { xs: "none", md: "inline-block" }, mr: 1 }}
      />

      <IconButton color="inherit" aria-label="change language">
        <LanguageIcon />
      </IconButton>

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
