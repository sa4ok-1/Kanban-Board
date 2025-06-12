import {
  Stack,
  Typography,
  Select,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  type SelectChangeEvent,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { useTranslation } from 'react-i18next';
import { TaskStatus } from 'types/task';
import SearchInput from '../SearchInput';
import { TaskSortOption } from 'types/task';
import type { FilterProps } from './type';
import { useTheme } from '@mui/material/styles';

import { filterBarStyles } from './styles';

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
}: FilterProps) {
  const { t } = useTranslation('task_board_page');
  const theme = useTheme();

  const handleSortChange = (e: SelectChangeEvent<TaskSortOption>) => {
    setSortOption(e.target.value as TaskSortOption);
  };

  return (
    <Stack sx={filterBarStyles.container}>
      <Stack
        sx={filterBarStyles.flexGrowStack}
        direction='row'
        alignItems='center'
        spacing={1}
      >
        <Typography
          variant='h6'
          fontWeight='bold'
          sx={filterBarStyles.headerStack(theme)}
        >
          <FilterListIcon fontSize='small' />
          {t('filter')}:
        </Typography>

        <Select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          size='small'
          sx={filterBarStyles.select}
        >
          <MenuItem value='All'>{t('all')}</MenuItem>
          {Object.values(TaskStatus).map((status) => (
            <MenuItem key={status} value={status}>
              {t(`status.${status}`)}
            </MenuItem>
          ))}
        </Select>

        <Select
          value={sortOption}
          onChange={handleSortChange}
          size='small'
          sx={filterBarStyles.sortSelect}
        >
          {Object.values(TaskSortOption).map((option) => (
            <MenuItem key={option} value={option}>
              {t(`sortOptions.${option}`)}
            </MenuItem>
          ))}
        </Select>
      </Stack>

      <Stack
        direction='row'
        spacing={1}
        alignItems='center'
        flexWrap='wrap'
        sx={{ mt: { xs: 2, sm: 0 } }}
      >
        <ToggleButtonGroup
          value={viewMode}
          exclusive
          onChange={(_, val) => val && setViewMode(val)}
          size='small'
          sx={filterBarStyles.toggleButtonGroup(theme)}
        >
          <ToggleButton value='list'>
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value='grid'>
            <ViewModuleIcon />
          </ToggleButton>
        </ToggleButtonGroup>

        <Box sx={filterBarStyles.searchBox}>
          <SearchInput
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearch={onSearch}
          />
        </Box>
      </Stack>
    </Stack>
  );
}
