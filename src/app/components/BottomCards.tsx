import React from "react";
import { AiFillGift } from "react-icons/ai";
import { FaInternetExplorer } from "react-icons/fa6";
import { MdContactSupport, MdMoney } from "react-icons/md";

const BottomCards = () => {
  return (
    <div className="mt-6">
      {/* Scrollable Cards */}
      <div className="overflow-x-auto  whitespace-nowrap scrollbar-hide mt-2">
        <div className="flex gap-4 px-4">
          <BottomCard
            title="Do you have a problem?"
            icon={<MdContactSupport className="w-6 h-6 text-white shadow-md" />}
            bgColor="bg-green-600"
          />
          <BottomCard
            title="Refer & Earn"
            icon={<MdMoney className="w-6 h-6 text-white shadow-md" />}
            bgColor="bg-purple-600"
          />
          <BottomCard
            title="Follow"
            icon={
              <FaInternetExplorer className="w-6 h-6 text-white shadow-md" />
            }
            bgColor="bg-orange-600"
          />
        </div>
      </div>
    </div>
  );
};

export default BottomCards;

interface BottomCardProps {
  title: string;
  icon: React.ReactNode;
  bgColor: string;
  fullWidth?: boolean;
}

export const BottomCard: React.FC<BottomCardProps> = ({
  title,
  icon,
  bgColor,
  fullWidth = false,
}) => {
  return (
    <div
      className={`p-4 rounded-lg flex justify-between items-center ${bgColor} ${
        fullWidth ? "w-full" : "flex-shrink-0 w-[80%]"
      }`}
    >
      <span className="text-lg text-white">{title}</span>
      <span>{icon}</span>
    </div>
  );
};
