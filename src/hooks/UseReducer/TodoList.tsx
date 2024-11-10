import React from "react"
import { Action, ACTIONS, type Todo } from "./reducerHelper"


type TodoListProps = {
    item: Todo;
    dispatch: React.Dispatch<Action>;
};

const TodoList = ({ item, dispatch }: TodoListProps) => {

    const handleToggle = () => {
        dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: item.id } })
    }
    const handleDelet = () => {
        dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: item.id } })
    }
    return (
        <div className="flex gap-3 items-center">
            <p className={`text-2xl ${item.complete ? 'opacity-40' : 'opacity-100'}`}>{item.name} </p>
            <button className="p-2 rounded-md bg-green-300" onClick={handleToggle}>toggle</button>
            <button className="p-2 rounded-md bg-gray-400" onClick={handleDelet}>delete</button>
        </div>
    )
}

export default TodoList