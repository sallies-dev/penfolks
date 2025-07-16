"use client"
import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { SlPaperPlane } from "react-icons/sl";
import * as Yup from 'yup';

const page = () => {
  const initialValue ={
    title:"",
    recipe:"",
    desc:"",
  };

  const validationSchema= Yup.object({
    title: Yup.string().required("This is a required field"),
    recipe: Yup.string().required("This is a required field"),
    desc: Yup.string()
      .required("please provide a description")
      .min(10,"Minimum of 10 character")
  })                          

  const handleSubmit= (values)=>{
    console.log(values);
    

  };

  return (
    <main className="min-h-dvh bg-orange-100 ">
      <section className="min-h-[40vh] bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
        <div className="min-h-[40vh] bg-black/50 flex items-center justify-center p-3">
          <div className="space-y-5">
            <h1 className="text-white text-4xl font-extrabold text-center">
              Share Your great stories to our great collection of stories
            </h1>
          </div>
        </div>
      </section>
      <section className='md:p-5 p-3'>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
        >
          <Form onSubmit={handleSubmit } className=" max-w-3xl mx-auto py-10 space-y-5">
            <div>
              <label className="text-xs">Story title</label>
              <Field
                name="title"
                className="w-full outline-none p-2 bg-white"
                placeholder="Enter Story Title...."
              />
              <ErrorMessage
                name="title"
                component={"p"}
                className="text-xs  text-red-600"
              />
            </div>
            <div>
              <label className="text-xs">Share Your stories</label>
              <Field
                name="recipe"
                className="w-full outline-none p-2 bg-white"
                placeholder="Share Your Stories..."
              />
              <ErrorMessage
                name="recipe"
                component={"p"}
                className="text-xs  text-red-600"
              />
            </div>

            <div>
              <label as="text area" className="text-xs">
                Description
              </label>
              <Field
                name="desc"
                className="w-full outline-none p-2 bg-white"
                placeholder="Please provide a description..."
              />
              <ErrorMessage
                name="desc"
                component={"p"}
                className="text-xs  text-red-600"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2
          bg-teal-600 w-full py-2 text-white text-lg hover:bg-orange-300 transition-all
          duration-300"
            >
              Post stories
              <SlPaperPlane />
            </button>
          </Form>
        </Formik>
      </section>
    </main>
  );
}

export default page
