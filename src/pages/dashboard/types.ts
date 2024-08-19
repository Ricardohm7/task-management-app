export type TaskType = 'default' | 'company-goal' | 'team-goal'

export interface Task {
  id: string;
  content: string;
  type: TaskType;
  title?: string;
  description?: string;
}

export type ColumnId = 'drafting' | 'pendingApproval' | 'approved' | 'created'

export type Tasks = {
  [key in ColumnId]: Task[];
}