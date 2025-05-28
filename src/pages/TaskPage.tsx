import React from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";
import type { TaskStatus, TaskFormValues } from "../types/types";
import AddTaskModal from "./AddTaskModal";

export default function TasksPage() {
  const [taskStatus, setTaskStatus] = React.useState<TaskStatus>("In Progress");
  const [user, setUser] = React.useState("all");
  const [time, setTime] = React.useState("this_month");
  const [openModal, setOpenModal] = React.useState(false);
  const [tasks, setTasks] = React.useState<TaskFormValues[]>([]);

  const handleSubmit = (data: TaskFormValues) => {
    console.log("Created Task:", data);
    setTasks([...tasks, data]);
  };

  return (
    <Box width="100%" maxWidth={1200}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5" fontSize={30} color="##6366F1">
          Task
        </Typography>
        <Box display="flex" gap={1}>
          <Button variant="outlined" startIcon={<DownloadIcon />}>
            Download report
          </Button>
          <Button
            variant="contained"
            onClick={() => setOpenModal(true)}
            startIcon={<AddIcon />}
          >
            Add Task
          </Button>
          <AddTaskModal
            open={openModal}
            onClose={() => setOpenModal(false)}
            onSubmit={handleSubmit}
          />
        </Box>
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems="center"
        flexWrap="wrap"
        mb={2}
      >
        <FormControl size="small" sx={{ minWidth: 140 }}>
          <InputLabel>Task</InputLabel>
          <Select
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value as TaskStatus)}
          >
            <MenuItem value="To Do">To Do</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 140 }}>
          <InputLabel>User</InputLabel>
          <Select value={user} onChange={(e) => setUser(e.target.value)}>
            <MenuItem value="all">All User</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 140 }}>
          <InputLabel>Time Filter</InputLabel>
          <Select value={time} onChange={(e) => setTime(e.target.value)}>
            <MenuItem value="this_month">This month</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          boxShadow: 3,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1,
          Height: "(100vh - 300px)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Owner</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task, index) => (
              <TableRow key={index}>
                <TableCell>{task.description}</TableCell>
                <TableCell>{task.type}</TableCell>
                <TableCell>{task.status}</TableCell>
                <TableCell>{task.priority}</TableCell>
                <TableCell>{task.date}</TableCell>
                <TableCell>{task.owner}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}
