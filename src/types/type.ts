export enum TaskStatus {
  ToDo = "To Do",
  InProgress = "In Progress",
  Done = "Done",
}

export interface CreateTask {
  id: string;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Done";
  priority: "Low" | "Medium" | "High";
  author: string;
  executor: string;
  privacy: "public" | "private" | "custom";
}

export type SortOption = "title" | "completed_asc" | "completed_desc";
