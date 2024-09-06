"use client";
// import Image from "next/image";
// import logo from "../asstes/logo.png";
import SearchInput from "../utils/searchinput";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import femaleImage from "../asstes/people/female.png";
import { IoMdArrowDropdown } from "react-icons/io";

export default function NavBar() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <header>
      <div className="  bg-white-w100 px-[2.4rem] border-b    border-gray-G050 fixed z-50 top-0 left-0 w-full ">
        <div className=" flex items-center mx-auto   lg:max-w-6xl pt-[10px] pb-2">
          {/* if you want to use text that case use this*/}

          <div className="  bg-blue-B100 w-[2.25rem] h-[2.25rem] rounded-sm  flex justify-center items-center">
            <h1 className=" text-3xl text-white-w100   font-noto font-semibold">
              in
            </h1>
          </div>

          {/* if you want to use image that case use this also uncomment the upper import*/}

          {/* <div className="relative w-[2.25rem] h-[2.25rem]">
          <Image
            src={logo}
            alt="website logo"
            layout="fill"
            objectFit="contain"
          />
        </div> */}

          <SearchInput
            hide={true}
            containerStyle="max-w-72  h-[2.38rem] bg-gray-G020 rounded-md"
            placeholder="Search"
            LeftIcone={() => (
              <IoIosSearch className="text-[20px] text-gray-G1100" />
            )}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            value={searchInput}
          />

          <ul className=" flex   space-x-3   md:space-x-10">
            {navItem.map((item, index) => {
              return (
                <li className=" flex items-center" key={index}>
                  <Link
                    href="#"
                    className=" flex flex-col items-center justify-center"
                  >
                    {item?.navText === "Profile" ? (
                      <div className="relative w-[25px] h-[25px] rounded-full">
                        {item?.navIcone}
                      </div>
                    ) : (
                      item?.navIcone
                    )}

                    <div className=" flex">
                      <p className=" font-roboto    font-normal text-xs   text-gray-G200">
                        {item.navText}
                      </p>
                      {item?.content && (
                        <IoMdArrowDropdown className="text-gray-G200" />
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="  justify-center items-center  pl-5 hidden md:flex">
            <p className=" font-roboto  font-normal text-xs   text-mustard-M100 border-b border-b-mustard-M100">
              Try Premium for free
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export const navItem = [
  {
    navIcone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        data-supported-dps="24x24"
        fill="currentColor"
        className="mercado-match  text-gray-500 w-[1.7rem] h-[1.7rem]"
        // width="24"
        // height="24
      >
        <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
      </svg>
    ),
    navText: "Home",
  },
  {
    navIcone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        data-supported-dps="24x24"
        fill="currentColor"
        className="mercado-match  text-gray-500 w-[1.7rem] h-[1.7rem]"
        // width="24"
        // height="24"
        focusable="false"
      >
        <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
      </svg>
    ),
    navText: "My Network",
  },
  {
    navIcone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        data-supported-dps="24x24"
        fill="currentColor"
        className="mercado-match  text-gray-500 w-[1.7rem] h-[1.7rem]"
        // width="24"
        // height="24"
        focusable="false"
      >
        <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
      </svg>
    ),
    navText: "Jobs",
  },
  {
    navIcone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        data-supported-dps="24x24"
        fill="currentColor"
        className="mercado-match  text-gray-500 w-[1.7rem] h-[1.7rem]"
        // width="24"
        // height="24"
        focusable="false"
      >
        <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
      </svg>
    ),
    navText: "Messaging",
  },
  {
    navIcone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        data-supported-dps="24x24"
        fill="currentColor"
        className="mercado-match  text-gray-500 w-[1.7rem] h-[1.7rem]"
        // width="24"
        // height="24"
        focusable="false"
      >
        <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
      </svg>
    ),
    navText: "Notifications",
  },
  {
    navIcone: (
      <Image
        src={femaleImage}
        alt="website logo"
        layout="fill"
        objectFit="cover"
        className="overflow-hidden rounded-full h-full"
      />
    ),
    navText: "Profile",
    content: {
      title: "Visit more linkdin product",
    },
  },
  {
    navIcone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        data-supported-dps="24x24"
        fill="currentColor"
        className="mercado-match  text-gray-500 w-[1.7rem] h-[1.7rem]"
        // width="24"
        // height="24"
        focusable="false"
      >
        <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
      </svg>
    ),
    navText: "For Business",
    content: {
      title: "Visit more linkdin product",
    },
  },
];
