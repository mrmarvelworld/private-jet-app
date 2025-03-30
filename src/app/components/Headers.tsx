import { BellIcon, PersonIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-transparent p-4">
      <div className="w-12 h-12 rounded-full p-1 bg-slate-50 flex items-center justify-center">
        <PersonIcon className="w-6 h-6 text-gray-500" />
      </div>
      <div className="w-12 h-12 rounded-full p-1 bg-slate-50 flex items-center justify-center">
        <BellIcon className="w-6 h-6 text-gray-500" />
      </div>
    </header>
  );
};

export default Header;
