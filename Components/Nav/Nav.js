import { useRouter } from "next/dist/client/router";
import React from "react";
import requests from "../../utills/requests";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex mt-10 px-10 sm:px-20 whitespace-nowrap text-2xl space-x-10 sm:space-x-20  overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?Genre=${key}`)}
            className="cursor-pointer transition duration-100 transform hover:scale-125  hover:text-white "
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute right-0 top-0 bg-gradient-to-l from-blue-500 opacity-30 to-blue-800 h-10 w-1/12" />
    </nav>
  );
};

export default Nav;
