import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import {TodoItemProps} from '../types';

const TodoItem: React.FC<TodoItemProps> = ({todo, onToggle, onDelete}) => {
  const handleDelete = () => {
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => onDelete(todo.id),
        },
      ],
    );
  };

  return (
    <TouchableOpacity
      style={styles.todoItem}
      onPress={() => onToggle(todo.id)}
      onLongPress={handleDelete}>
      <View style={styles.todoContent}>
        <View
          style={[
            styles.checkbox,
            todo.completed ? styles.checked : styles.unchecked,
          ]}
        />
        <Text
          style={[
            styles.todoText,
            todo.completed && styles.completedText,
          ]}>
          {todo.text}
        </Text>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>🗑️</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  todoContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    marginRight: 15,
  },
  unchecked: {
    borderColor: '#007AFF',
    backgroundColor: 'transparent',
  },
  checked: {
    borderColor: '#007AFF',
    backgroundColor: '#007AFF',
  },
  todoText: {
    fontSize: 16,
    color: '#ffffff',
    flex: 1,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteButton: {
    padding: 5,
  },
  deleteButtonText: {
    fontSize: 18,
  },
});

export default TodoItem; 