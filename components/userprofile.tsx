import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import CoverPhoto from "../asstes/people/cover.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaBookmark } from "react-icons/fa";

export default function UserProfileInformation() {
  const userInfo = {
    name: "Username",
    image:
      "https://cdn.prod.website-files.com/63ce921b1a2c847a9792d321/6424728d4fc3514c3ef24721_Health%20Insurance.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  };

  return (
    <Card className="w-[224.98px] bg-white-w100 border  border-l-gray-G900 shadow-none overflow-hidden">
      <CardHeader className="w-full p-0 relative">
        <div className="relative w-[100%] h-[58.09px]">
          <Image
            src={CoverPhoto}
            alt="cover photo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute  top-4 left-1/2 -translate-x-2/4 w-[72px] h-[72px]  bg-white-w100 rounded-full  flex items-center justify-center">
          <Avatar className="w-[70px] h-[70px] ">
            <AvatarImage src={userInfo.image} alt="Your Profile Picture" />
            <AvatarFallback>{userInfo.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="mt-10 text-center px-6">
          <p className="roboto-normal-black capitalize">{userInfo.name}</p>

          <p className="roboto-text-small-color-gray">{userInfo.description}</p>
        </div>

        <hr className=" mt-4  border-gray-G1000" />

        <div className="px-[9.98px] mt-4">
          <div className="flex justify-between">
            <h4 className="roboto-text-small-color-gray">Contacts</h4>
            <h4 className="roboto-text-small text-blue-B100">fifty</h4>
          </div>
          <p className="roboto-text-small   text-gray-D100 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>

          <div className="flex justify-between mt-2">
            <h4 className="roboto-text-small-color-gray">Profile View</h4>
            <h4 className="roboto-text-small text-blue-B100">3</h4>
          </div>
        </div>

        <hr className=" mt-4  border-gray-G1000" />

        <div className="px-[9.98px] mt-4">
          <h4 className="roboto-text-small-color-gray line-clamp-1">
            Access to exclusive tools and statistics
          </h4>
          <div className="flex mt-2 items-center">
            <div className="w-3 h-3  bg-gray-G1400  rounded-[2px] mr-2"></div>

            <p className="roboto-text-small   text-dark-D100">
              Try Premium for free
            </p>
          </div>
        </div>

        <hr className=" mt-4  border-gray-G1000" />

        <div className="px-[9.98px] mt-4 pb-3">
          <div className="flex mt-2 items-center">
            <FaBookmark className=" text-[12px] text-gray-G200 mr-2" />
            <h4 className="roboto-text-small-color-gray line-clamp-1">
              My elements
            </h4>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
