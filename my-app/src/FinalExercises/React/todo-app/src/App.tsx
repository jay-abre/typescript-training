import React from 'react';
import { TodoProvider } from './context/TodoContext';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

export default function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}
