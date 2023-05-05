import { useEffect, useState } from 'react'
import useSWR from 'swr'
import IndTodo from './IndTodo'

const ListTodo = () => {
    const fetcher = (at) => fetch(at).then(res => res.json())
    const { data, error, isLoading } = useSWR("http://localhost:3000/api/users", fetcher)
    console.log(data)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return (
        <div>
            <ul className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
                {
                    data.map(data => (
                            <IndTodo key={data.todo_id} data={data}/>
                    ))
                }
            </ul>

            <div>
                {
                    data.length <= 0 &&
                    <div className='flex items-center justify-center mt-20'>
                        <p>No data to display</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default ListTodo