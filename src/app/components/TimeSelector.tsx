import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TimerIcon,
} from "@radix-ui/react-icons";

const TimeSelector = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-md mt-2">
      <TimerIcon className="text-black w-6 h-6" />
      <span className="text-sm text-gray-500">
        In 4 hours <span className="text-blue-500">~5:30 PM</span>
      </span>
      <div className="flex items-center justify-center gap-2">
        <ChevronLeftIcon className="text-sm w-12 h-12  bg-slate-100 p-2 rounded-md text-black" />
        <ChevronRightIcon className="text-sm w-12 h-12  bg-slate-100 p-2 rounded-md text-black" />
      </div>
    </div>
  );
};

export default TimeSelector;
