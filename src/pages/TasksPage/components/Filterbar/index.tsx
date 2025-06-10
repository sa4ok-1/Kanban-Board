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
import {
  filterBarStyles,
  titleStyles,
  selectStyles,
  sortSelectStyles,
  toggleButtonGroupStyles,
  searchBoxStyles,
} from './styles';

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

  const handleSortChange = (e: SelectChangeEvent<TaskSortOption>) => {
    setSortOption(e.target.value as TaskSortOption);
  };

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 2, sm: 2 }}
      alignItems={{ xs: 'flex-start', sm: 'center' }}
      flexWrap='wrap'
      sx={filterBarStyles}
    >
      <Typography variant='h6' sx={titleStyles}>
        <FilterListIcon fontSize='small' sx={{ color: '#8b5cf6' }} />
        {t('filter')}:
      </Typography>

      <Select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        size='small'
        sx={selectStyles}
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
        sx={sortSelectStyles}
      >
        {Object.values(TaskSortOption).map((option) => (
          <MenuItem key={option} value={option}>
            {t(`sortOptions.${option}`)}
          </MenuItem>
        ))}
      </Select>

      <ToggleButtonGroup
        value={viewMode}
        exclusive
        onChange={(_, val) => val && setViewMode(val)}
        size='small'
        sx={toggleButtonGroupStyles}
      >
        <ToggleButton value='list'>
          <ViewListIcon />
        </ToggleButton>
        <ToggleButton value='grid'>
          <ViewModuleIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      <Box sx={searchBoxStyles}>
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={onSearch}
        />
      </Box>
    </Stack>
  );
}
