import Navbar from '@/components/Navbar'
import React from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from 'next/link';
import PortableText from "react-portable-text"

const about = ({ about }) => {
  const client = createClient({
    projectId: "qbjmxhyj",
    dataset: "production",

  });
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }
  console.log(about)
  return (
    <div>
      <Navbar />

      <div className='flex w-full min-h-[700px]'>

        <div className='w-1/4 px-5 py-10 text-center items-center flex flex-col bg-[#375F9B]'>
          {
            about.map((item, index) => {
              return (
                <div className='my-12' key={index}>
                  <h1 className='text-3xl text-white'>{item.title}</h1>
                </div>
              )
            })
          }
        </div>

        <div className='p-10 w-3/4'>
        {
          about.map((item, index) => {
            return (
              <div className='my-12' key={index}>
                <h1 className='text-3xl text'>{item.title}</h1>
                  <div className='my-4'>
                  <PortableText
                              content={item.description}
                              serializers={{
                              }}
                            />
                  </div>
              </div>
            )
          })
        }
          
        </div>


        
        </div>
    
        </div>
  )
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "qbjmxhyj",
    dataset: "production",

  });
  const query = `*[_type == "about"]`;
  const about = await client.fetch(query);


  return {
    props: {
      about
    },
  };
}


export default about
