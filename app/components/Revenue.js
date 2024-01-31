export default function Revenue() {
  return (
    <div className="min-h-[260px] min-w-[410px] rounded-2xl flex flex-1 gap-2 p-6 flex-col bg-white">
      <div className="mb-4 font-[600] text-xl">Revenues</div>
      <div className="text-[48px] font-[500] gap-2 tracking-[-2px] flex">
        15%
        <img alt="logo" className="w-8" src="upward.svg" />
      </div>
      <div className="text-sm font-normal tracking-[-0.3px]">
        Increase compared to last week
      </div>
      <div className="mt-[38px] align-bottom flex gap-1 text-[#734A00] text-sm font-normal">
        Revenues report
        <img alt="logo" className="w-4" src="rightarrow.svg" />
      </div>
    </div>
  );
}
