
type TodoType = {
    id: string;
    text: string;
    complete: boolean;
    details: string;
}

type ToggleTodoType = (selectedTodo: Todo) => void;

type AddTodoType = (text: string) => void;
