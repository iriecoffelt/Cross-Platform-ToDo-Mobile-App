import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Animated,
} from 'react-native';
import {Todo} from './src/types';
import {TodoInput, TodoList, TodoStats} from './src/components';
import {createTodo, validateTodoText} from './src/utils';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const addTodo = () => {
    if (!validateTodoText(inputText)) {
      Alert.alert('Error', 'Please enter a task');
      return;
    }

    const newTodo = createTodo(inputText);
    setTodos([newTodo, ...todos]);
    setInputText('');
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      ),
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedTodos = todos.filter(todo => todo.completed);
  const pendingTodos = todos.filter(todo => !todo.completed);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Animated.View style={[styles.header, {opacity: fadeAnim}]}>
          <Text style={styles.title}>📝 Todo App</Text>
          <Text style={styles.subtitle}>Stay organized, stay productive</Text>
        </Animated.View>

        <TodoInput
          value={inputText}
          onChangeText={setInputText}
          onSubmit={addTodo}
        />

        <ScrollView style={styles.todoList} showsVerticalScrollIndicator={false}>
          {todos.length === 0 ? (
            <TodoList
              todos={[]}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              title=""
              emptyMessage="Add your first task above to get started"
            />
          ) : (
            <>
              <TodoList
                todos={pendingTodos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                title="📋 Pending Tasks"
              />
              <TodoList
                todos={completedTodos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                title="✅ Completed Tasks"
              />
            </>
          )}
        </ScrollView>

        <TodoStats
          pendingCount={pendingTodos.length}
          completedCount={completedTodos.length}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: '#2a2a2a',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  todoList: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default App;
