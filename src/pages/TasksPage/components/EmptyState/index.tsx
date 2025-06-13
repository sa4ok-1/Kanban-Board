import { Box, Typography } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';

export default function EmptyState({ text = "No tasks found." }: { text?: string }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      p={4}
      sx={{ opacity: 0.6 }}
    >
      <InboxIcon sx={{ fontSize: 80, mb: 2 }} />
      <Typography variant="h6">{text}</Typography>
    </Box>
  );
}
