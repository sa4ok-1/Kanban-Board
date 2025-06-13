import { Stack, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchInput from '../SearchInput';
import type { HeaderActionsProps } from './types';
import { useFilterBar } from './hooks/useFilterBar';
import { headerActionsStyles } from './styles';
import {
  FilterMenu,
  ActionsButtons,
  SortMenu,
  ViewModeToggle,
} from './components';

export default function HeaderActions(props: HeaderActionsProps) {
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
    <Stack
      spacing={2}
      p={{ xs: 2, sm: 3 }}
      bgcolor='background.paper'
      borderRadius={2}
      boxShadow='0 4px 12px rgba(0, 0, 0, 0.1)'
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent='space-between'
        alignItems={{ xs: 'stretch', sm: 'center' }}
        spacing={2}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1}
          alignItems={{ xs: 'stretch', sm: 'center' }}
        >
          <Stack
            direction='row'
            spacing={1}
            justifyContent={{ xs: 'space-between', sm: 'flex-start' }}
          >
            <FilterMenu
              open={filterOpen}
              anchorEl={filterAnchorEl}
              onClick={handleFilterClick}
              onClose={handleFilterClose}
              onSelect={handleFilterSelect}
              selected={statusFilter}
            />
            <SortMenu
              open={sortOpen}
              anchorEl={sortAnchorEl}
              onClick={handleSortClick}
              onClose={handleSortClose}
              onSelect={handleSortSelect}
              selected={sortOption}
            />
          </Stack>

          <ViewModeToggle
            viewMode={viewMode}
            setViewMode={setViewMode}
            theme={theme}
          />

          <Box sx={headerActionsStyles.searchBox}>
            <SearchInput
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSearch={onSearch}
            />
          </Box>
        </Stack>

        <ActionsButtons onAddTask={props.onAddTask} />
      </Stack>
    </Stack>
  );
}
