import Image from 'next/image'

import Navbar from '@/components/Navbar'

const Content = () => {
  return(
      <div className="h-[80vh] flex flex-col justify-center gap-4 px-20">
          <div className="flex flex-col gap-2 font-serif lg:text-6xl text-bluel md:text-5xl sm:text-4xl max-sm:text-2xl">
              <div className="">VIDYA DADATI VINAYAM,</div>
              <div className="">VINAYA DADATI PATRATAM</div>
          </div>
          <div className="text-2xl max-sm:text-lg text-bluedark">Knowledge gives you discipline, discipline makes you worthy.</div>
      </div>
  );
}
const About=()=>{
    return(
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
    )
}

// work starts here

const InfoCard = ({ title, content }) => {
  return (
    <div className="relative m-10 max-md:m-5 scrollAnim">
      <div className='bg-gray-300 z-[-1] py-3'>
        <div className="flex flex-row justify-center space-x-10">
          <div className="w-[28%] h-[60vh] max-lg:w-[30%] max-sm:w-[30%] max-md:text-xl flex flex-col text-center text-2xl font-normal bg-bluel text-white p-10 gap-10 transform hover:scale-110 transition-transform py-0 px-0 hover:border border-bluedark hover:shadow-lg">
            <p className='bg-white text-bluedark font-bold h-12 py-2'>{title}</p>
            <p className=''>{content}</p>
          </div>
          <div className="w-[28%] h-[60vh] max-lg:w-[30%] max-sm:w-[30%] max-md:text-xl flex flex-col text-center text-2xl font-normal bg-bluel text-white p-10 gap-10 transform hover:scale-110 transition-transform py-0 px-0 hover:border border-bluedark hover:shadow-lg">
            <p className='bg-white text-bluedark font-bold h-12 py-2'>{title}</p>
            <p className=''>{content}</p>
          </div>
          <div className="w-[28%] h-[60vh] max-lg:w-[30%] max-sm:w-[30%] max-md:text-xl flex flex-col text-center text-2xl font-normal bg-bluel text-white p-10 gap-10 transform hover:scale-110 transition-transform py-0 px-0 hover:border border-bluedark hover:shadow-lg">
            <p className='bg-white text-bluedark font-bold h-12 py-2'>{title}</p>
            <p className=''>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// work ends here

export default function Home() {
  return (
    <div>
    <Navbar/>
    <Content/>
    <About/>
    <InfoCard/>
    </div>
    )
}
