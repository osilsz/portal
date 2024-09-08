import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Cards({
  image,
  title,
}: {
  image: string;
  title: string | null;
}) {
  return (
    <Card className="mt-5 mb-5 w-full bg-white-w100 border  border-l-gray-G900 shadow-none overflow-hidden">
      <div className="relative  h-[418.09px]">
        <Image
          src={image}
          alt="website logo"
          layout="fill"
          objectFit="cover"
          className=" w-full h-full"
        />
      </div>
      {title && (
        <div className=" my-4  mx-6">
          <p className="roboto-normal-black line-clamp-1">{title}</p>
        </div>
      )}
    </Card>
  );
}
