import { Box, Paper, Typography } from "@mui/material";
import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function AuthFormLayout({ title, children }: Props) {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Paper elevation={3} sx={{ padding: 4, width: 400 }}>
        <Typography variant="h5" mb={3} textAlign="center">
          {title}
        </Typography>
        {children}
      </Paper>
    </Box>
  );
}
