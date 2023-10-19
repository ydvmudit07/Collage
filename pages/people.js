import Navbar from '@/components/Navbar'
import React from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from 'next/link';

const people = ({ people, departments }) => {
    const client = createClient({
        projectId: "t8c6d80n",
        dataset: "production",

    });
    const builder = imageUrlBuilder(client);
    function urlFor(source) {
        return builder.image(source);
    }

    console.log(people)
    return (
        <div>
            <Navbar />

            <div className='flex w-full min-h-[700px]'>
                <div className='w-1/4 px-5 py-10 text-center items-center flex flex-col bg-[#375F9B]'>
                    <h1 className='text-4xl mb-10 text-white font-semibold '>People</h1>
                    {
                        departments.map((item, index) => {
                            return (
                                <div className='my-12' key={index}>
                                    <h1 className='text-3xl text-white'>{item.name}</h1>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='px-10'>
                    {
                        departments.map((item, index) => {
                            return (
                                <div className='my-12' key={index}>
                                    <h1 className='text-3xl '>{item.name}</h1>
                                    {
                                        item?.people?.map((it, ind) => {
                                            return (
                                                <div key={it}>
                                                    <h1 className='text-2xl my-4 '>{it.SubDepartment}</h1>
                                                    <div className=' grid grid-flow-row grid-cols-3 gap-10'>
                                                        {
                                                            it.people?.map((ct, num) => {
                                                                return (
                                                                    <div key={num}>
                                                                        {
                                                                            people.map((wm, wt) => {
                                                                                if (wm._id == ct._ref) {

                                                                                    return (
                                                                                        <Link href={'/people/' + wm._id}>
                                                                                            <img className='rounded-full w-40 h-40' src={urlFor(wm.picture)} alt="" />
                                                                                        </Link>
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
        projectId: "t8c6d80n",
        dataset: "production",

    });
    const query = `*[_type == "people"]`;
    const query2 = `*[_type == "departments"]`;
    const people = await client.fetch(query);
    const departments = await client.fetch(query2);

    return {
        props: {
            people, departments
        },
    };
}



export default people
