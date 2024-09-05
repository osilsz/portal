import Image from "next/image";
import logo from "../asstes/logo.png";
// flex items-center p-2 max-w-6xl mx-auto bg-pink-300

// bg-white-w100 border-b    border-gray-G050 z-50 top-0 left-0 fixed
export default function NavBar() {
  return (
    <div className="  bg-white-w100 px-[2.4rem] border-b    border-gray-G050">
      <div className=" flex items-center mx-auto   lg:max-w-6xl pt-[10px] pb-2">
        <div className="relative w-[2.25rem] h-[2.25rem] ">
          <Image
            src={logo}
            alt="website logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      {/* <Image src={logo} alt="website logo" width={20} height={20} /> */}
    </div>
  );
}

// align-items: center;
//   display: flex;
//   margin: 0 auto;
//   min-height: 100%;
//   width: 1128px;
