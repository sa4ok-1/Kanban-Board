import { Paper } from "@mui/material";
import TaskCard from "./TaskCard";
import type { TaskFormValues } from "..//types/type";

interface Props {
  tasks: TaskFormValues[];
  viewMode: "list" | "grid";
}

export default function TaskList({ tasks, viewMode }: Props) {
  return (
    <Paper
      sx={{
        overflowY: "auto",
        boxShadow: "none",
        flex: 1,
        display: viewMode === "list" ? "flex" : "grid",
        flexDirection: viewMode === "list" ? "column" : undefined,
        gap: 2,
        gridTemplateColumns:
          viewMode === "grid"
            ? "repeat(auto-fill, minmax(250px, 1fr))"
            : undefined,
        gridAutoRows: viewMode === "grid" ? "minmax(150px, auto)" : undefined,
      }}
    >
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} viewMode={viewMode} />
      ))}
    </Paper>
  );
}
