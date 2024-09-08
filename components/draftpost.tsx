// import * as React from "react";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import Image from "next/image";
// import CoverPhoto from "../asstes/people/cover.jpg";
// import cardone from "../asstes/card/image-0.jpeg";
// import { FaBookmark, FaHeart } from "react-icons/fa";
// import UserImage from "../utils/userprofileimage";
// import { HiDotsHorizontal } from "react-icons/hi";
// import Cards from "../utils/card";
// import { SlLike } from "react-icons/sl";
// import { FaRegHeart } from "react-icons/fa6";

// export default function AllPost() {
//   const info = {
//     name: "Username",
//     image: null,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
//     company: true,
//   };

//   return (
//     <Card className=" w-full bg-white-w100 border  border-l-gray-G900 shadow-none px-[16.43px]">
//       <CardHeader className="w-full p-0 flex flex-row justify-between mt-[14.23px] ">
//         <div className=" flex">
//           {!info?.image && (
//             <div className="w-[59.99px] h-[61.37px] rounded-lg  bg-blue-B400"></div>
//           )}

//           {info?.image && (
//             <div className="relative w-[59.99px] h-[61.37px]">
//               <Image
//                 src={CoverPhoto}
//                 alt="website logo"
//                 layout="fill"
//                 objectFit="cover"
//                 className=" w-full h-full rounded-lg"
//               />
//             </div>
//           )}

//           {!info.company && info?.image && (
//             <UserImage
//               name={info.name}
//               image={info.image}
//               AvatarContainerStyle={"w-[48px] h-[48px]"}
//             />
//           )}

//           <div className="ml-[11px]">
//             <h2 className="roboto-normal-black">Your Brand</h2>

//             <h3 className=" roboto-text-thin-black mt-[6px]">
//               26.548 followers
//             </h3>

//             <h5 className="font-roboto  font-normal text-[10px]  text-black mt-[6px]">
//               Promoted
//             </h5>
//           </div>
//         </div>
//         <HiDotsHorizontal className=" mt-0   text-gray-G300" />
//       </CardHeader>

//       <CardContent className="p-0  mt-4">
//         <p className="font-roboto    text-[14px] font-normal">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus,
//           augue eget scelerisque efficitur.
//         </p>
//       </CardContent>
//       <CardContent className="p-0">
//         <Cards
//           image={cardone}
//           title={"Etiam vulputate mollis sem, vel placerat enim finibus vel. "}
//         />
//         <div className=" mb-4 flex justify-between">
//           <div className=" flex">
//             <div className="   w-[19.35px] h-[19.35px] bg-blue-B300 flex items-center justify-center rounded-full">
//               <SlLike className="  text-[11px]  text-blue-B050   " />
//             </div>

//             <div className=" -ml-1   w-[19.35px] h-[19.35px] bg-mustard-M400 flex items-center justify-center rounded-full">
//               <FaHeart className="  text-[12px]  text-gray-G00   " />
//             </div>

//             <div className=" ml-[10px]">
//               <p className=" text-gray-G400  text-[14px] font-roboto font-normal">
//                 1025
//               </p>
//             </div>
//           </div>
//           <div>
//             <p className="   text-gray-G400 font-montserrat  font-medium text-xs">
//               753 comments • 234 shares
//             </p>
//           </div>
//         </div>

//         <hr className=" border-[#ADABAA]" />

//         <div className="mt-3 mb-2 mx-12 flex justify-between">
//           <div className=" flex flex-col items-center">
//             <svg
//               className=" w-[24px] h-[24px] text-gray-G600 font-bold"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               id="thumbs-up-outline-medium"
//               Aria-hidden="true"
//               role="none"
//               data-supported-dps="24x24"
//               fill="currentColor"
//             >
//               <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
//             </svg>

//             <p className="font-roboto   text-xs font-bold text-gray-G600  mt-1 ">
//               Like
//             </p>
//           </div>

//           <div className=" flex flex-col items-center">
//             <svg
//               className=" w-[24px] h-[24px] text-gray-G600 font-bold"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               id="comment-medium"
//               Aria-hidden="true"
//               role="none"
//               data-supported-dps="24x24"
//               fill="currentColor"
//             >
//               <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
//             </svg>

//             <p className="font-roboto   text-xs font-bold text-gray-G600  mt-1 ">
//               Comments
//             </p>
//           </div>

//           <div className=" flex flex-col items-center">
//             <svg
//               className=" w-[24px] h-[24px] text-gray-G600 font-bold"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               id="repost-medium"
//               Aria-hidden="true"
//               role="none"
//               data-supported-dps="24x24"
//               fill="currentColor"
//             >
//               <path d="M13.96 5H6c-.55 0-1 .45-1 1v10H3V6c0-1.66 1.34-3 3-3h7.96L12 0h2.37L17 4l-2.63 4H12l1.96-3zm5.54 3H19v10c0 .55-.45 1-1 1h-7.96L12 16H9.63L7 20l2.63 4H12l-1.96-3H18c1.66 0 3-1.34 3-3V8h-1.5z"></path>
//             </svg>

//             <p className="font-roboto   text-xs font-bold text-gray-G600  mt-1 ">
//               Repost
//             </p>
//           </div>

//           <div className=" flex flex-col items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               className=" w-[24px] h-[24px] text-gray-G600 font-bold"
//               id="send-privately-medium"
//               Aria-hidden="true"
//               role="none"
//               data-supported-dps="24x24"
//               fill="currentColor"
//             >
//               <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
//             </svg>

//             <p className="font-roboto   text-xs font-bold text-gray-G600  mt-1 ">
//               Share
//             </p>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
