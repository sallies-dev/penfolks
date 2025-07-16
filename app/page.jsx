import React from "react";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  const LatestStories = [
    {
      image: "/image1.jpg",
      title: "The Lost City",
      desc: "A team of explorers discovers an acient city hidden deep within the jungle.",
      genre: "Adventure",
    },
    {
      image: "/image.jpg",
      title: "A Strange Encounter",
      desc: "Walkin home one night, when i saw something that defied all explanation",
      genre: "Horror",
    },
    {
      title: "The journey Begins",
      desc: "With mix of excitement and nerves,we traveled the continents",
      genre: "Travel&Adventure",
    },
  ];

  return (
    <main className="min-h-dvh bg-orange-100  grid grid-cols ">
      <section className="text-center mb-10 pt-40">
        <div className=" p-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-2">
            Create and Share Stories
          </h2>
          <p className="text-gray-600 mb-4">
            Write your own story and share it with the Penfolk community, Where
            your voice matter.
          </p>

          <div className=" pl-20 lg:pl-30">
            <Image
              src={"/note.png"}
              alt="note"
              width={500}
              height={500}
              className="bg-teal-800/50 rounded-xl h-50 w-50 "
            />
          </div>

          <div className="flex justify-center gap-4 md:gap-10 max-md:flex-col py-5">
            <Link
              href={"/add-stories"}
              className="bg-teal-800/50 text-white px-6 py-2 rounded-full font-semibold flex items-center justify-center gap-2 text-base md:text-xl hover:bg-orange-200 transition-all"
            >
              Add a story
            </Link>
            <Link
              href={"#"}
              className="bg-orange-200 px-6 py-2 text-white  rounded-full font-semibold flex items-center justify-center gap-2 text-base md:text-xl hover:bg-teal-800/50 transition-all"
            >
              Browse
            </Link>
          </div>

          <section className="bg-gray-100 min-h-[70vh] p-3 md:p-10 border ">
            <h1 className="text-center text-3xl md:text-5xl text-teal-800 font-bold mb-5">
              Latest stories
            </h1>
            <div className="lg:px-5 p-3 grid lg:grid-cols-3 md:grid-cols-2 gap-5 ">
              {LatestStories.map((reason, i) => (
                <div key={i} className="space-y-3">
                  <Image
                    alt={reason.title.slice(0, 4)}
                    src={reason.image}
                    width={800}
                    height={800}
                    className="h-50 w-50 item-center"
                  
                
                  />
                  <h2 className="text-center font-bold text-gray-700 text-xl">
                    {reason.title}
                  </h2>
                  <p className="text-sm text-gray-600 text-center">
                    {reason.desc}
                  </p>
                  {/* <p className="text-gray-600 text-left">{reason.genre}</p> */}
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default page;
