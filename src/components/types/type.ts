export type TaskStatus = "To Do" | "In Progress" | "Done";

export interface TaskFormValues {
  id: string;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Done";
}
