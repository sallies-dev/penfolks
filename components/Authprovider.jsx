"use client"
import React from 'react'
import {SessionProvider} from 'next-auth/react'
const Authprovider = ({children}) => {
  return (
    <main>
      <SessionProvider>{children}</SessionProvider>
    </main>
  )
}

export default Authprovider
