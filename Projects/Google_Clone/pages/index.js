import Head from 'next/head'
import Avatar from "../components/Avatar";
import {MicrophoneIcon, DotsVerticalIcon} from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = e => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push('/search?term=${term}');

  
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*header */}
      <header className="flex w-full p-5 text-sm text-gray-700 justify-end">
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link"> Images</p>

          {/* Icon */}
            <DotsVerticalIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>



          {/* Avatar */}
          <Avatar url="https://lh3.googleusercontent.com/ogw/ADGmqu9bpVqTf413EuwMfLteDz8eTG7zW9Te8wX4Bz2AiKA=s32-c-mo" />
        </div>
      </header>


      {/* body */}
      <form className="flex flex-col items-center mt-30 flex-grow w-4/5">
        <Image 
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        height={100}
        width={272}
        />

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl 
        lg:max-w-2xl"> 
          <SearchIcon className="h-5 mr-3 text-gray-500" />

          <input 
          ref={searchInputRef}
          type="text" 
          className="focus:outline-none flex-grow" 
          />

          <MicrophoneIcon className="h-5"/>
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8
        sm:space-y-0 sm:flex-row sm:space-x-2"> 
          <button onclick={search} className="btn">Google Search</button>

          <button onclick={search} className="btn">I'm Feeling Lucky</button>
        </div>

        <div className="flex flex-center space-x-2 w-100 p-7 text-sm text-gray-700">
          <p>Google offered in:</p> 
          <p className="link text-blue-800">हिन्दी</p>
          <p className="link text-blue-800">বাংলা</p>
          <p className="link text-blue-800">తెలుగు</p>
          <p className="link text-blue-800">मराठी</p>
          <p className="link text-blue-800">தமிழ்</p>
          <p className="link text-blue-800">ગુજરાતી</p>
          <p className="link text-blue-800">ಕನ್ನಡ</p>
          <p className="link text-blue-800">മലയാളം</p>
          <p className="link text-blue-800">ਪੰਜਾਬੀ</p>
        </div>
      </form>

      <Footer />
    </div>
  )
}
