import { Box, IconButton, Slide, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import type { FC, ReactNode } from 'react';

interface DesktopSearchProps {
  showSearch: boolean;
  toggleSearch: () => void;
  children: ReactNode;
  tooltipTitle: string;
}

const DesktopSearch: FC<DesktopSearchProps> = ({
  showSearch,
  toggleSearch,
  children,
  tooltipTitle,
}) => {
  return (
    <Box
      sx={{
        width: showSearch ? 240 : 40,
        transition: 'width 0.9s ease',
        overflow: 'hidden',
      }}
    >
      {showSearch ? (
        <Slide direction='right' in={showSearch} mountOnEnter unmountOnExit>
          <Box>{children}</Box>
        </Slide>
      ) : (
        <Tooltip title={tooltipTitle} enterDelay={1000}>
          <IconButton onClick={toggleSearch} aria-label='search'>
            <SearchIcon />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};

export default DesktopSearch;
