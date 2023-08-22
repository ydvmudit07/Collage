import Navbar from '@/components/Navbar'
import React from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from 'next/link';
const Clubs = ({clubs}) => {

    console.log(clubs)

    const client = createClient({
        projectId: "msx6zvjg",
        dataset: "production",
  
      });
      const builder = imageUrlBuilder(client);
      function urlFor(source) {
        return builder.image(source);
      }
  return (
    <div >
    <Navbar/>
      <h1 className='my-4'>Life at IIIT - Lucknow</h1>
      <div className='grid grid-flow-row grid-cols-3  px-20 py-10'> 
      {
        clubs.map((item,index)=>{
          return(
            <Link href={'/clubs/'+item._id}>
            <img className="inline-block rounded-full  " src={urlFor(item.picture[0]).width(50).url()} />
            </Link>
            )
          })
        }
    </div>
    </div>
  )
}

export async function getServerSideProps(context) {
    const client = createClient({
      projectId: "msx6zvjg",
      dataset: "production",

    });
    const query = `*[_type == "clubs"]`;
    const clubs = await client.fetch(query);

    return {
      props: {
        clubs,
      },
    };
  }

export default Clubs
