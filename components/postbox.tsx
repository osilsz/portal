"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import UserImage from "../utils/userprofileimage";
import SearchInput from "../utils/searchinput";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { PiVideoFill } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";

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
              onChange={() => {
                // setOpen(prev => !prev)
                setOpen((prev) => prev);
              }}
              value={open}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className=" flex justify-between">
        <div className=" flex  items-center ">
          <MdOutlinePhotoSizeSelectActual className="text-[20px] text-blue-B200" />
          <p className="roboto-small text-gray-G200 pl-3">A photo</p>
        </div>

        <div className=" flex  items-center ">
          <PiVideoFill className="text-[23px] text-green-G100" />
          <p className="roboto-small text-gray-G200 pl-3">Video</p>
        </div>

        <div className=" flex  items-center ">
          <SlCalender className="text-[18px] text-blue-B200" />
          <p className="roboto-small text-gray-G200 pl-3">Event</p>
        </div>

        <div className=" flex  items-center ">
          <MdOutlinePhotoSizeSelectActual className="text-[20px] text-blue-B200" />
          <p className="roboto-small text-gray-G200 pl-3">
            To write an article
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
