import type { CreateTask } from "types/type";

export const initialValues: CreateTask = {
  id: "",
  title: "",
  description: "",
  status: "To Do",
  priority: "Low",
  author: "",
  executor: "",
  privacy: "public",
};