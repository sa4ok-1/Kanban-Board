export enum TaskStatus {
  TODO = "To Do",
  IN_PROGRESS = "In Progress",
  DONE = "Done",
}

export enum TaskPriority {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
  CRITICAL = "Critical"
}

export enum TaskPrivacy {
  PUBLIC = "public",
  PRIVATE = "private",
  CUSTOM = "custom",
}

export interface CreateTask {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  author: string;
  executor: string;
  privacy: TaskPrivacy;
}

export const initialValues: CreateTask = {
  id: "",
  title: "",
  description: "",
  status: TaskStatus.TODO,  // Fixed: Using enum value instead of enum itself
  priority: TaskPriority.MEDIUM,  // Fixed: Using enum value instead of enum itself
  author: "",
  executor: "",
  privacy: TaskPrivacy.PUBLIC,  // Fixed: Using enum value instead of string literal
};

export type SortOption = "title" | "completed_asc" | "completed_desc";
