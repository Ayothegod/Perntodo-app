import { useState } from "react"


const InputTodo = () => {
    const [description,setDescription] = useState("")

    const submitTodo = async(e) => {
        e.preventDefault()
        try {
            const body = {description}
            const response = await fetch("http://localhost:3000/api/users", {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(body)
            })
            window.location = "/"
            console.log(response);
        } catch (error) {
            console.log(error.message)
        }
    }

  return (
    <div className="flex gap-1 w-full items-center justify-center mt-4">
        <input type="text" name="text" className="border border-neutral-400 rounded-md outline-none px-2 py-1 w-4/5 " value={description} onChange={e => setDescription(e.target.value)} />
        <button className="bg-purple-700 px-2 py-1 text-white rounded-md" onClick={submitTodo}>Add Todo</button>
    </div>
  )
}

export default InputTodo