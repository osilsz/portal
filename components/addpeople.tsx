import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BsInfoLg } from "react-icons/bs";
import UserImage from "../utils/userprofileimage";
import AddButton from "../utils/addbutton";
import { FaPlus } from "react-icons/fa6";
import { LuArrowRight } from "react-icons/lu";

export default function AddPeople() {
  return (
    <Card className=" w-full bg-white-w100 border  border-l-gray-G900 shadow-none">
      <CardHeader className="w-full p-0  ">
        <div className="flex items-center justify-between py-3 px-4">
          <h2 className=" font-montserrat  font-medium text-base text-dark-D200">
            Add to your feed
          </h2>
          <div className=" w-[20px] h-[20px] bg-gray-G200 flex justify-center items-center rounded-sm">
            <BsInfoLg className=" text-white-w100" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {AddPeopleinfo?.map((item, index) => {
          return (
            <div className="flex mb-3 " key={index}>
              <UserImage
                name={item.name}
                image={item.image}
                AvatarContainerStyle={"w-[50px] h-[50px]"}
              />

              <div className=" ml-3">
                <h4 className=" font-montserrat font-medium  text-sm text-dark-D200">
                  {item.name}
                </h4>
                <h6 className=" font-montserrat  font-normal  text-xs text-dark-D200">
                  {item.title}
                </h6>
                <p className=" font-montserrat font-normal text-[11px] text-gray-G200 ">
                  {item.description}
                </p>

                <AddButton
                  title="track"
                  LeftIcone={() => (
                    <FaPlus className="text-[16px] text-gray-G1100" />
                  )}
                  btncontainer=" mt-1"
                />
              </div>
            </div>
          );
        })}

        {AddPeopleinfo?.length > 2 && (
          <div className="flex items-center">
            <p className=" font-montserrat font-medium text-gray-G700  text-xs">
              See all recommendation
            </p>
            <LuArrowRight className="text-gray-G700 ml-1 text-[12px]" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export const AddPeopleinfo = [
  {
    name: "Marie Clark",
    image:
      "https://www.paperboatcreative.com/wp-content/uploads/2023/07/image-3-14-1.png",
    description: "Lorem ipsum dolor sit amet ",
    title: "User information",
  },
  {
    name: "Mark Tini",
    image:
      "https://yousmel.com/cdn/shop/files/9d0cee5f307761834c71035882ba0d509d137b85.png?v=1718384165&width=900",
    description: "Lorem ipsum dolor sit amet ",
    title: "User information",
  },
  {
    name: "Zander Kutsko",
    image:
      "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/412/posts/29452/image/example-image.jpg",
    description: "Lorem ipsum dolor sit amet ",
    title: "User information",
  },
];
