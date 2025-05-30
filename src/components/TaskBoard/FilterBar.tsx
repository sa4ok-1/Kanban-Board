import {
  Stack,
  Typography,
  Select,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { useTranslation } from "react-i18next";

interface Props {
  statusFilter: string;
  setStatusFilter: (value: string) => void;
  viewMode: "list" | "grid";
  setViewMode: (value: "list" | "grid") => void;
}

export default function FilterBar({
  statusFilter,
  setStatusFilter,
  viewMode,
  setViewMode,
}: Props) {
  const { t } = useTranslation();
  return (
    <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
      <Typography variant="h6">{t("Filter")}:</Typography>
      <Select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        size="small"
        sx={{ minWidth: 120 }}
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="To Do">To Do</MenuItem>
        <MenuItem value="In Progress">In Progress</MenuItem>
        <MenuItem value="Done">Done</MenuItem>
      </Select>

      <ToggleButtonGroup
        value={viewMode}
        exclusive
        onChange={(_, val) => val && setViewMode(val)}
        size="small"
      >
        <ToggleButton value="list">
          <ViewListIcon />
        </ToggleButton>
        <ToggleButton value="grid">
          <ViewModuleIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
