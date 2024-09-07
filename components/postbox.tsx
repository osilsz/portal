"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import UserImage from "../utils/userprofileimage";
import SearchInput from "../utils/searchinput";
import { IoLogoYoutube } from "react-icons/io5";

export default function PostBox() {
  const [open, setOpen] = useState("");
  const userInfo = {
    name: "Username",
    image:
      "https://cdn.prod.website-files.com/63ce921b1a2c847a9792d321/6424728d4fc3514c3ef24721_Health%20Insurance.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  };

  return (
    <Card className=" w-full bg-white-w100 border  border-l-gray-G900 shadow-none">
      <CardHeader className="w-full p-0  mx-4 my-3">
        <div className="flex">
          <UserImage
            name={userInfo.name}
            image={userInfo.image}
            AvatarContainerStyle={"w-[50px] h-[50px]"}
          />
          <div className=" w-full mr-4">
            <SearchInput
              containerStyle=" h-[47px]  border  border-gray-G800  rounded-full"
              placeholder="New publication"
              onChange={(event) => {
                // setOpen(prev => !prev)
                setOpen(event.target.value);
              }}
              value={open}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className=" flex justify-between">
        <div className=" flex  items-center ">
          {/* <MdOutlinePhotoSizeSelectActual className="text-[20px] text-blue-B200" /> */}

          <svg
            className="  w-5 h-5  text-blue-B200"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="image-medium"
            Aria-hidden="true"
            role="none"
            data-supported-dps="24x24"
            fill="currentColor"
          >
            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
          </svg>
          <p className="roboto-small text-gray-G200 pl-3">A photo</p>
        </div>

        <div className=" flex  items-center ">
          <IoLogoYoutube className="text-[20px] text-green-G100" />
          <p className="roboto-small text-gray-G200 pl-3">Video</p>
        </div>

        <div className=" flex  items-center ">
          {/* <SlCalender className="text-[18px] text-blue-B200" /> */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="  w-5 h-5   text-mustard-M300"
            viewBox="0 0 24 24"
            id="calendar-medium"
            Aria-hidden="true"
            role="none"
            data-supported-dps="24x24"
            fill="currentColor"
          >
            <path d="M3 3v15c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3H3zm13 1.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-8 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM19 18c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14v9zM7 11h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z"></path>
          </svg>
          <p className="roboto-small text-gray-G200 pl-3">Event</p>
        </div>

        <div className=" flex  items-center ">
          {/* <MdOutlinePhotoSizeSelectActual className="text-[20px] text-blue-B200" /> */}
          <svg
            className="  w-5 h-5   text-mustard-M200"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="content-align-left-medium"
            Aria-hidden="true"
            role="none"
            data-supported-dps="24x24"
            fill="currentColor"
          >
            <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
          </svg>
          <p className="roboto-small text-gray-G200 pl-3">
            To write an article
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
