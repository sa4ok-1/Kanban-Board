import { useEffect, useRef, useState } from 'react';
import { Button, Box, Tooltip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

export default function SidebarFooter() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      setIsCollapsed(width <= 80);
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleLogout = () => {
    navigate('/login');

    console.log('Logged out successfully');
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        p: 1,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Tooltip title={isCollapsed ? 'Log out' : ''}>
        <Button
          variant='outlined'
          color='error'
          onClick={handleLogout}
          startIcon={!isCollapsed ? <LogoutIcon /> : undefined}
          sx={{
            justifyContent: 'center',
            px: 1.5,
            width: isCollapsed ? '48px' : '160px',

            transition: 'width 0.4s ease',
          }}
        >
          {isCollapsed ? <LogoutIcon /> : 'Log out'}
        </Button>
      </Tooltip>
    </Box>
  );
}
