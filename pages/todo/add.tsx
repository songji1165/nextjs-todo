import React, {ChangeEvent, useState} from "react";
import {useRouter} from "next/router";
import axios from "../../lib/api";

export default function Add() {
    const router = useRouter();
    const COLORS = ['navy', 'red', 'blue', 'pink', 'purple'];
    const [todoText, setTodoText] = useState("");
    const [todoColor, setTodoColor] = useState("");

    function handelChangeText (e: ChangeEvent<HTMLInputElement>){
        console.log(e.target.value);
        setTodoText(e.target.value)
    }

    async function handleClickSave (){
        const todo = {"text": todoText, "color": todoColor}
        const res = await axios.post<TodoType[]>('api/todo/add', {todo})
        if(res.status === 200){
            router.push('/')
        }
    }

    return (
        <>
            <div>
                <div>Add Todo</div>
                <div>
                    {COLORS.map((color, idx) => (
                        <label htmlFor={color} key={color}>
                            <input type="radio" id={color} name="colors" className="colorsItem" checked={color === todoColor} onChange={()=>setTodoColor(color)}/>
                            {color}
                        </label>))}
                </div>
                <button onClick={()=>handleClickSave()}>추가하기</button>
                <input type="text" onChange={(e)=>handelChangeText(e)}/>
            </div>
        </>
    )
}