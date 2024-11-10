export const ACTIONS = {
    ADD_TODO: "add-todo",
    TOGGLE_TODO: "toggle-todo",
    DELETE_TODO: 'toggle-delete'
} as const


export type Todo = {
    id: number;
    name: string;
    complete: boolean;
};


export type Action =
    | { type: typeof ACTIONS.ADD_TODO; payload: { name: string } }
    | { type: typeof ACTIONS.TOGGLE_TODO; payload: { id: number } }
    | { type: typeof ACTIONS.DELETE_TODO; payload: { id: number } }