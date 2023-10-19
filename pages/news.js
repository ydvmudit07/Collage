import Navbar from '@/components/Navbar'
import React from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from 'next/link';

const news = ({news,annoucements}) => {
    const client = createClient({
        projectId: "bdnunqwq",
        dataset: "production",
  
      });
      const builder = imageUrlBuilder(client);
      function urlFor(source) {
        return builder.image(source);
      }
 
  return (
    <div>
      <Navbar/>
      <div className="flex flex-col gap-2 font-serif lg:text-3xl text-bluel md:text-5xl p-10 sm:text-4xl max-sm:text-2xl">
              <div className="font-bold">IIITL in the News</div>
      </div>
      
      <div className='grid grid-flow-row grid-cols-1 gap-x-20 lg:grid-cols-2 p-10'>
           <div>
             {
                news[0]?
                <div>
                  <a href={news[0].link}>
                   <img src={urlFor(news[0].picture)} alt="" />
                  </a>
                </div>:null
             }
           </div>
           <div>
              {
                news.map((it,index)=>{
                  return(
                    <div key={index} className="my-4">
                    <a href={it.link}>
                     <h2 className='text-xl'>{it.name}</h2>
                    </a>
                    </div>
                  )
                })
              }
           </div>
      </div>

      <div className="flex flex-col gap-2 font-serif lg:text-3xl text-bluel md:text-5xl p-10 sm:text-4xl max-sm:text-2xl">
              <div className="font-bold">Public Annoucements</div>
      </div>
       

    </div>
  )
}
export async function getServerSideProps(context) {
    const client = createClient({
      projectId: "bdnunqwq",
      dataset: "production",

    });
    const query = `*[_type == "news"]`;
    const query2 = `*[_type == "annoucements"]`;
    const news = await client.fetch(query);
    const annoucements = await client.fetch(query2);

    return {
      props: {
        news,annoucements
      },
    };
  }


export default news
