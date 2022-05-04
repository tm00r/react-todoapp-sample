import React from 'react';
import { Link } from "react-router-dom";

interface TodoListItemProps {
    todo: TodoType;
    toggleTodo: ToggleTodoType;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
    todo,
    toggleTodo,
}) => {

    return (
        <>
            <li className={"list__item todo-item"}>

                <form className={"todo-item__form"}>

                    <input
                        className='todo-item__checkbox checkbox'
                        type="checkbox"
                        checked={todo.complete}
                        onChange={() => toggleTodo(todo)}
                    />

                    <label className={`todo-item__label todo-item--${todo.complete ? "complete" : "incomplete"}`}>
                        <Link className='todo-item__link'
                            to={`/todo/details/${todo.id}`}
                            state={todo}>
                            {todo.text}
                        </Link>
                    </label>

                </form>

            </li >

        </>
    );
}