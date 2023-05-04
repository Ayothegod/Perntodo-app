// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const users = [
  {
    id:1,
    name:"ayomide",
    age:30,
    email:"test@ayo.com",
  },
  {
    id:2,
    name:"soprinye",
    age:20,
    email:"testersop@ayo.com",
  },
  {
    id:3,
    name:"Legacy",
    age:300,
    email:"test@lagecy.com",
  },
]

export default async function handler(req, res) {
  if(req.method == "GET"){
    const userData = users
    res.status(200).json(
      {users:userData}
    )
  }

  if(req.method == "POST"){
   try {
    console.log(req.body)
    const {id,name,age,who} = req.body
    const newUser = {id,name,age,who}
    const addNewUser = users.push({id,name,age,who})
    const allUsers = users
    res.json({
      newUser:newUser,
      addNewUser:addNewUser,
      allUsers:allUsers,
    })
   } catch (error) {
    console.log(error.message);
   }
  }
}


