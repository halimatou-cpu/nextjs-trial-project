import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
 
export async function getBooks() {
  const res = await fetch('http://localhost:4000/books')
  const data = await res.json()

  const cookieStore = cookies()
  const token = cookieStore.get('token')

//   return new Response('Hello, Next.js!', {
//     status: 200,
//     headers: { 'Set-Cookie': `token=${token?.value}` },
//   })
 
  return NextResponse.json({ data })
}