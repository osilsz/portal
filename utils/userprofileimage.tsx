import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    <Avatar className={` ${AvatarContainerStyle}`}>
      <AvatarImage src={image} alt="Your Profile Picture" />
      <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
    </Avatar>
  );
}
