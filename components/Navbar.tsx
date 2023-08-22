import Link from "next/link";

const Logo = () => {
  return (
    <div className="row-span-2 col-span-1">
      <img src="iiitl.png"></img>
    </div>
  );
};

const Header = () => {
  return (
    <>
      <div className="row-span-1 col-span-4 flex justify-end items-end max-md:row-span-2 max-md:justify-center max-md:items-center relative">
        <div className="text-3xl max-lg:text-2xl max-sm:text-xl">
          Indian Institute of Information Technology, Lucknow
        </div>
        <label
          htmlFor="mobile-toggle"
          className="md:hidden absolute -right-4 w-8 h-8 flex justify-center items-center top-full z-30 bg-[rgba(0,0,0,0.5)] text-white"
        >
          &lt;
        </label>
      </div>
      <MobileNavigation />
    </>
  );
};

const Navigation = () => {
  return (
    <ul className="row-span-1 col-span-4 flex justify-between items-end max-lg:text-sm max-md:col-span-5 max-md:hidden">
      <li className="border border-bluel hover:bg-bluel hover:text-white duration-200 py-2 w-[13%] text-center">
        <Link href="/about">About</Link>
      </li>
      <li className="border border-bluel hover:bg-bluel hover:text-white duration-200 py-2 w-[13%] text-center">
      <Link href="/admissions">Admissions</Link>
      </li>
      <li className="border border-bluel hover:bg-bluel hover:text-white duration-200 py-2 w-[13%] text-center">
        Academics
      </li>
      <li className="border border-bluel hover:bg-bluel hover:text-white duration-200 py-2 w-[13%] text-center">
      <Link href="/student-life">Student Life</Link>
      </li>
      <li className="border border-bluel hover:bg-bluel hover:text-white duration-200 py-2 w-[13%] text-center">
      <Link href="/people">People</Link>
      </li>
      <li className="border border-bluel hover:bg-bluel hover:text-white duration-200 py-2 w-[13%] text-center">
      <Link href="/courses">Courses</Link>
      </li>
    </ul>
  );
};

const MobileNavigation = () => {
  return(
    <>
      <input type="checkbox" className="peer hidden" id="mobile-toggle"></input>
      <div className=" bg-bluel text-white h-screen hidden peer-checked:block fixed bottom-0 right-0 top-0 left-0 z-10">
        <div className="h-36 flex justify-center items-center">
          <h1 className="text-4xl font-bold">MENU</h1>
        </div>
        <ul className="flex flex-col justify-start">
          <li className="text-center text-2xl font-medium py-6">Admissions</li>
          <li className="text-center text-2xl font-medium py-6">Academics</li>
          <li className="text-center text-2xl font-medium py-6">
            Student Life
          </li>
          <li className="text-center text-2xl font-medium py-6">People</li>
          <li className="text-center text-2xl font-medium py-6">Courses</li>
        </ul>
      </div>
    </>
  );
};

export default function Navbar() {
  return (
    <div className="grid grid-rows-2 grid-cols-5 h-30 text-bluel px-4 pt-4 gap-2 border-b pb-4 border-bluel">
      <Logo />
      <Header />
      <Navigation />
    </div>
  );
}
