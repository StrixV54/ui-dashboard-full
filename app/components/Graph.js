"use client";

import { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";

const timePeriodList = [
  "daily",
  "weekday",
  "monthly",
  "quaterly",
  "halfyearly",
  "yearly",
];

const linearPatternArray = (diff = 5) => {
  let arr = [];
  let num = 0;
  for (let i = 0; i < 100 / diff; i++) {
    arr.push(num);
    num += diff;
  }
  return arr;
};

export default function Graph() {
  const [timeframe, setTimeFrame] = useState(
    timePeriodList[timePeriodList.length - 1]
  );
  const [isLoading, setIsLoading] = useState(true);
  const [graphData, setGraphData] = useState(null);

  const getData = async (timeframe) => {
    const res = await fetch(
      `http://localhost:3000/api?timeperiod=${timeframe}`,
      { cache: "force-cache" }
    );
    const result = await res.json();
    return result;
  };

  useEffect(() => {
    getData(timeframe)
      .then((res) => {
        let data = res?.data;
        data = data.map((item) => ({
          x: item?.label,
          y: Math.round(item?.average),
        }));
        const filteredData = [{ id: "profit", data }];
        setGraphData(filteredData);
        console.log(filteredData);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [timeframe]);

  return (
    <div className="min-h-[260px] max-h-[360px] min-w-[540px] rounded-2xl flex p-6 flex-col bg-white flex-1">
      <div className="font-[600] text-xl mb-[12px] flex w-full items-center justify-between">
        <div>Growth</div>
        <details className="dropdown">
          <summary className="m-1 btn btn-sm gap-1 capitalize bg-transparent border-none shadow-none">
            {timeframe}
            <img alt="icon" src="down.svg" className="h-4 w-4" />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[10] bg-base-100 rounded-box w-52">
            {timePeriodList.map((item, idx) => (
              <li
                key={idx}
                onClick={() => setTimeFrame(item)}
                className="capitalize"
              >
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </details>
      </div>
      <div className="flex-1 mt-2 flex flex-wrap overflow-scroll h-full">
        {!isLoading && (
          <ResponsiveLine
            data={graphData}
            margin={{ top: 10, right: 20, bottom: 30, left: 30 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: 0,
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{}}
            axisLeft={{
              tickValues: linearPatternArray(),
            }}
            gridYValues={linearPatternArray()}
            colors={{ scheme: "dark2" }}
            enablePoints={false}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            enableArea={true}
            areaOpacity={0.1}
            useMesh={true}
            legends={[]}
          />
        )}
      </div>
    </div>
  );
}
