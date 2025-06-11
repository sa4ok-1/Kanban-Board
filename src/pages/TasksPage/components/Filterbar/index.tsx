import {
  Stack,
  IconButton,
  Menu,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Tooltip,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { useTranslation } from 'react-i18next';
import { TaskStatus } from 'types/task';
import SearchInput from '../SearchInput';
import { useTheme } from '@mui/material/styles';
import { filterBarStyles } from './styles';
import { useFilterBar } from './useFilterBar';
import type { FilterProps } from './type';
import { TaskSortOption } from 'types/task';

export default function FilterBar(props: FilterProps) {
  const { t } = useTranslation('task_board_page');
  const theme = useTheme();
  const {
    statusFilter,
    viewMode,
    setViewMode,
    searchQuery,
    setSearchQuery,
    onSearch,
    sortOption,
    filterAnchorEl,
    sortAnchorEl,
    filterOpen,
    sortOpen,
    handleFilterClick,
    handleFilterClose,
    handleFilterSelect,
    handleSortClick,
    handleSortClose,
    handleSortSelect,
  } = useFilterBar(props);

  return (
    <Stack sx={filterBarStyles.container}>
      <Stack
        sx={filterBarStyles.flexGrowStack}
        direction='row'
        alignItems='center'
        spacing={1}
      >
        <Tooltip title={t('filter')}>
          <IconButton
            onClick={handleFilterClick}
            color={filterOpen ? 'primary' : 'default'}
            size='small'
          >
            <FilterListIcon />
          </IconButton>
        </Tooltip>

        <Menu
          anchorEl={filterAnchorEl}
          open={filterOpen}
          onClose={handleFilterClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <MenuItem
            selected={statusFilter === 'All'}
            onClick={() => handleFilterSelect('All')}
          >
            {t('all')}
          </MenuItem>
          {Object.values(TaskStatus).map((status) => (
            <MenuItem
              key={status}
              selected={statusFilter === status}
              onClick={() => handleFilterSelect(status)}
            >
              {t(`status.${status}`)}
            </MenuItem>
          ))}
        </Menu>

        <Tooltip title={t('sort')}>
          <IconButton
            onClick={handleSortClick}
            color={sortOpen ? 'primary' : 'default'}
            size='small'
          >
            <SortIcon />
          </IconButton>
        </Tooltip>

        <Menu
          anchorEl={sortAnchorEl}
          open={sortOpen}
          onClose={handleSortClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          {Object.values(TaskSortOption).map((option) => (
            <MenuItem
              key={option}
              selected={sortOption === option}
              onClick={() => handleSortSelect(option)}
            >
              {t(`sortOptions.${option}`)}
            </MenuItem>
          ))}
        </Menu>
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
