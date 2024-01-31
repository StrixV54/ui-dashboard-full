import { listOfCustomers } from "../utils/data";

export default function Customers() {
  return (
    <div className="min-h-[400px] min-w-[556px] py-[24px] flex-1 rounded-2xl bg-white gap-4 flex justify-between flex-col">
      <div className="flex w-full justify-between px-6 items-center">
        <div className="text-xl font-semibold">Customers</div>
        <div className="flex gap-1">
          <div className="text-sm font-normal text-[#454545]">
            Sort by <span className="font-medium">Newest</span>
          </div>
          <img alt="logo" className="w-4" src="down.svg" />
        </div>
      </div>
      <ul className="flex-1 px-2">
        {listOfCustomers.map((item, idx) => (
          <li
            key={idx}
            className={`p-4 flex gap-3 flex-row items-center rounded-2xl ${
              item.isSelected ? "bg-[#FFF7E8]" : ""
            }`}
          >
            <div className={`h-8 w-8 rounded-full ${item.icon}`} />
            <div className="flex flex-1 flex-col gap-1">
              <div className="text-sm font-medium">{item.name}</div>
              <div className="text-[#454545] text-xs font-normal">
                {item.company}
              </div>
            </div>
            {item.isSelected && (
              <div className="flex gap-3 w-fit items-center">
                <img alt="icon" className="w-9 p-[10px] ml-1" src="msg.svg" />
                <img alt="icon" className="w-9 p-[10px] ml-1" src="star.svg" />
                <img alt="icon" className="w-9 p-[10px]" src="pen.svg" />
                <div className="mx-3 h-[24px] w-[1px] bg-[#734A00] opacity-20" />
                <img alt="icon" className="w-9 p-[10px]" src="msg.svg" />
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="flex gap-1 px-6 text-[#734A00] text-sm font-normal">
        All customers <img alt="logo" className="w-4" src="rightarrow.svg" />
      </div>
    </div>
  );
}
