import { ToggleButtonGroup, ToggleButton, Tooltip } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { useTranslation } from 'react-i18next';
import { headerActionsStyles } from '../styles';
import type { ViewModeToggleProps } from '../types';

export default function ViewModeToggle({
  viewMode,
  setViewMode,
  theme,
}: ViewModeToggleProps) {
  const { t } = useTranslation('task_board_page');

  return (
    <ToggleButtonGroup
      value={viewMode}
      exclusive
      onChange={(_, val) => val && setViewMode(val)}
      size='small'
      sx={headerActionsStyles.toggleButtonGroup(theme)}
    >
      <Tooltip title={t('list_tooltip')}>
        <ToggleButton value='list'>
          <ViewListIcon />
        </ToggleButton>
      </Tooltip>
      <Tooltip title={t('grid_tooltip')}>
        <ToggleButton value='grid'>
          <ViewModuleIcon />
        </ToggleButton>
      </Tooltip>
    </ToggleButtonGroup>
  );
}
