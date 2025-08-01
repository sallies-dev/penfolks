import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { auth,signIn } from '@/auth';
import { redirect } from 'next/navigation';

const page = async () => {
     
  const session = await auth()
   console.log(session);

  if (session) {
   redirect("/add-stories");   
  }

  return (
    <main className="min-h-dvh p-3 md:p-10  bg-[url('/book.jpg')] bg-cover bg-no-repeat bg center">
      <div className='border backdrop-blur-md h-[70vh] w-[70vh] lg:ml-75 space-y-5 '>
            <h1 className="text-center font-bold md:text-3xl text-xl text-white">
            Sign in
          </h1>
          <div className="flex items-center justify-center">
            <div className="space-y-4 max-md:w-full md:w-xl">
              <form
                action={ async () => {
                  "use server";
                  await signIn("google"); 
                }}
              >
                <button
                  type="submit"
                  className="border flex  items-center justify-center gap-2 text-white py-4 rounded-full text-xl hover:bg-teal-700 transition-all w-full"
                >
                  <p>Sign In with Google</p>
                  <FaGoogle />
                </button>
              
              </form> 
              <form
               action={async()=>{
                "use server";
                await signIn("github");
                
              }}> 
                <button
                  type="submit"
                  className="border flex items-center justify-center gap-2 text-white  py-4 rounded-full text-xl hover:bg-teal-700 transition-all w-full">
                  <p>Sign In with Github</p>
                  <FaGithub />
                </button>

              </form>
            
              <button className="border flex items-center justify-center gap-2  text-white py-4 rounded-full text-xl hover:bg-teal-700 transition-all w-full">
                <p>Sign In with Facebook</p>
                <FaFacebookF />
              </button>
            </div>
          </div>
          <p className="text-center text-white mt-5">
            By signing in to our website, you agree to our{" "}
            <span className="underline hover:text-orange-200">Privacy Policy</span>, and{" "}
            <span className="underline hover:text-orange-200">Terms of Use</span>.
          </p>
      </div>
      

      
    </main>
  )
}

export default page
