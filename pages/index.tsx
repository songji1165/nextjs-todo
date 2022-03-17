import React, {useEffect, useState} from "react";
import {GetServerSideProps, NextPage} from "next";
import axios from "../lib/api";
import {RootState, useSelector, wrapper} from "../store";
import {todoActions} from "../store/todo";

interface IProps {
    todos: TodoType[];
}

// @ts-ignore
const index = () => {
    console.log("클라이언트 ", process.env.NEXT_PUBLIC_API_URL);

    // 스토어에 저장된 정보를 props로 전달받는 대신, store 사용
    const todos = useSelector((state) => state.todo.todos);


    const [todoList, setTodoList] = useState(todos);
    const [colorsInfo, setColorsInfo] = useState(getColorsInfo(todoList));

    useEffect(() => {
        setColorsInfo(getColorsInfo(todoList));
        console.log(colorsInfo);
    }, [todoList])

    function getColorsInfo(todos: any) {
        const colors = todos.reduce((acc: any, current: any) => {
            if (acc.findIndex((color: any) => color === current.color) === -1) {
                acc.push(current.color)
            }
            return acc
        }, []);
        const colorsInfo = Object.fromEntries(colors.map(color => [color, 0]));
        todos.forEach(todo => {
            const {color} = todo;
            const isColor = colors.find(item => item === color)
            isColor && colorsInfo[color]++
        })
        return colorsInfo
    }


    function deleteTodo(todoId) {
        setTodoList(todoList.filter((todo, idx) => todo.id !== todoId))
    }

    function checkedTodo(todoId) {
        setTodoList(todoList.map((todo, idx) => {
            const checked = !todo.checked
            if (todo.id === todoId) {
                return {...todo, checked}
            }
            return todo
        }))
    }

    return <>

        <div>
            <p>남은 TODO {todoList.length}개</p>
            <div>
                {
                    Object.keys(colorsInfo).map((color, idx) => (
                        <span key={`color${idx}`}>{color} {colorsInfo[color]}개</span>
                    ))
                }
            </div>
        </div>
        <div>
            <ul>
                {
                    todoList.map((todo, idx) => {
                        const {id, checked} = todo;
                        const successId = `success${id}`;
                        const successTodoStyle = checked ? {"textDecoration": "line-through"} : {"textDecoration": "none"}
                        return (
                            <li key={`todo${idx}`}>
                                <span style={successTodoStyle}>{todo.text}</span>
                                <div>
                                    <button onClick={() => deleteTodo(id)}>삭제</button>
                                    <label htmlFor={successId}>완료</label>
                                    <input type="checkbox" id={successId} className="successTodo" checked={checked}
                                           onChange={() => checkedTodo(id)}
                                    />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </>
}

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
    async ({req, res, ...etc}) => {
            try {
                // console.log("서버 ", process.env);
                console.log("스토어  ", store);

                const res = await axios.get<TodoType[]>('api/todos')
                // console.log(res);
                if (res && res.status === 200 && res.data) {
                    store.dispatch(todoActions.setTodo(res.data))
                    return {props: {todos: res.data}}
                }
            } catch (e) {
                console.log(e);
            }
            return {props: {todos: []}}
        }
)

export default index