// components/Footer.jsx
export default function Footer() {
  return (
    <div className="bg-green-900 text-white text-center py-10 mt-10">
      
      <h1 className="text-3xl font-bold mb-3">
        KeenKeeper
      </h1>

      <p className="text-gray-300 mb-6">
        Your personal shield of meaningful connections.
      </p>

      {/* Social icons placeholder */}
      <div className="flex justify-center gap-4 mb-6">
        <div className="w-8 h-8 bg-white rounded-full"></div>
        <div className="w-8 h-8 bg-white rounded-full"></div>
        <div className="w-8 h-8 bg-white rounded-full"></div>
      </div>

      <p className="text-gray-400 text-sm">
        © 2025 KeenKeeper. All rights reserved.
      </p>
    </div>
  );
}