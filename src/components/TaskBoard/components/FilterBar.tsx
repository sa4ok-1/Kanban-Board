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
import { TaskStatus } from "types/type";
import SearchInput from "./SearchInput";
import type { SortOption } from "types/type";

interface Props {
  statusFilter: string;
  setStatusFilter: (value: string) => void;
  viewMode: "list" | "grid";
  setViewMode: (value: "list" | "grid") => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  onSearch: (query: string) => void;
  sortOption: SortOption;
  setSortOption: (value: SortOption) => void;
}

export default function FilterBar({
  statusFilter,
  setStatusFilter,
  viewMode,
  setViewMode,
  searchQuery,
  setSearchQuery,
  onSearch,
  sortOption,
  setSortOption,
}: Props) {
  const { t } = useTranslation();

  const handleSortChange = (value: SortOption) => {
    setSortOption(value);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
      <Typography variant="h6">{t("Filter")}:</Typography>

      <Select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        size="small"
        sx={{ minWidth: 120 }}
      >
        <MenuItem value="All">{t("All")}</MenuItem>
        {Object.values(TaskStatus).map((status) => (
          <MenuItem key={status} value={status}>
            {t(status)}
          </MenuItem>
        ))}
      </Select>

      <Select
        value={sortOption}
        onChange={(e) => handleSortChange(e.target.value as SortOption)}
        size="small"
        sx={{ minWidth: 200 }}
      >
        <MenuItem value="title">{t("By name (A-Z)")}</MenuItem>
        <MenuItem value="completed_asc">{t("Completed first")}</MenuItem>
        <MenuItem value="completed_desc">{t("Pending first")}</MenuItem>
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

      <SearchInput
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={onSearch}
      />
    </Stack>
  );
}
