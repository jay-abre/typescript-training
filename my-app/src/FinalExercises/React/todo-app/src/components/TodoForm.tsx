import React, { useState } from 'react';
import { TodoInput } from '../models/Todo';
import { useTodoContext } from '../context/TodoContext';
import { validateTodoInput } from '../utils/ValidationUtils';

export function TodoForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');

  const { addTodo } = useTodoContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTodo: TodoInput = {
      title,
      description,
      dueDate: new Date(dueDate),
      priority
    };

    const validationError = validateTodoInput(newTodo);
    if (validationError) {
      alert(validationError);
      return;
    }

    addTodo(newTodo);
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('medium');
  };

  return (
    <form onSubmit={handleSubmit} 
      className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add New Task</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter task description"
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Add Task
      </button>
    </form>
  );
}
