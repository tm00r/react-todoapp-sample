import React, {
    ChangeEvent,
    FormEvent,
    FunctionComponent as FC,
    useState
} from "react";


interface addTodoFormProps {
    addTodo: AddTodoType;
}


export const AddTodoForm: FC<addTodoFormProps> = ({ addTodo }) => {

    const [newTodo, setNewTodo] = useState<string>("");

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    }

    return (
        <div className="todos__add-form">
            <form className="todos__input-group input-group">
                <input
                    className="input-group__input"
                    type="text"
                    placeholder="Add Task"
                    onChange={handleChangeInput}
                    value={newTodo}
                />
                <button
                    className="input-group__button"
                    type="submit"
                    value=""
                    aria-label="Input Button"
                    onClick={handleSubmit}
                >
                    <span>+</span>
                </button>
            </form>
        </div>
    );
};