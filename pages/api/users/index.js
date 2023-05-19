import { pool } from "../db"
import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
 });

  if(req.method == "GET"){
    try {
      const allData = await pool.query("SELECT * FROM todo")
      res.status(200).json(allData.rows)
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


