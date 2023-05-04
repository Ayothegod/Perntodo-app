import { pool } from "../db"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  if(req.method == "GET"){
    try {
      const allData = await pool.query("SELECT * FROM todo")
      res.json({
        allData:allData.rows,
        todoAmount:allData.rows.length})
    } catch (error) {
      res.json(error.message)
    }
  }

  
  if(req.method == "POST"){
   try {
    const {description} = req.body
    const newTodo = await pool.query("INSERT INTO todo(description) VALUES($1) RETURNING * ",[description]) 
    res.json(newTodo.rows[0])

   } catch (error) {
    console.log(error.message);
   }
  }

}


