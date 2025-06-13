import { useState } from 'react';
import { TaskSortOption } from 'types/task';

export const useTaskFilters = () => {
  const [statusFilter, setStatusFilter] = useState('All');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState(TaskSortOption.CompletedFirst);

  return {
    statusFilter,
    setStatusFilter,
    viewMode,
    setViewMode,
    searchQuery,
    setSearchQuery,
    sortOption,
    setSortOption,
  };
};