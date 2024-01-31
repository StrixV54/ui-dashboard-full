import { listOfDeals } from "../utils/data";

export default function NewDeal() {
  return (
    <div className="min-h-[260px] max-w-[900px] flex-1 w-[450px] rounded-2xl flex gap-2 p-6 flex-col bg-white">
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
  );
}
