import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const COLORS = ["#37a163", "#7e35e1", "#244d3f"];

export default function Stats() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline")) || [];
    setData(stored);
  }, []);

  const call = data.filter((i) => i.type === "Call").length;
  const text = data.filter((i) => i.type === "Text").length;
  const video = data.filter((i) => i.type === "Video").length;

  const chartData = [
    { name: "Text", value: text },
    { name: "Call", value: call },
    { name: "Video", value: video },
  ];

  return (
    <>
      {/* <Navbar /> */}

      <main className="min-h-screen bg-gray-50 pt-10 pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-8">
            Friendship Analytics
          </h1>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
            <h2 className="text-lg md:text-xl font-semibold text-[#244d3f] mb-8">
              By Interaction Type
            </h2>

            <div className="flex flex-col items-center justify-center">
              <PieChart width={320} height={320}>
                <Pie
                  data={chartData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={0}
                  cornerRadius={2}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>

                <Tooltip />
                <Legend verticalAlign="bottom" iconType="circle" />

                <text
                  x="50%"
                  y="48%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-[#1f2937] text-4xl font-extrabold"
                >
                  {data.length}
                </text>
                <text
                  x="50%"
                  y="56%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-gray-500 text-sm font-bold"
                >
                  Total
                </text>
              </PieChart>
            </div>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </>
  );
}
