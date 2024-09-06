export default function SearchInput({
  hide = false,
  LeftIcone,
  placeholder,
  RightIcone,
  inputContainerStyle,
  containerStyle,
  ...rest
}: SearchInputProps) {
  return (
    <div className={`flex-1 ${hide ? "hidden" : "block"}  md:block`}>
      <div className={`flex    mx-2  flex-1 items-center ${containerStyle}`}>
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
