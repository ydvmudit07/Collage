import Navbar from '@/components/Navbar'
import React from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from 'next/link';
import Zoom from 'react-reveal/Zoom';

const Clubs = ({clubs}) => {

    console.log(clubs)

    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_CLUB_ID,
        dataset: "production",
  
      });
      const builder = imageUrlBuilder(client);
      function urlFor(source) {
        return builder.image(source);
      }
  return (
    <div >
    <Navbar/>
      <h1 className='my-4 text-2xl  px-10'>Life at IIIT - Lucknow</h1>
      <div className='grid grid-flow-row grid-cols-3  px-20 py-10'> 
      <Zoom>
      {
        clubs.map((item,index)=>{
          return(
            <Link href={'/clubs/'+item._id}>
            <img className="inline-block   " src={urlFor(item.picture[0]).url()} />
            </Link>
            )
          })
        }
      </Zoom>
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
