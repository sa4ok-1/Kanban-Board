import { Card, CardContent, Typography } from "@mui/material";
import type { TaskFormValues } from "..//types/type";

interface Props {
  task: TaskFormValues;
  viewMode: "list" | "grid";
}

export default function TaskCard({ task, viewMode }: Props) {
  const statusColor =
    task.status === "In Progress"
      ? "#FFC107"
      : task.status === "Done"
        ? "#4CAF50"
        : "#2196F3";

  return (
    <Card
      sx={{
        textAlign: "center",
        width: "100%",
        height: viewMode === "list" ? "auto" : "100%",
        minHeight: "150px",
        border: "1px solid black",
        borderLeft: `4px solid ${statusColor}`,
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {task.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "18px", color: "text.secondary" }}
        >
          Description: {task.description}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "18px", color: "text.secondary" }}
        >
          Status: {task.status}
        </Typography>
      </CardContent>
    </Card>
  );
}
