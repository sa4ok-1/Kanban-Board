import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import type { ToggleButtonProps } from './type';

export default function SidebarToggleButton({
  open,
  toggle,
}: ToggleButtonProps) {
  return (
    <IconButton onClick={toggle} sx={{ fontSize: '1.7rem' }}>
      {open ? (
        <MenuOpenIcon fontSize='inherit' />
      ) : (
        <MenuIcon fontSize='inherit' />
      )}
    </IconButton>
  );
}
