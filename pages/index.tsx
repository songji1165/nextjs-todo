// @ts-ignore
import React from "react";
import {GetServerSideProps, NextPage} from "next";
import axios from "../lib/api";

interface IProps {
    todos: TodoType[];
}

const index: NextPage<IProps> = ({todos}) => {
    console.log(todos);
    console.log("클라이언트 ", process.env.NEXT_PUBLIC_API_URL);
    return <div>hello</div>
}

export const getServerSideProps: GetServerSideProps = async () => {
    try{
        console.log("서버 ", process.env);

        const res = await axios.get<TodoType[]>('api/todos')
        console.log(res);
        if(res && res.status === 200 && res.data){
            return {props: {todos: res.data}}
        }
    }catch (e){
        console.log(e);
    }
    return  {props: {todos: []}}
}

export default index