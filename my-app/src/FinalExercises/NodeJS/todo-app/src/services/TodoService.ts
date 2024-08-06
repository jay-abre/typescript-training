// src/services/TodoService.ts

import { Todo, TodoInput } from '../models/todo';
import { v4 as uuidv4 } from 'uuid';

export class TodoService {
  private todos: Todo[] = [];

  async addTodo(input: TodoInput): Promise<Todo> {
    const newTodo: Todo = {
      ...input,
      id: uuidv4(),
      completed: false
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  async getTodos(): Promise<Todo[]> {
    return this.todos;
  }

  async getTodoById(id: string): Promise<Todo | undefined> {
    return this.todos.find(todo => todo.id === id);
  }

  async updateTodo(id: string, updates: Partial<TodoInput>): Promise<Todo | undefined> {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      this.todos[index] = { ...this.todos[index], ...updates };
      return this.todos[index];
    }
    return undefined;
  }

  async deleteTodo(id: string): Promise<boolean> {
    const initialLength = this.todos.length;
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this.todos.length !== initialLength;
  }
}