import { useState } from "react"


const InputTodo = () => {
    // lets touch this code again
    const [description, setDescription] = useState("")
    const [notodo,setNotodo] = useState("")
    const [clientError,setClientError] = useState("")
    const [clientSucess,setClientSucess] = useState("")

    const submitTodo = async (e) => {
        e.preventDefault()
        try {
            if (description.length < 1) {
                setNotodo('cannot add todo !!!')
            } else {

                const body = { description }
                const response = await fetch("/api/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body)
                })
                setClientSucess("done")
            }
        } catch (error) {
            setClientError(error.message)
        }
    }

    return (
        <>
        <div className="flex gap-1 w-full items-center justify-center mt-4">
            <input type="text" name="text" className="border border-neutral-400 rounded-md outline-none px-2 py-1 w-4/5 " value={description} onChange={e => setDescription(e.target.value)} />
            <button className="bg-purple-700 px-2 py-1 text-white rounded-md" onClick={submitTodo}>Add Todo</button>
        </div>
        {clientError && <p>{clientError}</p>}
        {clientSucess && <p>{clientSucess}</p>}
            <p className="text-center text-red-600 font-bold">{notodo}</p>
        </>
    )
}

export default InputTodo