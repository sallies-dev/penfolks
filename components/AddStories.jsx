"use client"
import React,  {useState}from 'react'
import { ErrorMessage, Field, Form, Formik , } from 'formik';
import { SlPaperPlane } from "react-icons/sl";
import * as Yup from 'yup';
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase.config";
import { IoIosClose } from 'react-icons/io';
import { TbLoader3 } from "react-icons/tb";
import { FaCheckCircle } from 'react-icons/fa';

const AddStories = ({ session }) => {
  const author = session?.user?.name;
  const userImg = session?.user?.image;
  const uid = session?.user?.id;

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false)

  console.log(author, userImg);

  const initialValues = {
    title: "",
    // recipe: "",
    desc: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("This is a required field"),
    // recipe: Yup.string().required("This is a required field"),
    desc: Yup.string()
      .required("Please provide a description")
      .min(100, "Mininum of 100 characters"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      // object to be sent to the db
      const storiesDetails = {
        image: session?.user?.image,
        author: session?.user?.name,
        authorId: uid,
        timestamp: new Date().toLocaleDateString(),
        ...values,
      };
      const docRef = await addDoc(collection(db, "stories"), storiesDetails);
      setShowModal(true)
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
    resetForm();
  };

  return (
        <main className="min-h-dvh bg-gray-200 relative">
        <section className="min-h-[40vh] bg-[url('/book.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
            <div className="min-h-[40vh] bg-black/50 flex items-center justify-center p-3">
            <div className="space-y-5">
                <h1 className="text-teal-200 text-2xl md:text-4xl font-extrabold text-center">
                 Here all stories matter share your own expriences of life
                </h1>
            </div>
            </div>
            <section className=" backdrop-blur-md  md:p-5 p-3">
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            >
            <Form className="max-w-3xl mx-auto py-10 space-y-5">
                <div>
                <label className="text-xs">story Title</label>
                <Field
                    name="title"
                    className="w-full outline-none p-2 bg-white"
                    placeholder="Enter your story Title..."
                />
                <ErrorMessage
                    name="title"
                    component={"p"}
                    className="text-xs text-red-600"
                />
                </div>
                {/* <div>
                <label className="text-xs">Share your amaizing stories</label>
                <Field
                    name="recipe"
                    className="w-full outline-none p-2 bg-white"
                    placeholder="Share your recipe..."
                />
                <ErrorMessage
                    name="recipe"
                    component={"p"}
                    className="text-xs text-red-600"
                />
                </div> */}
                <div>
                <label className="text-xs">Description</label>
                <Field
                    name="desc"
                    as="textarea"
                    className="w-full outline-none p-2 bg-white"
                    placeholder="Please provide a description..."
                />
                <ErrorMessage
                    name="desc"
                    component={"p"}
                    className="text-xs text-red-600"
                />
                </div>

                <button
                disabled={loading}
                type="submit"
                className={`flex items-center justify-center gap-2 bg-teal-300 w-full py-2 text-white text-lg hover:bg-orange-400 transition-all duration-300 ${
                    loading
                    ? "bg-gray-500 hover:bg-gray-500 cursor-not-allowed"
                    : ""
                }`}
                >
                {loading ? (
                    <TbLoader3 className="text-2xl animate-spin text-center" />
                ) : (
                    <span className="flex items-center gap-2">
                    Post your story
                    <SlPaperPlane />
                    </span>
                )}
                </button>
            </Form>
            </Formik>
        </section>

        </section>

        
        <div className={`h-auto w-full  absolute inset-0 ${showModal ? "flex" : "hidden"} items-center justify-center`}>
            <div className="w-[30rem] h-[15rem] backdrop-blur-md   relative flex items-center justify-center">
            <button onClick={()=> setShowModal(false)} className="absolute right-2 top-2">
                <IoIosClose className="text-4xl text-red-600" />
            </button>
            <div className="flex flex-col gap-5 items-center justify-center">
                <FaCheckCircle className="text-center text-9xl text-green-600" />
                <p className="text-lg text-white ">Your story has been sucessfully uploaded</p>
            </div>
            </div>
        </div>
     </main>
    );
};


export default AddStories
