

// ** 액션타입
export const SET_TODO_LIST = "todo/SET_TODO_LIST";

// ** 액션의 생성자들은 함수현태로 export 해야 함
export const setTodo = (payload: TodoType[]) => {
    return {
        type: SET_TODO_LIST,
        payload
    }
}

export const todoActions = {setTodo};

// ** 리덕스 처음 상태
interface TodoReduxState {
    todos: TodoType[]
}

const initialState: TodoReduxState = {
    todos: []
}

// ** reducer
export default function reducer(state = initialState, action: any){
    switch (action.type){
        case SET_TODO_LIST :
            const newState = {...state, todos: action.payload}
            return newState;
        default:
            return state;
    }
}