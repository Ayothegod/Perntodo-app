import { useState } from 'react'
import useSWR from 'swr'

const ListTodo = () => {
    const fetcher = (at) => fetch(at).then(res => res.json())
    const { data, error, isLoading } = useSWR("http://localhost:3000/api/users", fetcher)
    console.log(data);

if (error) return <div>failed to load</div>
if (isLoading) return <div>loading...</div>
  return (
    <div>
        <ul>
            {
                data.allData.map(data => (
                    <li key={data.todo_id}>{data.description}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default ListTodo