import Head from 'next/head'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

export default function Home() {
  const [user,setUser] = useState("")
  const fetcher = (at) => fetch(at).then(res => res.json())
  const { data, error, isLoading } = useSWR("http://localhost:3000/api/hello", fetcher)
  console.log({data});

  // console.log(user);
  // console.log({user});
  return (
    <>
      <Head>
        <title>New App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />              
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' text-4xl text-slate-600 flex items-center flex-col gap-4 px-8 justify-center h-screen '>
        <p>Time to cook</p>
        <div>
          {/* <p>{user.name}</p>
          <p>{user.age}</p>
          <p>{user.who}</p> */}
        </div>
      </main>
    </>
  )
}