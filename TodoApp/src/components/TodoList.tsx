import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TodoItem from './TodoItem';
import {TodoListProps} from '../types';

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggle,
  onDelete,
  title,
  emptyMessage,
}) => {
  if (todos.length === 0) {
    return (
      <View style={styles.emptyState}>
        <Text style={styles.emptyStateEmoji}>🎯</Text>
        <Text style={styles.emptyStateTitle}>No tasks yet!</Text>
        <Text style={styles.emptyStateText}>
          {emptyMessage || 'Add your first task above to get started'}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 15,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyStateEmoji: {
    fontSize: 64,
    marginBottom: 20,
  },
  emptyStateTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});

export default TodoList; 