import { TaskStatus } from "../../../types/type";

export const STATUS_CONFIG = {
  [TaskStatus.TODO]: {
    colorKey: "todo",
    label: "To Do",
  },
  [TaskStatus.IN_PROGRESS]: {
    colorKey: "inProgress",
    label: "In Progress",
  },
  [TaskStatus.DONE]: {
    colorKey: "done",
    label: "Done",
  },
} as const;
