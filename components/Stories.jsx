"use client"
import { db } from "@/lib/firebase.config";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { TbLoader3 } from "react-icons/tb";

const Stories = ({session}) => {
  const [story, setstory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStory = async () => {
    let storyData = [];
    try {
      const querySnapshot = await getDocs(collection(db, "stories"));
      querySnapshot.forEach((doc) => {
        // id: doc.id,
        console.log(doc.id, " => ", doc.data());
        const id = doc.id;
        const rec = { id, ...doc.data() };
        console.log(rec);
        storyData.push(rec);
        console.log(storyData);
      });
      setstory(storyData);
      console.log(story);
    } catch (error) {
      console.error("Error fetching stories", error);
      alert("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStory();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "stories", id));
    fetchStory();
  };

  return (
    <main className="min-h-dvh space-y-10">
      <section className=" min-h-[40vh] bg-[url('/book.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
        <div className="min-h-[40vh] bg-black/50 flex items-center justify-center">
          <div className="space-y-5">
            <h1 className="text-white text-4xl font-extrabold text-center">
                Choose From our various sellection of books 
            </h1>
            <p className="text-gray-200 text-center text-lg">
               We have a variety of books ranging from 
              filled ACTION to Romance and horror to children books
            </p>
          </div>
        </div>
      </section>

      {loading ? (
        <div className="h-[50vh] flex items-center justify-center">
          <TbLoader3 className="animate-spin text-5xl text-blue-600" />
        </div>
      ) : (
        <section className=" bg-orange-500 grid grid-cols-4 space-y-5 gap-3 md:gap-10 md:p-10 p-3 border">
         {story.map(( story,i) => (
          <Link href={"/stories/" + story.id} key={i}className="space-y-3 shadow-md p-3 h-[50vh] relative bg-teal-800 rounded-xl">
              <div>
                  <div className="flex flex-rows items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={story.image}
                          alt="user"
                          width={500}
                          height={500}
                          className="w-40 h-40 rounded-lg"
                        />
                        <h2 className='absolute bottom-5'>{story.author}</h2>
                      </div>
                        <div>
                          {session?.user?.id == story.authorId ? (
                            <button
                              onClick={() => handleDelete(story.id)}
                              className="p-2 rounded-full hover:bg-red-500 hover:text-white transition-all"
                            >
                              <FaRegTrashAlt className="text-base" />
                            </button>
                          ) : (
                            <IoIosMore className="text-xl" />
                          )}
                        </div>
                      
                    </div>
              </div>
            
            
            <p className="text-base text-center">{story.title}</p>
           
          </Link>
        ))}
      </section>



      )}
    </main>
  );
};

export default Stories;
