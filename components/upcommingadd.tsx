import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function UpcommingPost() {
  return (
    <Card className=" w-full  mt-3 bg-white-w100 border  border-l-gray-G900 shadow-none overflow-hidden">
      <div className="relative w-[100%] h-[251.91px]">
        <Image
          src={add[0].image}
          alt="add photo"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </Card>
  );
}

const add = [
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4E10AQE1_8HGotAl5w/image-shrink_800/image-shrink_800/0/1693587755632?e=1726333200&v=beta&t=ufBBrep86XJ6vVacmhk2C18BnaM-ez2skUj3nmoUFoI",
  },
];
