// src/routes/todoRoutes.ts

import express, { Request, Response } from 'express';
import { TodoService } from '../services/TodoService';
import { TodoInput } from '../models/todo';
import { validateTodoInput } from '../utils/ValidationUtils';

const router = express.Router();
const todoService = new TodoService();

router.post('/', async (req: Request, res: Response) => {
  const todoInput: TodoInput = req.body;
  const validationError = validateTodoInput(todoInput);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }
  const newTodo = await todoService.addTodo(todoInput);
  res.status(201).json(newTodo);
});

router.get('/', async (req: Request, res: Response) => {
  const todos = await todoService.getTodos();
  res.json(todos);
});

router.get('/:id', async (req: Request, res: Response) => {
  const todo = await todoService.getTodoById(req.params.id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  const updates: Partial<TodoInput> = req.body;
  const updatedTodo = await todoService.updateTodo(req.params.id, updates);
  if (updatedTodo) {
    res.json(updatedTodo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  const deleted = await todoService.deleteTodo(req.params.id);
  if (deleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

export default router;