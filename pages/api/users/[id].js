import { pool } from "../db"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  if(req.method == "GET"){
    try {
      const { id } = await req.query
        console.log(id);
      const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1",[id])
      res.json(todo.rows[0])
    } catch (error) {
      res.json(error.message)
    }
  }

  if(req.method == "PUT"){
   try {
    const { id } = await req.query
    const {description} = await req.body

    const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING * ",[description,id]) 
    res.json("todo was updated")
   } catch (error) {
    console.log(error.message);
   }
  }

  if(req.method == "DELETE"){
   try {
    const { id } = await req.query
    const updateTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1 RETURNING * ",[id]) 
    res.json("todo was deleted")
   } catch (error) {
    console.log(error.message);
   }
  }

}