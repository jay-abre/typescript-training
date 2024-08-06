// src/config/database.ts

export const databaseConfig = {
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/todo-app',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  };