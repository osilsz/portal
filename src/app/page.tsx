// import Image from "next/image";

import LatestInformation from "../../components/latestinformation";
import NavBar from "../../components/nav";
import UserProfileInformation from "../../components/userprofile";

export default function Home() {
  return (
    <>
      <NavBar />

      {/* <div class="grid grid-cols-4 gap-4 mt-36">
        <div>01</div>

        <div>09</div>
      </div> */}

      <div className=" gird mt-20 grid-cols-3 md:max-w-6xl md:mx-auto">
        <div className="  col-span-2">
          <UserProfileInformation />

          <LatestInformation />
        </div>

        <div>
          <h1>hi</h1>
        </div>

        <div>
          <h1>hi</h1>
        </div>
      </div>
    </>
  );
}
