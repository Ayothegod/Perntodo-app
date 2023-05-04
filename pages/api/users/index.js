import { pool } from "../db"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  if(req.method == "GET"){
    
  }

  if(req.method == "POST"){
   try {
    console.log(req.body)
    const {description} = req.body
    const newTodo = await pool.query("INSERT INTO todo(description) VALUES($1)",[description]) 
    res.json(newTodo)

   } catch (error) {
    console.log(error.message);
   }
  }

}


