import { Paper, CircularProgress, Box } from "@mui/material";
import { useRef, useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import type { CreateTask } from "../../../types/type";

interface Props {
  tasks: CreateTask[];
  viewMode: "list" | "grid";
  onLoadMore?: () => void;
  hasMore?: boolean;
  loading?: boolean;
}

export default function TaskList({
  tasks,
  viewMode,
  onLoadMore,
  hasMore = true,
  loading = false,
}: Props) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const [initialLoad, setInitialLoad] = useState(true);
  useEffect(() => {
    if (initialLoad && tasks.length > 0) {
      setInitialLoad(false);
      return;
    }
  }, [tasks.length, initialLoad]);

  useEffect(() => {
    if (!onLoadMore || loading || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onLoadMore();
        }
      },
      { root: null, rootMargin: "20px", threshold: 0.1 }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [onLoadMore, loading, hasMore]);

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
        p: 2,
      }}
    >
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} viewMode={viewMode} />
      ))}

      {hasMore && (
        <Box
          ref={loaderRef}
          sx={{
            display: "flex",
            justifyContent: "center",
            py: 3,
            gridColumn: viewMode === "grid" ? "1 / -1" : undefined,
          }}
        >
          {loading && <CircularProgress />}
        </Box>
      )}
    </Paper>
  );
}
