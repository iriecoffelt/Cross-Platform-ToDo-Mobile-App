export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export interface TodoInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
}

export interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  title: string;
  emptyMessage?: string;
}

export interface TodoStatsProps {
  pendingCount: number;
  completedCount: number;
} 