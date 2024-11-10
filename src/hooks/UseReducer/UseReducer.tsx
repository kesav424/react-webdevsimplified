import { FormEvent, useReducer, useState } from "react";
import { ACTIONS } from "./reducerHelper";
import type { Action, Todo } from "./reducerHelper";
import TodoList from "./TodoList";





function reducer(todos: Todo[], action: Action): Todo[] {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)];

        case ACTIONS.TOGGLE_TODO:
            return todos.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, complete: !item.complete }
                }
                return item
            })

        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos;  // Return the current state if action type doesn't match
    }
}

function newTodo(name: string): Todo {
    return { id: Date.now(), name, complete: false };
}

const UseReducer = () => {
    const [name, setName] = useState('');
    const [todos, dispatch] = useReducer(reducer, [] as Todo[]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
        setName('');
    };

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-black"
                />
            </form>

            <div className="flex flex-col mt-5 gap-5">
                {
                    todos.map((item) => <TodoList key={item.id} item={item} dispatch={dispatch} />)
                }

            </div>
        </div>
    );
};

export default UseReducer;
