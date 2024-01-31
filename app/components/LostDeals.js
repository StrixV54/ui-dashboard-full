export default function LostDeals() {
  return (
    <div className="min-h-[260px] min-w-[410px] rounded-2xl flex flex-1 gap-2 p-6 flex-col bg-white">
      <div className="mb-4 font-[600] text-xl">Lost deals</div>
      <div className="text-[48px] font-[500] tracking-[-2px]">4%</div>
      <div className="text-sm font-normal tracking-[-0.3px]">
        You closed 96 out of 100 deals
      </div>
      <div className="mt-[38px] flex gap-1 text-[#734A00] text-sm font-normal">
        All deals <img alt="logo" className="w-4" src="rightarrow.svg" />
      </div>
    </div>
  );
}
