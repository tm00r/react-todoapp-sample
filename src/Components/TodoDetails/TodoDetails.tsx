import React from "react";

interface TodoDetailsProps {
    todoTitle: string;
    todoDetails: string;
}

export const TodoDetails: React.FC<TodoDetailsProps> = ({ todoTitle, todoDetails }) => {

    return (
        <>
            <h1 className="details__title title">Task</h1>
            <h2 className="details__todo">{todoTitle}</h2>
            <p className="details__description description">{todoDetails}</p>
        </>
    );

};