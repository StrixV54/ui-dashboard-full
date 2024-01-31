import Graph from "./Graph";

export default function GrowthBoard() {
  return (
    <div className="flex-1 h-auto flex flex-wrap gap-4 w-full">
      <Graph />
      <div className="min-h-[128px] max-h-[260px] w-[170px] rounded-2xl flex gap-4 p-4 flex-col bg-white">
        <div className="font-semibold text-base text-[#7D7D7D]">Top month</div>
        <div className="flex-1 justify-end items-start flex flex-col">
          <div className="text-[#734A00] text-xl font-semibold">November</div>
          <div className="text-[#FFA500] text-base font-medium">2019</div>
        </div>
      </div>
      <div className="min-h-[128px] max-h-[260px] w-[170px] rounded-2xl flex gap-4 p-4 flex-col bg-white">
        <div className="font-semibold text-base text-[#7D7D7D]">Top year</div>
        <div className="flex-1 justify-end items-start flex flex-col">
          <div className="text-[#734A00] text-xl font-semibold">2023</div>
          <div className="text-[#454545] text-sm font-normal">
            96K sold so far
          </div>
        </div>
      </div>
      <div className="min-h-[128px] max-h-[260px] w-[170px] flex-1 rounded-2xl flex gap-4 p-4 flex-col bg-white">
        <div className="font-semibold text-base text-[#7D7D7D]">Top buyer</div>
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
  );
}
