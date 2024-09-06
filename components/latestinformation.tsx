import * as React from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { IoIosArrowDown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";

export default function LatestInformation() {
  // w-[224.98px]
  return (
    <Card className="mt-[5.467px] w-full  bg-white-w100 border  border-l-gray-G900 shadow-none overflow-hidden">
      <CardContent className="p-0">
        <div className="px-[9.98px] mt-4">
          <h2 className="roboto-text-small   text-gray-D100">Latest</h2>

          <div className="mt-2">
            {Array(5).fill(
              latestinformationcontent.map((item, index) => {
                return (
                  <div className="flex mt-1 items-center" key={index}>
                    {item.icone}

                    <h4 className="roboto-text-small-color-gray line-clamp-1 ml-2">
                      {item.title}
                    </h4>
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="px-[9.98px] mt-4">
          <h2 className="roboto-text-small text-blue-B100">Groups</h2>

          <div className="mt-2">
            {Array(3).fill(
              latestinformationcontent.map((item, index) => {
                return (
                  <div className="flex mt-1 items-center" key={index}>
                    {item.icone}

                    <h4 className="roboto-text-small-color-gray line-clamp-1 ml-2">
                      {item.title}
                    </h4>
                  </div>
                );
              })
            )}

            {latestinformationcontent?.length > 0 && (
              <div className="flex items-center  mt-2 px-7">
                <p className="roboto-text-small   text-gray-G100 mr-1">
                  Show More{" "}
                </p>
                <IoIosArrowDown className="text-gray-G100  text-[14px] " />
              </div>
            )}
          </div>

          <div className=" mt-7">
            <div className=" flex justify-between">
              <h2 className="roboto-text-small text-blue-B100">Events</h2>

              <FiPlus className=" block text-[14px] text-gray-G200" />
            </div>

            <h2 className="roboto-text-small text-blue-B100 mt-3 mb-2">
              Tracked hashtags
            </h2>
          </div>
        </div>
      </CardContent>
      <hr className=" mt-4  border-gray-G1000" />
      <CardFooter className="p-0 flex justify-center mt-3 mb-3">
        <p className="roboto-small text-gray-G200"> Search for new</p>
      </CardFooter>
    </Card>
  );
}

export const latestinformationcontent = [
  {
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        id="group-small"
        Aria-hidden="true"
        role="none"
        data-supported-dps="16x16"
        fill="currentColor"
        className="mercado-match  text-gray-G200 w-[12px] h-[12px]"
      >
        <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
        <circle cx="8" cy="4" r="2"></circle>
        <circle cx="12.5" cy="5.5" r="1.5"></circle>
        <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
        <circle cx="3.5" cy="5.5" r="1.5"></circle>
      </svg>
    ),
    title: " Lorem ipsum dolor sit",
  },
];
