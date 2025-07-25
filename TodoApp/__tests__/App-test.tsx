import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('renders correctly', () => {
    const {getByText} = render(<App />);
    expect(getByText('📝 Todo App')).toBeTruthy();
    expect(getByText('Stay organized, stay productive')).toBeTruthy();
  });

  it('shows empty state when no todos exist', () => {
    const {getByText} = render(<App />);
    expect(getByText('No tasks yet!')).toBeTruthy();
    expect(getByText('Add your first task above to get started')).toBeTruthy();
  });

  it('adds a new todo when input is submitted', () => {
    const {getByPlaceholderText, getByText} = render(<App />);
    
    const input = getByPlaceholderText('Add a new task...');
    fireEvent.changeText(input, 'Test todo');
    fireEvent(input, 'submitEditing');
    
    expect(getByText('Test todo')).toBeTruthy();
  });

  it('toggles todo completion when tapped', () => {
    const {getByPlaceholderText, getByText} = render(<App />);
    
    // Add a todo
    const input = getByPlaceholderText('Add a new task...');
    fireEvent.changeText(input, 'Test todo');
    fireEvent(input, 'submitEditing');
    
    // Tap the todo to complete it
    const todo = getByText('Test todo');
    fireEvent.press(todo);
    
    // Should now be in completed section
    expect(getByText('✅ Completed Tasks')).toBeTruthy();
  });
}); 