import { useState, type MouseEvent } from 'react';
import type { TaskSortOption, TaskStatus } from 'types/task';
import type { HeaderActionsProps  } from '../types';

export function useFilterBar(initialProps: HeaderActionsProps) {
  const [filterAnchorEl, setFilterAnchorEl] = useState<HTMLElement | null>(null);
  const [sortAnchorEl, setSortAnchorEl] = useState<HTMLElement | null>(null);

  const filterOpen = Boolean(filterAnchorEl);
  const sortOpen = Boolean(sortAnchorEl);

  const handleFilterClick = (event: MouseEvent<HTMLElement>) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => setFilterAnchorEl(null);

  const handleFilterSelect = (value: TaskStatus | 'All') => {
    initialProps.setStatusFilter(value);
    handleFilterClose();
  };

  const handleSortClick = (event: MouseEvent<HTMLElement>) => {
    setSortAnchorEl(event.currentTarget);
  };

  const handleSortClose = () => setSortAnchorEl(null);

  const handleSortSelect = (value: TaskSortOption) => {
    initialProps.setSortOption(value);
    handleSortClose();
  };

  return {
    ...initialProps,
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
  } as const;
}

