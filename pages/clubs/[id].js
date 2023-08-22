import React from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from 'next/router'
import Heading from '@/components/Heading';
import Navbar from '@/components/Navbar';

const Clubs = ({clubs,events}) => {
  const router = useRouter()
  const id=router.query.id


  const client = createClient({
    projectId: "msx6zvjg",
    dataset: "production",

  });
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }
  console.log(events,clubs)
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "msx6zvjg",
    dataset: "production",

  });
  const query = `*[_type == "clubs"]`;
  const query2 = `*[_type == "events"]`;
  const clubs = await client.fetch(query);
  const events = await client.fetch(query2);

  return {
    props: {
      clubs,events
    },
  };
}


export default Clubs
