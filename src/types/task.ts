export enum TaskStatus {
  TODO = 'To Do',
  IN_PROGRESS = 'In Progress',
  DONE = 'Done',
}
export enum TaskPriority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  CRITICAL = 'Critical',
}

export enum TaskPrivacy {
  PUBLIC = 'public',
  PRIVATE = 'private',
  CUSTOM = 'custom',
}

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export enum TaskSortOption {
  ByName = 'byName',
  CompletedFirst = 'completedFirst',
  PendingFirst = 'pendingFirst',
}
