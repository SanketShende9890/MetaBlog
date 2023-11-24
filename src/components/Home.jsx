// import React from 'react';
// import { ModeContextState } from "../ModeContext";
// import { useContext } from "react";
import trendingPostImg from "../assets/common/trending_post_img.jpg";
import authorProfile from "../assets/common/author-profile.jpg"
const Home = () => {
  // const {darkMode} = useContext(ModeContextState);
  return (
    <section className="container mx-auto border-2">
      <div className="relative trending-slate w-full flex justify-center items-center">
        <img className="rounded-xl" src={trendingPostImg} alt="" />
        <div className="w-11/12 md:w-[600px] rounded-xl absolute bottom-[-80px] left-1/2 md:left-[80px] trending-slate-content bg-white p-6 flex flex-col justify-start items-start shadow-lg">
          <div className="bg-blue-600 rounded-lg py-1 px-2 text-white font-normal text-sm mb-4">
            Technology
          </div>
          <h1 className="text-3xl font-semibold mb-6">
          The Impact of Technology on the Workplace: How Technology is Changing
          </h1>
          <div className="flex justify-start items-center">
            <img className="mr-4" src={authorProfile} alt="" />
            <span className="text-md text-gray-600 mr-4">
              Jason Francisco
            </span>
            <span className="text-gray-600">
              August 20, 2022
            </span>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Home