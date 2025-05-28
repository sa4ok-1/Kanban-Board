 export type TaskStatus = "To Do" | "In Progress" | "Done";

export interface TaskFormValues {
  description: string;
  type: string;
  status: "To Do" | "In Progress" | "Done";
  priority: "Low" | "Medium" | "High";
  date: string; 
  owner: string;
}
