declare interface SearchInputProps {
  LeftIcone?: React.ComponentType;
  placeholder: string;
  RightIcone?: React.ComponentType;
  inputContainerStyle?: string;
  containerStyle?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
