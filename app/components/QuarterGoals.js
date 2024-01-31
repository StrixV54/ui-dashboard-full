import { SemiCircleProgress } from "react-semicircle-progressbar";

export default function QuarterGoals() {
  return (
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
  );
}
