import { useState } from 'react';
import { TaskSortOption } from 'types/task';
import type { FilterProps } from './type';

export function useFilterBar(initialProps: FilterProps) {
  const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(
    null,
  );
  const [sortAnchorEl, setSortAnchorEl] = useState<null | HTMLElement>(null);

  const filterOpen = Boolean(filterAnchorEl);
  const sortOpen = Boolean(sortAnchorEl);

  const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleFilterSelect = (value: string) => {
    initialProps.setStatusFilter(value);
    handleFilterClose();
  };

  const handleSortClick = (event: React.MouseEvent<HTMLElement>) => {
    setSortAnchorEl(event.currentTarget);
  };

  const handleSortClose = () => {
    setSortAnchorEl(null);
  };

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
  };
}
