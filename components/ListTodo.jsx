import { useEffect, useState } from 'react'
import useSWR from 'swr'

const ListTodo = () => {
    const fetcher = (at) => fetch(at).then(res => res.json())
    const { data, error, isLoading } = useSWR("http://localhost:3000/api/users", fetcher)

    const [todos,setTodos] = useState(data)
    // const [modal,setModal] = useState(false)

    const deleteTodo = async(id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:3000/api/users/${id}`,{
                method:"DELETE"
            } )
            window.location = "/"
        } catch (error) {
            console.log(error.message);
        }
    }

    //use a usestate in order to use filter for all todo excerpt the ones deleted instead of windows .liocation
    // UPDATE 
    //add a modal for the update to see all remaing text in too before edit

    // if (error) return <div>failed to load</div>
    // if (isLoading) return <div>loading...</div>
    return (
        <div>
            <ul className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
                {
                todos.map(data => (
                        <div key={data.todo_id} className='border border-purple-400 p-4 rounded-md shadow-md space-y-4'>
                            <li >{data.description}</li>
                            <div className='flex justify-between '>
                                <button className='bg-purple-500 text-white rounded-md py-1 px-2 text-sm font-semibold' onClick={() => updateData(data.description) }>Update</button>

                                {/* {
                                    !modal && "hello"
                                } */}

                                <button className='bg-red-600 text-white rounded-md py-1 px-2 text-sm font-semibold' onClick={() => deleteTodo(data.todo_id)}>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </ul>
            {/* <div>
                {
                    remData?.allData?.length <= 0 && 
                    <div className='flex items-center justify-center mt-20'>
                        <p>No data to display</p>
                    </div>
                }
            </div> */}
        </div>
    )
}

export default ListTodo