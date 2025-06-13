import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useTranslation } from 'react-i18next';
import { TaskStatus } from 'types/task';
import type { FilterMenuProps } from '../types';

export default function FilterMenu({
  open,
  anchorEl,
  onClick,
  onClose,
  onSelect,
  selected,
}: FilterMenuProps) {
  const { t } = useTranslation('task_board_page');

  return (
    <>
      <Tooltip title={t('filter')}>
        <IconButton
          onClick={onClick}
          color={open ? 'primary' : 'default'}
          size='small'
        >
          <FilterListIcon />
        </IconButton>
      </Tooltip>
      <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
        <MenuItem selected={selected === 'All'} onClick={() => onSelect('All')}>
          {t('all')}
        </MenuItem>
        {Object.values(TaskStatus).map((status) => (
          <MenuItem
            key={status}
            selected={selected === status}
            onClick={() => onSelect(status)}
          >
            {t(`status.${status}`)}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
