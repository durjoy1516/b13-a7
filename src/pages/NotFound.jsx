import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50">

      {/* Big 404 */}
      <h1 className="text-green-600 text-[140px] font-extrabold leading-none">
        404
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
        <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
          Go to Home
        </button>
      </Link>

    </div>
  );
} 