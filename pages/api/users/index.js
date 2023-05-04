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
    res.json(req.body)
   } catch (error) {
    console.log(error.message);
   }
  }
}


