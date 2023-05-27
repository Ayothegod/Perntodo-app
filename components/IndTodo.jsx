import { useState } from 'react'
import EditTodo from './EditTodo'

const IndTodo = ({ data }) => {
    const [modal, setModal] = useState(false)

    const [clientError, setClientError] = useState("")
    const [clientSucess, setClientSucess] = useState("")

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`/api/users/${id}`, {
                method: "DELETE"
            })
            setClientSucess("done")
        } catch (error) {
            setClientError(error.message)

        }
    }


    return (
        <div key={data.todo_id}>
            <div className='border border-purple-400 p-4 rounded-md shadow-md space-y-4'>
                <li >{data.description}</li>
                <div className='flex justify-between '>
                    <button className='bg-purple-500 text-white rounded-md py-1 px-2 text-sm font-semibold' onClick={() => setModal(!modal)} >Edit Todo</button>

                    <button className='bg-red-600 text-white rounded-md py-1 px-2 text-sm font-semibold' onClick={() => deleteTodo(data.todo_id)}>Delete</button>
                </div>
            </div>

            {modal && (
                <div>
                    <EditTodo id={data.todo_id} setModal={setModal} modal={modal} content={data.description} />
                </div>
            )}
            {clientError && <p>{clientError}</p>}
            {clientSucess && <p>{clientSucess}</p>}
        </div>
    )
}

export default IndTodo