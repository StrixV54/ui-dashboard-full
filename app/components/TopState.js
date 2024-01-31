export default function TopState() {
  return (
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
  );
}
