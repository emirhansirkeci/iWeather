import { useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { toDayName } from "../../utils/date";
import CustomTooltip from "../../components/CustomTooltip";
import "./Chart.css";

export default function Chart({ day }) {
  const [data, setData] = useState([]);
  const [dayName, setDayName] = useState();

  useEffect(() => {
    const chartData = [];

    day.hour.forEach((hourly) => {
      const parsedTime = hourly.time.split(" ")[1];

      chartData.push({
        name: parsedTime,
        temp: hourly.temp_c,
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
            dataKey="temp"
            stroke="var(--blue-light)"
            fillOpacity={1}
            fill="var(--gray-500)"
            animationDuration={250}
          />
          <XAxis className="text-xs" dataKey="name" minTickGap={15} />
          <YAxis className="text-xs" width={30} />
          <Legend
            verticalAlign="top"
            wrapperStyle={{ color: "var(--blue-light)" }}
            payload={[{ value: dayName, type: "line", color: "var(--blue-light)" }]}
          />
          <Tooltip content={<CustomTooltip />} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
