export default function AddButton({
  btncontainer,
  LeftIcone,
  title,
  RightIcone,
}: ButtonProp) {
  return (
    <div
      className={` py-1 px-4 w-[86.37px] h-[32.3px] rounded-full border border-gray-G200 flex items-center justify-center ${btncontainer}`}
    >
      {LeftIcone && <LeftIcone />}
      <p className=" ml-1  font-montserrat font-medium  text-sm text-gray-G200">
        {title}
      </p>
      {RightIcone && <RightIcone />}
    </div>
  );
}
