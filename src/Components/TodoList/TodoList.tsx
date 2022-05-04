import React from "react";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
    todos: Array<TodoType>;
    toggleTodo: ToggleTodoType;
}


export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
    return (
        <ul className="todos__list list">
            {todos.map(todo => {
                return (
                    <TodoListItem
                        key={todo.text}
                        todo={todo}
                        toggleTodo={toggleTodo}
                    />
                );
            })}
        </ul>
    );
};