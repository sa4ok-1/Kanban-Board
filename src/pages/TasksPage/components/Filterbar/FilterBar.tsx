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
import SearchInput from '../SearchInput/SearchInput';
import { TaskSortOption } from 'types/task';

interface Props {
  statusFilter: string;
  setStatusFilter: (value: string) => void;
  viewMode: 'list' | 'grid';
  setViewMode: (value: 'list' | 'grid') => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  onSearch: (query: string) => void;
  sortOption: TaskSortOption;
  setSortOption: (value: TaskSortOption) => void;
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
      sx={{
        py: { xs: 2, sm: 2 },
        px: { xs: 3, sm: 4 },
        mt: { xs: 2, sm: 3 },
        backdropFilter: 'blur(10px)',
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: 3,
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.15)',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <Typography
        variant='h6'
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          fontWeight: 700,
          fontSize: { xs: '1rem', sm: '1.25rem' },
          letterSpacing: '-0.01em',
          background: 'linear-gradient(90deg, #8b5cf6, #14b8a6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        <FilterListIcon fontSize='small' sx={{ color: '#8b5cf6' }} />
        {t('filter')}:
      </Typography>

      <Select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        size='small'
        sx={{
          minWidth: { xs: '100%', sm: 120 },
          bgcolor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: 2,
          color: '#d1d5db',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.3)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#8b5cf6',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#7c3aed',
            borderWidth: 2,
          },
          '& .MuiSelect-icon': {
            color: '#d1d5db',
          },
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            bgcolor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
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
        sx={{
          minWidth: { xs: '100%', sm: 200 },
          bgcolor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: 2,
          color: '#d1d5db',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.3)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#8b5cf6',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#7c3aed',
            borderWidth: 2,
          },
          '& .MuiSelect-icon': {
            color: '#d1d5db',
          },
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            bgcolor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
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
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: 2,
          '& .MuiToggleButton-root': {
            borderColor: 'rgba(255, 255, 255, 0.3)',
            color: '#8b5cf6',
            transition: 'all 0.2s ease',
            '&:hover': {
              bgcolor: 'rgba(139, 92, 246, 0.2)',
              transform: 'scale(1.05)',
            },
            '&.Mui-selected': {
              bgcolor: '#8b5cf6',
              color: 'white',
              '&:hover': {
                bgcolor: '#7c3aed',
                transform: 'scale(1.05)',
              },
            },
          },
        }}
      >
        <ToggleButton value='list'>
          <ViewListIcon />
        </ToggleButton>
        <ToggleButton value='grid'>
          <ViewModuleIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      <Box
        sx={{
          minWidth: { xs: '100%', sm: 250 },
          '& .MuiInputBase-root': {
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 2,
            color: '#d1d5db',
            borderColor: 'rgba(255, 255, 255, 0.3)',
            transition: 'all 0.2s ease',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              transform: 'scale(1.02)',
            },
            '&.Mui-focused': {
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              borderColor: '#7c3aed',
            },
            '& .MuiInputBase-input': {
              color: '#d1d5db',
            },
          },
        }}
      >
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={onSearch}
        />
      </Box>
    </Stack>
  );
}
