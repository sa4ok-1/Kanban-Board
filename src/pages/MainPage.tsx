import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import TasksIcon from "@mui/icons-material/Assignment";
import KanbanIcon from "@mui/icons-material/ViewKanban";
import ProfileIcon from "@mui/icons-material/Person";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { Outlet } from "react-router-dom";

import theme from "styles/theme";
import ThemeSwitcher from "styles/ThemeSwitcher";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "Tasks",
    title: "Tasks",
    icon: <TasksIcon />,
  },
  {
    segment: "Dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "Kanban",
    title: "Kanban",
    icon: <KanbanIcon />,
  },
  {
    segment: "Profile",
    title: "Profile",
    icon: <ProfileIcon />,
  },
];

function PageContent() {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    ></Box>
  );
}

function ToolbarActionsSearch() {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      {/* Search field */}
      <Tooltip title="Search" enterDelay={1000}>
        <div>
          <IconButton
            type="button"
            aria-label="search"
            sx={{
              display: { xs: "inline", md: "none" },
            }}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </Tooltip>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        slotProps={{
          input: {
            endAdornment: (
              <IconButton type="button" aria-label="search" size="small">
                <SearchIcon />
              </IconButton>
            ),
            sx: { pr: 0.5 },
          },
        }}
        sx={{ display: { xs: "none", md: "inline-block" }, mr: 1 }}
      />

      {/* Language selector */}
      <IconButton color="inherit" aria-label="change language">
        <LanguageIcon />
      </IconButton>

      {/* Notifications */}
      <IconButton color="inherit" aria-label="notifications">
        <Badge badgeContent={1} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      {/* User profile */}
      <IconButton edge="end" aria-label="user profile">
        <Avatar sx={{ width: 32, height: 32 }}>U</Avatar>
      </IconButton>

      {/* Theme switcher */}
      <ThemeSwitcher />
    </Stack>
  );
}

function SidebarFooter() {
  return (
    <Typography
      variant="caption"
      sx={{ m: 1, whiteSpace: "nowrap", overflow: "hidden" }}
    ></Typography>
  );
}

function AppTitle() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <CloudCircleIcon fontSize="large" color="primary" />
      <Typography variant="h6">My App</Typography>
    </Stack>
  );
}

export default function DashboardLayoutSlots() {
  return (
    <AppProvider navigation={NAVIGATION} theme={theme}>
      <DashboardLayout
        slots={{
          appTitle: AppTitle,
          toolbarActions: ToolbarActionsSearch,
          sidebarFooter: SidebarFooter,
        }}
      >
        <PageContent />
        <Outlet />
      </DashboardLayout>
    </AppProvider>
  );
}
