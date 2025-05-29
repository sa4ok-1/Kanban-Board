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
  Card,
  CardContent,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import type { TaskStatus, TaskFormValues } from "../types/types";
import AddTaskModal from "./AddTaskModal";

export default function TasksPage() {
  const [taskStatus, setTaskStatus] = React.useState<TaskStatus>("In Progress");
  const [user, setUser] = React.useState("all");
  const [time, setTime] = React.useState("this_month");
  const [openModal, setOpenModal] = React.useState(false);
  const [tasks, setTasks] = React.useState<TaskFormValues[]>([]);
  const [viewMode, setViewMode] = React.useState<"list" | "grid">("list");

  const handleSubmit = (data: TaskFormValues) => {
    console.log("Created Task:", data);
    setTasks([...tasks, data]);
  };

  const handleViewModeChange = (_: any, newViewMode: "list" | "grid") => {
    if (newViewMode !== null) {
      setViewMode(newViewMode);
    }
  };

  return (
    <Box padding={5} width="100%">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5" fontSize={30} color="primary.main">
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

        <ToggleButtonGroup
          value={viewMode}
          exclusive
          onChange={handleViewModeChange}
          size="small"
        >
          <ToggleButton value="list" aria-label="list view">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="grid" aria-label="grid view">
            <ViewModuleIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      {viewMode === "list" ? (
        <Paper
          sx={{
            width: "100%",
            overflow: "hidden",
            boxShadow: 3,
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 1,
            height: "calc(100vh - 300px)",
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
              {tasks.length > 0 ? (
                tasks.map((task, index) => (
                  <TableRow key={index}>
                    <TableCell>{task.description}</TableCell>
                    <TableCell>{task.type}</TableCell>
                    <TableCell>{task.status}</TableCell>
                    <TableCell>{task.priority}</TableCell>
                    <TableCell>{task.date}</TableCell>
                    <TableCell>{task.owner}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No tasks available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
      ) : (
        <Grid container spacing={2}>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">{task.description}</Typography>
                    <Typography color="text.secondary">
                      Type: {task.type}
                    </Typography>
                    <Typography color="text.secondary">
                      Status: {task.status}
                    </Typography>
                    <Typography color="text.secondary">
                      Priority: {task.priority}
                    </Typography>
                    <Typography color="text.secondary">
                      Date: {task.date}
                    </Typography>
                    <Typography color="text.secondary">
                      Owner: {task.owner}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography align="center">No tasks available</Typography>
            </Grid>
          )}
        </Grid>
      )}
    </Box>
  );
}
