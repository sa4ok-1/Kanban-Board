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

export enum TaskSortOption {
  ByName = 'byName',
  CompletedFirst = 'completedFirst',
  PendingFirst = 'pendingFirst',
}
