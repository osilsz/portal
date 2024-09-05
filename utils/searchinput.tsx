export default function SearchInput({
  LeftIcone,
  placeholder,
  RightIcone,
  inputContainerStyle,
  containerStyle,
  ...rest
}: SearchInputProps) {
  return (
    <div className="flex-1 hidden md:block">
      <div
        className={`flex bg-gray-G020   mx-2 rounded-md flex-1 items-center ${containerStyle}`}
      >
        <div className="flex items-center  ps-[17.55px]">
          {LeftIcone && <LeftIcone />}

          <input
            type="search"
            placeholder={placeholder}
            className={` px-[8px]  text-sm border-none  bg-transparent focus:outline-none font-montserrat placeholder:font-montserrat placeholder:font-normal placeholder:text-sm  placeholder:text-gray-G1100 ${inputContainerStyle}`}
            {...rest}
          />

          {RightIcone && <RightIcone />}
        </div>
      </div>
    </div>
  );
}
