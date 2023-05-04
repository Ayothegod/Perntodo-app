import Head from 'next/head'
import { useState } from 'react'
import useSWR from 'swr'

export default function Home() {
  const fetcher = (at) => fetch(at).then(res => res.json())
  const { data, error, isLoading } = useSWR("http://localhost:3000/api/users", fetcher)
  console.log(data);

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
    <>
      <Head>
        <title>New App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />              
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' text-4xl text-slate-600 flex items-center flex-col gap-4 px-8 justify-center h-screen '>
        <p>Time to cook client</p>
      <div>
       {
        data.allData.map(todo => (
          <li key={todo.id}>{todo.description}</li>
        ))
       }
      </div>
      </main>
    </>
  )
}