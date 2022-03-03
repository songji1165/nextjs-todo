// @ts-ignore
import React from "react";
import {GetServerSideProps, NextPage} from "next";
import axios from "../lib/api";

const index: NextPage = ({todos}:TodoType) => {
    console.log(todos);
    return <div>hello</div>
}

export const getServerSideProps: GetServerSideProps = async () => {
    try{
        const res = await axios.get<TodoType[]>('api/todos')
        console.log(res);
        if(res && res.status === 200 && res.data){
            return {props: {todos: res.data}}
        }
    }catch (e){
        console.log(e);
    }
    return  {props: {}}
}

export default index