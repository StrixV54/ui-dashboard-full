import { SemiCircleProgress } from "react-semicircle-progressbar";
import Graph from "./components/Graph";
import { chatProfiles, listOfCustomers, listOfDeals } from "./utils/data";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="flex h-screen flex-row bg-[#F6F6F3] py-4 pl-4 overflow-hidden">
      <Sidebar />
      {/* Main Dashboard */}
      <div className="flex-1 flex flex-wrap ml-4 pr-4 gap-4 h-full w-full overflow-y-scroll">
        {/*  Revenue board */}
        <div className="h-[260px] min-w-[410px] rounded-2xl flex flex-1 gap-2 p-6 flex-col bg-white">
          <div className="mb-4 font-[600] text-xl">Revenues</div>
          <div className="text-[48px] font-[500] gap-2 tracking-[-2px] flex">
            15%
            <img alt="logo" className="w-8" src="upward.svg" />
          </div>
          <div className="text-sm font-normal tracking-[-0.3px]">
            Increase compared to last week
          </div>
          <div className="mt-[38px] flex gap-1 text-[#734A00] text-sm font-normal">
            Revenues report
            <img alt="logo" className="w-4" src="rightarrow.svg" />
          </div>
        </div>
        {/* lost deals board */}
        <div className="h-[260px] min-w-[410px] rounded-2xl flex flex-1 gap-2 p-6 flex-col bg-white">
          <div className="mb-4 font-[600] text-xl">Lost deals</div>
          <div className="text-[48px] font-[500] tracking-[-2px]">4%</div>
          <div className="text-sm font-normal tracking-[-0.3px]">
            You closed 96 out of 100 deals
          </div>
          <div className="mt-[38px] flex gap-1 text-[#734A00] text-sm font-normal">
            All deals <img alt="logo" className="w-4" src="rightarrow.svg" />
          </div>
        </div>
        {/* quartar goals */}
        <div className="relative min-h-[260px] min-w-[260px] flex-1 max-w-[400px] rounded-2xl flex gap-2 p-6 flex-col bg-white items-center justify-between">
          <div className="mb-4 font-semibold text-xl">Quarter goal</div>
          <div className="absolute top-[40px] h-[102px] w-[210px]">
            <SemiCircleProgress
              diameter
              percentage={84}
              size={{
                width: 210,
                height: 200,
              }}
              strokeWidth={10}
              strokeColor="#FFCD71"
              bgStrokeColor="#FFF7E8"
            />
          </div>
          <div className="mt-[38px] flex gap-1 text-[#734A00] text-sm font-normal">
            All goals <img alt="logo" className="w-4" src="rightarrow.svg" />
          </div>
        </div>
        {/* customers */}
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
                    <img
                      alt="icon"
                      className="w-9 p-[10px] ml-1"
                      src="msg.svg"
                    />
                    <img
                      alt="icon"
                      className="w-9 p-[10px] ml-1"
                      src="star.svg"
                    />
                    <img alt="icon" className="w-9 p-[10px]" src="pen.svg" />
                    <div className="mx-3 h-[24px] w-[1px] bg-[#734A00] opacity-20" />
                    <img alt="icon" className="w-9 p-[10px]" src="msg.svg" />
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="flex gap-1 px-6 text-[#734A00] text-sm font-normal">
            All customers{" "}
            <img alt="logo" className="w-4" src="rightarrow.svg" />
          </div>
        </div>
        {/* growth and top month/top year/buyer board */}
        <div className="flex-1 h-fit flex flex-wrap gap-4 w-full">
          <Graph />
          <div className="min-h-[128px] max-h-[260px] w-[170px] rounded-2xl flex gap-4 p-4 flex-col bg-white">
            <div className="font-semibold text-base text-[#7D7D7D]">
              Top month
            </div>
            <div
              className="flex-1 justify-end items-start flex flex-col
            "
            >
              <div className="text-[#734A00] text-xl font-semibold">
                November
              </div>
              <div className="text-[#FFA500] text-base font-medium">2019</div>
            </div>
          </div>
          <div className="min-h-[128px] max-h-[260px] w-[170px] rounded-2xl flex gap-4 p-4 flex-col bg-white">
            <div className="font-semibold text-base text-[#7D7D7D]">
              Top year
            </div>
            <div className="flex-1 justify-end items-start flex flex-col">
              <div className="text-[#734A00] text-xl font-semibold">2023</div>
              <div className="text-[#454545] text-sm font-normal">
                96K sold so far
              </div>
            </div>
          </div>
          <div className="min-h-[128px] max-h-[260px] w-[170px] flex-1 rounded-2xl flex gap-4 p-4 flex-col bg-white">
            <div className="font-semibold text-base text-[#7D7D7D]">
              Top buyer
            </div>
            <div className="flex-1 justify-end items-start flex flex-col gap-2">
              <div className="h-8 w-8 bg-[url('/avatar03.png')] bg-[50%] bg-cover rounded-full" />
              <div>
                <div className="text-[#131313] text-xs font-medium mb-1">
                  Maggie Johnson
                </div>
                <div className="text-[#454545] text-[10px] font-normal">
                  Oasis Organic Inc.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* chats */}
        <div className="min-h-[260px] w-[320px] rounded-2xl flex gap-2 p-6 flex-col bg-white">
          <div className="font-[600] text-xl">Chats</div>
          <div className="text-sm mb-[16px] font-normal tracking-[-0.3px]">
            2 unread messages
          </div>
          <div className="flex gap-2">
            {chatProfiles.map((item, idx) => (
              <div
                key={idx}
                className={`relative h-[56px] w-[56px] items-center flex justify-center rounded-2xl ${
                  item.isUnread ? "bg-[#FFF7E8]" : ""
                }`}
              >
                <div
                  className={`h-8 w-8 bg-[50%] bg-cover rounded-full ${item.icon}`}
                />
                {item.isUnread && (
                  <div className="absolute z-10 top-[14px] right-[14px] bg-[#EB5050] h-2 w-2 border-2 rounded-full border-[#FFF7E8]" />
                )}
              </div>
            ))}
          </div>
          <div className="flex-1"></div>
        </div>
        {/* top states */}
        <div className="min-h-[260px] w-[320px] rounded-2xl flex gap-2 p-6 flex-col bg-white">
          <div className="font-[600] text-xl mb-[16px]">Top states</div>
          <div className="px-2 py-[6px] flex w-[272px] yellow-shade-bg items-center justify-between gap-2 rounded mt-2">
            <div className="text-sm font-semibold uppercase">NY</div>
            <div className="text-[10px] font-medium">120K</div>
          </div>
          <div className="px-2 py-[6px] flex w-[229px] yellow-shade-bg items-center justify-between gap-2 rounded mt-2">
            <div className="text-sm font-semibold uppercase">MA</div>
            <div className="text-[10px] font-medium">80K</div>
          </div>
          <div className="px-2 py-[6px] flex w-[207px] yellow-shade-bg items-center justify-between gap-2 rounded mt-2">
            <div className="text-sm font-semibold uppercase">NH</div>
            <div className="text-[10px] font-medium">70K</div>
          </div>
          <div className="px-2 py-[6px] flex w-[150px] yellow-shade-bg items-center justify-between gap-2 rounded mt-2">
            <div className="text-sm font-semibold uppercase">OR</div>
            <div className="text-[10px] font-medium">50K</div>
          </div>
        </div>
        {/* new deals */}
        <div className="min-h-[260px] flex-1 w-[450px] rounded-2xl flex gap-2 p-6 flex-col bg-white">
          <div className="font-[600] text-xl mb-[16px]">New deals</div>
          <div className="h-fit mt-2 gap-2 flex flex-wrap overflow-scroll">
            {listOfDeals.map((item, idx) => (
              <div
                key={idx}
                className="w-fit h-fit pl-3 pr-4 py-3 flex items-center gap-2 justify-center rounded-2xl bg-[#FFF7E8]"
              >
                <img alt="add" className="w-6" src="add.svg" />
                <div className="text-[#734A00] text-sm font-normal">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
