// import Image from "next/image";

import LatestInformation from "../../components/latestinformation";
import NavBar from "../../components/nav";
import PostBox from "../../components/postbox";
import UserProfileInformation from "../../components/userprofile";

export default function Home() {
  return (
    <>
      <NavBar />

      <div className=" grid mt-20 grid-cols-10 lg:max-w-6xl lg:mx-auto">
        <div className="hidden   lg:block lg:col-span-2">
          <UserProfileInformation />

          <LatestInformation />
        </div>

        <div className="grid-cols-10 lg:col-span-5 px-2 md:px-5">
          <PostBox />
        </div>

        <div className="hidden lg:block lg:col-span-3">
          <h1>hi</h1>
        </div>
      </div>
    </>
  );
}
