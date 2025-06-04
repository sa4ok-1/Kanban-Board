import {
  Stack,
  Typography,
  Select,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
  type SelectChangeEvent,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { useTranslation } from "react-i18next";
import { TaskStatus } from "types/type";
import SearchInput from "./SearchInput";
import { type SortOption } from "types/type";

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
  const { t } = useTranslation("task_board_page");

  const handleSortChange = (e: SelectChangeEvent<SortOption>) => {
    setSortOption(e.target.value as SortOption);
  };

  const SORT_OPTIONS: Record<SortOption, SortOption> = {
    byName: "byName",
    completedFirst: "completedFirst",
    pendingFirst: "pendingFirst",
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
      <Typography
        variant="h6"
        sx={{ display: "flex", alignItems: "center", gap: 1 }}
      >
        <FilterListIcon fontSize="small" />
        {t("filter")}:
      </Typography>

      <Select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        size="small"
        sx={{ minWidth: 120 }}
      >
        <MenuItem value="All">{t("all")}</MenuItem>
        {Object.values(TaskStatus).map((status) => (
          <MenuItem key={status} value={status}>
            {t(`status.${status}`)}
          </MenuItem>
        ))}
      </Select>

      <Select
        value={sortOption}
        onChange={handleSortChange}
        size="small"
        sx={{ minWidth: 200 }}
      >
        {Object.values(SORT_OPTIONS).map((option) => (
          <MenuItem key={option} value={option}>
            {t(`sortOptions.${option}`)}
          </MenuItem>
        ))}
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
