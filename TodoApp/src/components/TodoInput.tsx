import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {TodoInputProps} from '../types';

const TodoInput: React.FC<TodoInputProps> = ({value, onChangeText, onSubmit}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        placeholderTextColor="#888"
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        returnKeyType="done"
      />
      <TouchableOpacity style={styles.addButton} onPress={onSubmit}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#2a2a2a',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#ffffff',
    marginRight: 10,
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default TodoInput; 