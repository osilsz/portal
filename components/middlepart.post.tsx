import { IoMdArrowDropdown } from "react-icons/io";
import PostBox from "./postbox";
import { DropdownMenuContents } from "../utils/dropdown";
import AllPost from "./post";

export default function PostManageContainer() {
  return (
    <>
      <PostBox />

      <div className="flex items-center justify-between   my-4">
        <div className=" w-[80%]">
          <hr className=" border-gray-G1200" />
        </div>
        <div className=" ml-2 w-[20%] flex items-center justify-around">
          <div>
            <p className=" font-roboto   text-xs  font-thin   text-gray-G200">
              Sort :
            </p>
          </div>
          <div className="flex items-center justify-between">
            {/* <p className=" font-roboto   text-xs  font-medium text-dark-D100">
              {" "}
              popular
            </p> */}
            <DropdownMenuContents />
          </div>
        </div>
      </div>

      <AllPost />

      {/* <div className=" mt-2"></div>

      <AllPost />

      <div className=" mt-2"></div> */}
    </>
  );
}
