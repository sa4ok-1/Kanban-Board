import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import { useTranslation } from 'react-i18next';
import { TaskSortOption } from 'types/task';
import type { SortMenuProps } from '../types';

export default function SortMenu({
  open,
  anchorEl,
  onClick,
  onClose,
  onSelect,
  selected,
}: SortMenuProps) {
  const { t } = useTranslation('task_board_page');

  return (
    <>
      <Tooltip title={t('sort')}>
        <IconButton
          onClick={onClick}
          color={open ? 'primary' : 'default'}
          size='small'
        >
          <SortIcon />
        </IconButton>
      </Tooltip>
      <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
        {Object.values(TaskSortOption).map((option) => (
          <MenuItem
            key={option}
            selected={selected === option}
            onClick={() => onSelect(option)}
          >
            {t(`sortOptions.${option}`)}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
