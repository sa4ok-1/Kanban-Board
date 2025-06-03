import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import type { CreateTask } from "../../../types/type";
import TaskDialog from "../modals/TaskInfoDialog";

interface Props {
  task: CreateTask;
  viewMode: "list" | "grid";
}

export default function TaskCard({ task, viewMode }: Props) {
  const [open, setOpen] = useState(false);

  const statusColor =
    task.status === "In Progress"
      ? "#FFC107"
      : task.status === "Done"
        ? "#4CAF50"
        : "#2196F3";

  return (
    <>
      <Card
        sx={{
          textAlign: "center",
          width: "100%",
          height: viewMode === "list" ? "auto" : "100%",
          minHeight: "150px",
          border: "1px solid black",
          borderLeft: `4px solid ${statusColor}`,
          cursor: "pointer",
        }}
        onClick={() => setOpen(true)}
      >
        <CardContent>
          <Typography variant="h6" fontWeight="bold">
            {task.title}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "18px", color: "text.secondary" }}>
            Description: {task.description}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "18px", color: "text.secondary" }}>
            Status: {task.status}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "18px", color: "text.secondary" }}>
            Priority: {task.priority}
          </Typography>
        </CardContent>
      </Card>

      <TaskDialog open={open} onClose={() => setOpen(false)} task={task} />
    </>
  );
}
