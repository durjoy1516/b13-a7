import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Timeline() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");

  // 🔥 Load from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline")) || [];
    setData(stored);
  }, []);

  // 🔥 Filter logic
  const filtered =
    filter === "All"
      ? data
      : data.filter((item) => item.type === filter);

  return (
    <>
      {/* <Navbar /> */}

      <div className="max-w-5xl mx-auto p-6">

        {/* 🔹 Heading */}
        <h1 className="text-3xl font-bold mb-6">
          Timeline
        </h1>

        {/* 🔹 Filter Bar */}
        <div className="flex gap-3 mb-6">
          {["All", "Call", "Text", "Video"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded border 
                ${filter === type ? "bg-green-600 text-white" : "bg-white"}
              `}
            >
              {type}
            </button>
          ))}
        </div>

        {/* 🔹 Timeline List */}
        <div className="space-y-4">
          {filtered.length === 0 ? (
            <p className="text-gray-500">No interactions yet.</p>
          ) : (
            filtered.map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
              >

                {/* LEFT */}
                <div className="flex items-center gap-4">

                  {/* Icon */}
                  <div className="text-xl">
                    {item.type === "Call" && "📞"}
                    {item.type === "Text" && "💬"}
                    {item.type === "Video" && "🎥"}
                  </div>

                  {/* Text */}
                  <div>
                    <p className="font-semibold">
                      {item.type} with {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.date}
                    </p>
                  </div>
                </div>

                {/* RIGHT DATE */}
                <p className="text-sm text-gray-400">
                  {item.date}
                </p>

              </div>
            ))
          )}
        </div>

      </div>

      {/* <Footer /> */}
    </>
  );
}