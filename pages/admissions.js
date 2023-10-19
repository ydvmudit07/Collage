import Navbar from '@/components/Navbar'
import React from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from 'next/link';
import PortableText from "react-portable-text"

const admissions = ({ admissions,course }) => {
    const client = createClient({
        projectId: "10usolyp",
        dataset: "production",

    });
    const builder = imageUrlBuilder(client);
    function urlFor(source) {
        return builder.image(source);
    }
    console.log(admissions)
    return (
        <div>
            <Navbar />

            <div className='p-20'>
                {
                    admissions.map((item, index) => {
                        return (
                            <div>
                                <h1 className='text-2xl font-semibold mb-4'>{item.title}</h1>
                                <PortableText
                                    content={item.content}
                                    serializers={{
                                    }}
                                />
                                <h2 className='my-5 text-xl font-semibold'>Courses</h2>

                                <div>
                                 {
                                    item.course?.map((it,ind)=>{
                                        return(
                                            <div>
                                             {
                                                 course.map((cd,i)=>{
                                                    if(cd._id==it._ref){
                                                        return(
                                                            <div>
                                                             <Link className='font-semibold underline' href={'/course/'+cd._id}>
                                                                {cd.title}
                                                             </Link>
                                                            </div>
                                                        )
                                                    }
                                                 })
                                             }
                                            </div>
                                        )
                                    })
                                 }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export async function getServerSideProps(context) {
    const client = createClient({
        projectId: "10usolyp",
        dataset: "production",

    });
    const query = `*[_type == "admissions"]`;
    const query2 = `*[_type == "course"]`;
    const admissions = await client.fetch(query);
    const course = await client.fetch(query2);
    return {
        props: {
            admissions,course
        },
    };
}

export default admissions
