// src/components/TodoList.tsx

import React from 'react';
import { TodoItem } from './TodoItem';
import { useTodoContext } from '../context/TodoContext';

export function TodoList() {
  const { todos } = useTodoContext();

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}