import { auth } from '@/auth'
import Stories from '@/components/Stories'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const session = await auth()

  if (!session) {
    redirect("/auth/signin")
  }
  return (
    <main>
      <Stories session={session} />
    </main>
  )
  
}

export default page