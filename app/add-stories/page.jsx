"use server"
import { auth } from '@/auth'
import AddStories from '@/components/AddStories'
import { redirect } from 'next/navigation'
import React from 'react'


const page = async () => { 
   const session = await auth()

     if (!session) {
    redirect("/auth/signin")}
  
 return (
    <main>
      <AddStories session={session}/>
    </main>
    
  )
  
  
}
  
 
  


export default page
