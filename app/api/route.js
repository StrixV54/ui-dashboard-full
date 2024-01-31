import * as csv from "csvtojson";

// const DATASET_PATH = `${__dirname}/dataset.csv`;
const DATASET_PATH = `${process.cwd()}/app/api/dataset.csv`;

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const timeperiod = searchParams.get("timeperiod");
    // check if given time frequency is correct to process
    const isCorrectTimePeriod = [
      "daily",
      "weekday",
      "monthly",
      "quaterly",
      "halfyearly",
      "yearly",
    ].includes(timeperiod);
    if (!isCorrectTimePeriod)
      return new Response(
        `Please enter correct timeperiod to process data, choose [daily, weekday, monthly, quaterly, halfyearly, yearly], like, api?timeperiod=yearly`,
        {
          status: 400,
        }
      );

    const DATASET = await csv.default().fromFile(DATASET_PATH);

    let mapper = {
      daily: (date) => {
        let month = `${date.getMonth()}`;
        if (month.length < 2) month = `0${month}`;
        let day = `${date.getDate()}`;
        if (day.length < 2) day = `0${day}`;
        return `${day}${month}${date.getFullYear()}`;
      },
      weekday: (date) => {
        return [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ][date.getDay()];
      },
      monthly: (date) => {
        let month = `${date.getMonth()}`;
        if (month.length < 2) month = `0${month}`;
        return `${month}${date.getFullYear()}`;
      },
      quaterly: (date) => {
        let quarter = Math.ceil(date.getMonth() / 3);
        return `Q${quarter}${date.getFullYear()}`;
      },
      halfyearly: (date) => {
        let h = Math.ceil(date.getMonth() / 2);
        return `H${h}${date.getFullYear()}`;
      },
      yearly: (date) => {
        return `${date.getFullYear()}`;
      },
    };
    let downsampled_map = {};
    
    for (let i = 0; i < DATASET.length; i++) {
      let date = new Date(DATASET[i]["Timestamp"]);
      let profit_percentage = parseFloat(DATASET[i]["Profit Percentage"]);
      let label = mapper[timeperiod](date);
      if (!downsampled_map[label]) {
        downsampled_map[label] = {
          label,
          max: profit_percentage,
          min: profit_percentage,
          average: profit_percentage,
          count: 1,
          start_time: date,
          end_time: date,
        };
      } else {
        downsampled_map[label].max = Math.max(
          downsampled_map[label].max,
          profit_percentage
        );
        downsampled_map[label].min = Math.min(
          downsampled_map[label].min,
          profit_percentage
        );
        downsampled_map[label].count += 1;
        downsampled_map[label].average += profit_percentage;
        if (date < downsampled_map[label].start_time)
          downsampled_map[label].start_time = date;
        if (date > downsampled_map[label].end_time)
          downsampled_map[label].end_time = date;
      }
    }
    let result = Object.values(downsampled_map)
      .sort((a, b) => a.start_time.getTime() - b.start_time.getTime())
      .map((x) => {
        x.average /= x.count;
        return x;
      });

    return Response.json({
      message: "Successfully processed the data.",
      data: result,
    });
  } catch (error) {
    return new Response(`Something went wrong : ${error?.message}`, {
      status: 500,
    });
  }
}
