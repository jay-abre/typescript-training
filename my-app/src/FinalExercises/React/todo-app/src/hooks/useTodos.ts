import { useState, useCallback, useMemo } from 'react';
import { Todo, TodoInput } from '../models/Todo';
import { TodoService } from '../services/TodoServices';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Memoize the todoService to ensure it remains stable
  const todoService = useMemo(() => new TodoService(), []);

  const addTodo = useCallback((input: TodoInput) => {
    const newTodo = todoService.addTodo(input);
    setTodos(prevTodos => [...prevTodos, newTodo]);
  }, [todoService]);

  const updateTodo = useCallback((id: string, updates: Partial<Todo>) => {
    const updatedTodo = todoService.updateTodo(id, updates);
    if (updatedTodo) {
      setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? updatedTodo : todo));
    }
  }, [todoService]);

  const deleteTodo = useCallback((id: string) => {
    if (todoService.deleteTodo(id)) {
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }
  }, [todoService]);

  return { todos, addTodo, updateTodo, deleteTodo };
}
