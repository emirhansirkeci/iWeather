import { useEffect, useState } from "react";
import { XAxis, YAxis, Tooltip, Legend, AreaChart, Area, ResponsiveContainer } from "recharts";
import { toDayName } from "../../utils/date";
import CustomTooltip from "../../components/CustomTooltip";
import "./Chart.css";

export default function Chart({ day }) {
  const [data, setData] = useState([]);
  const [dayName, setDayName] = useState();
  const [chart, setChart] = useState("temp");

  // [TODO]: aşağıdaki day.hour.forEach kısmında hourly.value > 0 ? true : false
  const [buttons, setButtons] = useState({
    rain: false,
    snow: false,
    wind: false,
  });

  useEffect(() => {
    const chartData = [];

    day.hour.forEach((hourly) => {
      const parsedTime = hourly.time.split(" ")[1];

      // [TODO]: Condition (clear, partly cloudy etc) yazdır
      chartData.push({
        name: parsedTime,
        temp: hourly.temp_c,
        chanceOfRain: hourly.chance_of_rain,
        chanceOfSnow: hourly.chance_of_snow,
        windSpeed: hourly.wind_kph,
        condition: hourly.condition.text.trim(),
      });
    });

    setData(chartData);
    setDayName(toDayName(day.date));
  }, [day]);

  return (
    <div className="area-chart">
      <ResponsiveContainer width={"100%"} height={200}>
        <AreaChart
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          padding={{ top: 0, right: 0, bottom: 0, left: 0 }}
          style={{ color: "var(--gray-500)" }}
        >
          <Area
            type="monotone"
            stroke="var(--blue-light)"
            fill="var(--gray-500)"
            animationDuration={250}
            dataKey={chart}
          />
          <XAxis className="text-xs" dataKey="name" minTickGap={15} />
          <YAxis className="text-xs" width={30} />
          <Legend
            verticalAlign="top"
            wrapperStyle={{ color: "var(--blue-light)" }}
            payload={[{ value: dayName, type: "line", color: "var(--blue-light)" }]}
          />
          <Tooltip content={<CustomTooltip chart={chart} />} />
        </AreaChart>
      </ResponsiveContainer>

      <div className="chart-buttons">
        <button className="text-xs" onClick={() => setChart("chanceOfRain")}>
          Chance of Rain
        </button>
        <button className="text-xs" onClick={() => setChart("chanceOfSnow")}>
          Chance of Snow
        </button>
        <button className="text-xs" onClick={() => setChart("windSpeed")}>
          Wind Speed
        </button>
        <button className="text-xs" onClick={() => setChart("temp")}>
          Temperature
        </button>
      </div>
    </div>
  );
}
