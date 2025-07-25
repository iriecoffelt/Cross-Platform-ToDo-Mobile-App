import {Todo} from '../types';

export const createTodo = (text: string): Todo => ({
  id: Date.now().toString(),
  text: text.trim(),
  completed: false,
  createdAt: new Date(),
});

export const validateTodoText = (text: string): boolean => {
  return text.trim().length > 0;
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const sortTodos = (todos: Todo[]): Todo[] => {
  return todos.sort((a, b) => {
    // Sort by completion status first (pending before completed)
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }
    // Then sort by creation date (newest first)
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}; 