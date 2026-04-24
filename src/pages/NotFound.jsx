import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    
    <div>
        <div className="mx-40 mt-10 p-20 border border-gray-300 rounded-4xl flex flex-col items-center justify-center bg-gray-50">

          {/* Alert Symbol */}
          <span className=" text-green-950"><i class="fa-solid fa-face-sad-tear"></i></span>

          {/* Big 404 */}
          <h1 className="text-[#244d3f] text-[140px] font-extrabold leading-none">
            4<span className="animate-pulse text-red-600">0</span>4
          </h1>

          {/* NOT FOUND text */}
          <h2 className="text-2xl font-semibold text-gray-700 tracking-[0.3em]">
            NOT Found
          </h2>

          {/* 10-word paragraph */}
          <p className="text-gray-500 mt-4 text-center max-w-md">
            The page you are looking for does not exist here
          </p>

          {/* Home button */}
          <Link to="/">
            <button className=" mt-6 px-6 py-3 bg-[#244d3f] text-white rounded-xl hover:bg-green-900 transition">
              Go to Home  <i class="fa-solid fa-person-walking-arrow-right"></i>
            </button>
          </Link>

        </div>
    </div>
  );
} 