import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import InputField from "./InputField";

const SearchBar = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-3xl flex flex-col gap-4">
      <InputField icon={<MagnifyingGlassIcon />} placeholder="From where?" />
      <InputField icon={<MagnifyingGlassIcon />} placeholder="To where?" />
    </div>
  );
};

export default SearchBar;
