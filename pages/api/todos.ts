import {NextApiRequest, NextApiResponse} from "next";
import * as fs from "fs";

type TodoType = { id: number, text: string, color: string, checked: boolean }

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {

            const todos = await new Promise<TodoType[]>((resolve, reject) => {
                fs.readFile("data/todos.json", (err, data) => {
                    if (err) {
                        return reject(err.message)
                    }
                    const todosData = data.toString()
                    if (!todosData) {
                        return resolve([])
                    }
                    const todos = JSON.parse(data.toString())
                    return resolve(todos)
                })
            })
            res.statusCode = 200
            return res.send(todos)
        }
    } catch (e) {
        console.log(e);
        return res.status(500).send(e)
    }

    return res.status(405).end()
}