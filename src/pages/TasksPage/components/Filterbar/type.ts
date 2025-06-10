import type { TaskSortOption } from 'types/task';

export interface FilterProps {
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
