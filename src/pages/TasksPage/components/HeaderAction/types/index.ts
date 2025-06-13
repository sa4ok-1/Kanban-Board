import type { Theme } from '@mui/material/styles';
import type { TaskSortOption, TaskStatus } from 'types/task';
import type { MouseEvent } from 'react';

export interface FilterProps {
  statusFilter: TaskStatus | 'All';
  setStatusFilter: (value: TaskStatus | 'All') => void;
  sortOption: TaskSortOption;
  setSortOption: (value: TaskSortOption) => void;
}

export interface HeaderActionsProps extends FilterProps {
  onAddTask: () => void;
  statusFilter: TaskStatus | 'All';
  setStatusFilter: (value: TaskStatus | 'All') => void;
  viewMode: 'list' | 'grid';
  setViewMode: (mode: 'list' | 'grid') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortOption: TaskSortOption;
  setSortOption: (option: TaskSortOption) => void;
  onSearch: (query: string) => void;
}

export interface ActionsButtonsProps {
  onAddTask: () => void;
}

export interface ViewModeToggleProps {
  viewMode: 'list' | 'grid';
  setViewMode: (value: 'list' | 'grid') => void;
  theme: Theme;
}

export interface FilterMenuProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClick: (event: MouseEvent<HTMLElement>) => void;
  onClose: () => void;
  onSelect: (value: TaskStatus | 'All') => void;
  selected: TaskStatus | 'All';
}

export interface SortMenuProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClick: (event: MouseEvent<HTMLElement>) => void;
  onClose: () => void;
  onSelect: (value: TaskSortOption) => void;
  selected: TaskSortOption;
}
