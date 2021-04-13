import Head from "next/head";
import {
  FaTwitter,
  FaHome,
  FaBell,
  FaEnvelope,
  FaRegBookmark,
  FaUser,
  FaSearch,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="container mx-auto max-w-[1440px] h-screen">
      <div className="w-full h-full grid grid-cols-12 gap-2">
        {/* LEFT SIDEBAR */}
        <div className="menu-sidebar col-span-2 outline-black flex flex-col space-y-10 py-2 px-2">
          <a href="/">
            <FaTwitter className="w-10 h-10 text-[#0F9AFB]" />
          </a>
          <a href="#" className="flex space-x-6 items-center hover:text-[#0F9AFB]">
            <FaHome className="w-8 h-8" />
            <p className="font-bold">Home</p>
          </a>
          <a href="#" className="flex space-x-6 items-center hover:text-[#0F9AFB]">
            <FaBell className="w-8 h-8" />
            <p className="font-bold">Notifications</p>
          </a>
          <a href="#" className="flex space-x-6 items-center hover:text-[#0F9AFB]">
            <FaEnvelope className="w-8 h-8" />
            <p className="font-bold">Messages</p>
          </a>
          <a href="#" className="flex space-x-6 items-center hover:text-[#0F9AFB]">
            <FaRegBookmark className="w-8 h-8" />
            <p className="font-bold">Bookmarks</p>
          </a>
          <a href="#" className="flex space-x-6 items-center hover:text-[#0F9AFB]">
            <FaUser className="w-8 h-8" />
            <p className="font-bold">Profile</p>
          </a>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="main-content col-span-7">

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="right-sidebar col-span-3 outline-black flex flex-col space-y-4 py-2">
          {/* SEARCHBAR */}
          <div className="search-bar flex items-center">
            <input
              type="text"
              className="rounded-full w-full text-gray-400 bg-gray-800 p-3"
              placeholder={`🔍 Search Bwitter`}
            />
          </div>

          {/* What's Happening Widget */}
          <div className="rounded-[12px] bg-[#15181C] text-white">
            <h1 className="font-bold border-b-[1px] border-gray-700 p-3 text-2xl">
              What's happening
            </h1>
            <div className="grid grid-cols-4 p-3 border-b-[1px] border-gray-700">
              <div className="col-span-3">
                <p className="text-gray-600 text-xs">News | 5 hours ago</p>
                <h3 className="text-white font-bold leading-tight">
                  Protests continue for second night in Minnesota after medical
                  examiner rules police shooting of Daunte Wright a homicide
                </h3>
              </div>
              <div className="col-span-1 pl-2 flex">
                <img
                  src="/assets/protest.jpg"
                  alt="protests"
                  className="object-cover w-[80px] h-[80px] rounded-md"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 p-3 border-b-[1px] border-gray-700">
              <div className="col-span-3">
                <p className="text-gray-600 text-xs">COVID-19 | LIVE</p>
                <h3 className="text-white font-bold leading-tight">
                  COVID-19: News and updates for Texas
                </h3>
              </div>
              <div className="col-span-1 pl-2 flex">
                <img
                  src="/assets/covid.jpg"
                  alt="covid"
                  className="object-cover w-[80px] h-[80px] rounded-md"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 p-3">
              <div className="col-span-3">
                <p className="text-gray-600 text-xs">Sports | 24 mins ago</p>
                <h3 className="text-white font-bold leading-tight">
                  Jamal Murray exits game with apparent knee injury
                </h3>
              </div>
              <div className="col-span-1 pl-2 flex">
                <img
                  src="/assets/jamal.jpg"
                  alt="jamal murray"
                  className="object-cover w-[80px] h-[80px] rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
