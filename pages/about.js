import Navbar from '@/components/Navbar'
import React from 'react'

const about = () => {
    return (
        <div>
         <Navbar/>
        <div className="relative min-h-[90vh] m-10 max-md:m-5 scrollAnim">
        <div className="w-[25%] h-[10%] max-sm:w-[40%] bg-white sm:text-center pb-4">
        <h1 className="text-4xl max-sm:text-3xl text-bluedark font-bold">About Us</h1>
        </div>
        <div className="absolute top-0 left-[30%] w-[70%] h-full bg-gray-300 z-[-1]"></div>
        <div className="w-[50%] max-lg:w-[75%] max-sm:w-[90%] max-md:text-xl flex flex-col justify-center items-center text-2xl font-normal bg-bluel text-white p-10 gap-10">
        <p>Indian Institute of Information Technology, Lucknow (IIIT Lucknow) is one of the 20 IIITs being set up by the Central Government in Public Private Partnership (PPP) mode.</p>
        <p>IIIT Lucknow currently offers all the amenities, academic and non-academic to its students that can help them flourish and serve the nation with all their apprehension in the various fields of technology. The admission is made through central counselling of candidates who qualify in JEE (Mains).</p>
        <p>Read More -&gt;</p>
        </div>
        </div>
        </div>
    )
}

export default about
