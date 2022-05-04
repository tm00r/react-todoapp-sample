import React from "react";
import { useLocation } from "react-router-dom";
import { TodoDetails } from "../components/TodoDetails/TodoDetails"

export const TodoDetailsPage: React.FC = () => {

    const location = useLocation()

    const state = location.state as TodoType

    return (
        <div className="main__content details">
            <TodoDetails todoTitle={state.text} todoDetails={state.details} />
        </div>
    );

};