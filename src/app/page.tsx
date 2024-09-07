// import Image from "next/image";

import AddPeople from "../../components/addpeople";
import LatestInformation from "../../components/latestinformation";
import PostManageContainer from "../../components/middlepart.post";
import NavBar from "../../components/nav";
import Policy from "../../components/policey";
import UpcommingPost from "../../components/upcommingadd";
import UserProfileInformation from "../../components/userprofile";

export default function Home() {
  return (
    <>
      <NavBar />

      <div className=" grid mt-20 grid-cols-10 lg:max-w-6xl lg:mx-auto">
        <div className="col-span-2">
          <UserProfileInformation />

          <LatestInformation />
        </div>

        <div className="col-span-5 px-2 md:px-5">
          <PostManageContainer />
        </div>

        <div className="col-span-3">
          <AddPeople />

          <div className=" lg:sticky   lg:top-20">
            <UpcommingPost />

            <Policy />
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className=" grid mt-20 grid-cols-10 lg:max-w-6xl lg:mx-auto">
<div className="hidden   lg:block lg:col-span-2">
  <UserProfileInformation />

  <LatestInformation />
</div>

<div className="grid-cols-10 lg:col-span-5 px-2 md:px-5">
  <PostManageContainer />
</div>

<div className="hidden lg:block lg:col-span-3">
  <AddPeople />

  <div className=" lg:sticky   lg:top-20">
    <UpcommingPost />

    <Policy />
  </div>
</div>
</div> */
}
