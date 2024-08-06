// src/middleware/errorHandler.ts

import { Request, Response, NextFunction } from 'express';

export namespace ErrorHandler {
  export function handleErrors(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
  }
}