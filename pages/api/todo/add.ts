import {NextApiRequest, NextApiResponse} from "next";
import * as fs from "fs";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'POST') {
            console.log("BODY",req.body);
            await new Promise<TodoType[]>((resolve, reject) => {
                fs.readFile("data/todos.json", (err, data) => {
                    if (err) {
                        return reject(err.message)
                    }
                    const todosData = data.toString()
                    if (!todosData) {
                        return resolve([])
                    }
                    const todos = JSON.parse(data.toString());
                    console.log("기존 투두스 ", todos);
                    const newId = todos[todos.length-1].id +1
                    const newTodos = [...todos, {...req.body.todo, id:newId, checked: false}]
console.log("NEW !! ", newTodos);

                    // return resolve(todos)
                    fs.writeFileSync('data/todos.json', JSON.stringify(newTodos));
                    return resolve(newTodos)
                })
            })
            res.statusCode = 200
            return res.send('성공했습니다.')
        }
    } catch (e) {
        console.log(e);
        return res.status(500).send(e)
    }

    return res.status(405).end()
}