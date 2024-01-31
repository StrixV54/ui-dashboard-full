import { chatProfiles } from "../utils/data";

export default function Chats() {
  return (
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
  );
}
