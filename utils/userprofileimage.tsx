import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function UserImage({
  name,
  image,
  AvatarContainerStyle,
}: {
  name: string;
  image: string;
  AvatarContainerStyle?: string;
}) {
  return (
    <Avatar className={` ${AvatarContainerStyle} overflow-hidden`}>
      <AvatarImage
        src={image}
        alt="Your Profile Picture"
        className=" object-cover"
      />
      <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
    </Avatar>
  );
}
