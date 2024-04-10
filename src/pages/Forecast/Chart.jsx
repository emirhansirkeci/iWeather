import "./Chart.css";
import { XAxis, YAxis, Tooltip, Legend, AreaChart, Area, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import { toDayName } from "../../utils/date";
import CustomTooltip from "../../components/CustomTooltip";
import Button from "../../components/Button";

export default function Chart({ day }) {
  const [data, setData] = useState([]);
  const [dayName, setDayName] = useState();
  const [chart, setChart] = useState("temp");
  const [visibleButtons, setVisibleButtons] = useState({
    rain: false,
    snow: false,
  });

  useEffect(() => {
    const chartData = [];
    // Reset visible buttons
    setVisibleButtons({ rain: false, snow: false });

    // Always show temperature data when the day changes
    setChart("temp");

    day.hour.forEach((hourly) => {
      const chanceOfRain = hourly.chance_of_rain;
      const chanceOfSnow = hourly.chance_of_snow;

      chartData.push({
        name: hourly.time.split(" ")[1],
        temp: hourly.temp_c,
        windSpeed: hourly.wind_kph,
        condition: hourly.condition.text,
        chanceOfRain,
        chanceOfSnow,
      });

      // If the chance of rain or the chance of snow is greater than 0% at any point, then set the relevant property to true
      if (chanceOfRain > 0) {
        setVisibleButtons({ visibleButtons, rain: true });
      }

      if (chanceOfSnow > 0) {
        setVisibleButtons({ visibleButtons, snow: true });
      }
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
        <Button variant="outline" onClick={() => setChart("temp")}>
          Temperature
        </Button>
        <Button variant="outline" onClick={() => setChart("windSpeed")}>
          Wind Speed
        </Button>
        {visibleButtons.rain && (
          <Button variant="outline" onClick={() => setChart("chanceOfRain")}>
            Chance of Rain
          </Button>
        )}
        {visibleButtons.snow && (
          <Button variant="outline" onClick={() => setChart("chanceOfSnow")}>
            Chance of Snow
          </Button>
        )}
      </div>
    </div>
  );
}
