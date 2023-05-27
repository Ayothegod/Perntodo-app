import { useState } from "react"

const EditTodo = ({modal, setModal,content,id}) => {
    const [description,setDescription] = useState(content)
    
    const [clientError,setClientError] = useState("")
    const [clientSucess,setClientSucess] = useState("")

    const updateTodo = async() => {
        // e.preventDefault()
        try {
            const body = {description}
            const response = await fetch(`/api/users/${id}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(body)
            })
            setClientSucess("done")
            // window.location = "/"
        } catch (error) {
            setClientError(error.message)

        }
    }

    return (
        <div className="fixed inset-0 w-screen bg-[rgba(0,0,0,0.5)] h-screen flex items-center justify-center">
            <div className="w-full sm:w-2/3 md:1/2 bg-white shadow-xl rounded-md p-4">
                <p className="text-lg font-semibold text-purple-700">Edit Todo</p>
                <div>
                    <textarea name="" cols="30" rows="5" className="w-full border border-neutral-400 rounded my-4" value={description} onChange={(e) => setDescription(e.target.value)}>
                    </textarea>
                </div>
                <div className="text-right space-x-4 text-sm">
                    <button className="bg-gray-700 text-white py-1 px-2 rounded-md" onClick={() => setModal(!modal)}>Cancel</button>
                    <button className="bg-purple-700 text-white py-1 px-2 rounded-md" onClick={() => updateTodo()}>Edit</button>
                </div>
            </div>
            {clientError && <p>{clientError}</p>}
        {clientSucess && <p>{clientSucess}</p>}
        </div>
    )
}

export default EditTodo