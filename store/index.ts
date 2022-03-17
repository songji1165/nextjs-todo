import {applyMiddleware, combineReducers, createStore} from "redux";
import todo from "./todo"
import {createWrapper, HYDRATE} from "next-redux-wrapper";

// combineReducers : 리듀서를 모듈별로 관리하여 combineReducers를 통해 하나로 모음
const rootReducer = combineReducers({
    todo,
})

const reducer = (state: any, action:any) => {
    if(action.type === HYDRATE){ // hydrate : 서버에서 생성된 리덕스 스토어를 클라이언트에서 사용할 수 있도록 전달해주는 역할
        const nextState = {
            ...state,
            ...action.payload
        }
        return nextState;
    }

    return rootReducer(state, action)
}

// 스토어 타입: rootReducer 로 얻을 수 있음
export type RootState = ReturnType<typeof rootReducer>;

// 미들웨어 적용을 위한 스토어 enhancer
const bindMiddleware = (middleware: any) => {
    // 액션 -> 미들웨어 -> 디스패치
    if(process.env.NODE_ENV !== "production"){
        const {composeWithDevTools} = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware))
    }
}

// 스토어 생성
const initStore = () => {
    return createStore(reducer, bindMiddleware([]));
};

// App 컴포넌트에서 wrapper로 사용하기 위해, createWrapper를 임포트
export const wrapper = createWrapper(initStore)

