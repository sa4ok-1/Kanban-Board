import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";

export default function AppTitle() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <CloudCircleIcon fontSize="large" color="primary" />
      <Typography variant="h6">My App</Typography>
    </Stack>
  );
}