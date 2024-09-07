import { useState } from 'react';
import { TodoModel } from '../models/TodoModel';

export const useTodoViewModel = () => {
  const [todos, setTodos] = useState<TodoModel[]>([
  ]);

  const addTodo = (title: string) => {
    const newTodo = new TodoModel(todos.length + 1, title);
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return {
    todos,
    addTodo,
    toggleTodo,
  };
};
