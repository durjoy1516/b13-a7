import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Timeline() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [dropdown, setDropdown] = useState(false);

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

       {/* 🔹 Classic Dropdown Filter */}
        <div className="relative mb-6 w-60">
          
          {/* Button */}
          <button
            onClick={() => setDropdown(!dropdown)}
            className="w-full px-4 py-1 border rounded bg-white shadow-sm flex justify-between items-center text-[#64748b]"
          >
            <span>{filter}</span>
            <span className={`text-xs transition ${dropdown ? "rotate-180" : ""}`}>
            <i class="fa-solid fa-chevron-down"></i>
            </span>
          </button>
          
          {/* Dropdown Menu */}
          {dropdown && (
            <div className="absolute left-10 w-50 bg-white border rounded-md shadow-md z-10 border-gray-300">
            
              {["All", "Call", "Text", "Video"].map((type) => (
                <div
                  key={type}
                  onClick={() => {
                    setFilter(type);
                    setDropdown(false);
                  }}
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100
                    ${filter === type ? "bg-gray-100 font-bold" : ""}
                  `}
                >
                  {type}
                </div>
              ))}
        
            </div>
          )}
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
                {/* <p className="text-sm text-gray-400">
                  {item.date}
                </p> */}

              </div>
            ))
          )}
        </div>

      </div>

      {/* <Footer /> */}
    </>
  );
}