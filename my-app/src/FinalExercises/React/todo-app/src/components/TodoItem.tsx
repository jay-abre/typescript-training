import React from 'react';
import { Todo } from '../models/Todo';
import { useTodoContext } from '../context/TodoContext';
import { DateUtils } from '../utils/DateUtils';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { updateTodo, deleteTodo } = useTodoContext();

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{todo.title}</h3>
      <p className="text-gray-600 mb-2">{todo.description}</p>
      <p className="text-gray-500 mb-2">Due: {DateUtils.formatDate(todo.dueDate)}</p>
      <p className="text-gray-500 mb-4">Priority: <span className={`font-semibold ${todo.priority === 'high' ? 'text-red-500' : todo.priority === 'medium' ? 'text-yellow-500' : 'text-green-500'}`}>{todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}</span></p>
      <div className="flex items-center justify-between">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => updateTodo(todo.id, { completed: !todo.completed })}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span>{todo.completed ? 'Completed' : 'Not Completed'}</span>
        </label>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-700 focus:outline-none"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
