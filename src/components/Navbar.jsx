import { NavLink } from "react-router-dom";

export default function Navbar() {
  const baseClass =
    "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200";

  const activeClass = "bg-[#244d3f] text-white shadow-sm";

  const inactiveClass = "text-gray-600 hover:bg-gray-100";

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-100 px-12 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#244d3f]"><span className="text-[#1f2937]">Keen</span>Keeper</h1>

        <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-2xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            <i class="fa-regular fa-house"></i> Home
          </NavLink>

          <NavLink
            to="/timeline"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            <i class="fa-regular fa-clock"></i> Timeline
          </NavLink>

          <NavLink
            to="/stats"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            <i class="fa-solid fa-chart-line"></i> Stats
          </NavLink>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
}
