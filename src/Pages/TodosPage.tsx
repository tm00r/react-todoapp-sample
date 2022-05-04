import React, { useEffect } from "react";

import { TodoData } from "../data/TodoData";
import { TodoList } from "../components/TodoList/TodoList";
import { AddTodoForm } from "../components/AddTodoForm/AddTodoForm";


export const TodosPage: React.FC = () => {

  const [todos, setTodos] = React.useState<Array<TodoType>>([]);

  useEffect(() => {
    (async () => {
      const getData = async () => {
        const data = await TodoData();
        return data
      };
      const todosData = await getData();
      setTodos(todosData);
    })();
  }, []);

  const toggleTodo: ToggleTodoType = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const addTodo: AddTodoType = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { id: todos[todos.length - 1].id + "1", text: newTodo, complete: false, details: "Details for Todo One" }]);
  }
  return (
    <div className="main__content todos">
      <h1 className="todos__title title">My Tasks</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}
