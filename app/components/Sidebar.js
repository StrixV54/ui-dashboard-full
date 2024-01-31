import { sidebarOptions } from "../utils/data";

export default function Sidebar() {
  return (
    <div className="w-[280px] max-h-[890px] min-h-[680px] bg-white rounded-2xl flex flex-col">
      <div className="px-[24px] py-[16px] flex items-center justify-start gap-[6px]">
        <img
          alt="logo"
          className="h-[20px] mix-blend-multiply bg-white"
          src="orange.png"
        />
        <img alt="logo" className="w-[121px]" src="orangefarm.svg" />
      </div>
      <div className="mt-[8px] pb-20px px-[16px] w-[240px] h-[40px] flex gap-2 rounded-[20px] border border-[#F1F1F1] items-center self-center">
        <img alt="icon" src="search.svg" className="h-4 w-4 " />
        <input
          className="w-full text-sm font-[400] text-[#7D7D7D] outline-none"
          placeholder="Search"
        />
      </div>
      <ul className="flex-1 flex-col gap-2 mt-2">
        {sidebarOptions.map((item, idx) => (
          <li
            key={idx}
            className="flex gap-[12px] py-[12px] px-[20px] w-full text-sm font-[400] items-center"
          >
            <img alt="icon" src={item.imageSrc} className="h-4 w-4" />
            <span className="flex-1">{item.label}</span>
            {item.isExpandable && (
              <img alt="icon" src="down.svg" className="h-4 w-4" />
            )}
          </li>
        ))}
      </ul>
      <div className="px-2 pt-2 pb-6 flex flex-col">
        <div className="px-5 flex gap-3 mb-3">
          <div className="h-8 w-8 bg-[url('/avatar01.png')] bg-[-9px_-15px] bg-[length:145%_218%] rounded-full" />
          <div className="flex flex-col">
            <div id="name" className="font-[500] text-sm">
              Gustavo Xavier
            </div>
            <span className="bg-[#FFCD71] rounded-3xl px-[6px] w-fit font-[400] text-[10px]">
              Admin
            </span>
          </div>
        </div>
        <div className="px-5 py-3 flex gap-3 text-sm items-start">
          <img alt="icon" src="settings.svg" className="h-4 w-4 my-auto" />
          <span>Settings</span>
        </div>
        <div className="py-3 px-5 flex gap-3 text-sm text-[#B01212]">
          <img alt="icon" src="logout.svg" className="h-4 w-4 my-auto" />
          Log out
        </div>
      </div>
    </div>
  );
}
