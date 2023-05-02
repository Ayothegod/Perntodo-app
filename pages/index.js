import Head from 'next/head'

export default function Home() {
  console.log("hello")
  return (
    <>
      <Head>
        <title>New App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />              
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' text-4xl text-slate-600 flex items-center justify-center h-screen '>
        Hello boss, whats going on
      </main>
    </>
  )
}
