

// ** 액션타입
import {createSlice, PayloadAction} from "@reduxjs/toolkit";



// ** 리덕스 처음 상태
interface TodoReduxState {
    todos: TodoType[]
}

const initialState: TodoReduxState = {
    todos: []
}

const todo = createSlice({
    name: "todo",
    initialState,
    reducers: {
        setTodo(state, action: PayloadAction<TodoType[]>){
            state.todos = action.payload;
        }
    }
})



export const todoActions = {...todo.actions};

export default todo;
