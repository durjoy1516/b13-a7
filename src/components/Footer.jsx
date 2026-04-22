// components/Footer.jsx
export default function Footer() {
  return (
    <div className="bg-[#244d3f] text-white text-center pt-15 mt-10">
      
      <h1 className="text-3xl font-bold mb-3">
        KeenKeeper
      </h1>

      <p className="text-gray-300 mb-6">
        Your personal shield of meaningful connections.
      </p>

      {/* Social icons placeholder */}
      <div className="flex justify-center gap-4 mb-6">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
          <i className="fa-brands fa-instagram"></i>
        </div>

        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
          <i className="fa-brands fa-facebook"></i>
        </div>

        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
          <i className="fa-brands fa-x-twitter"></i>
        </div>
      </div>
      {/* <div className="m-10 border border-gray-400"></div> */}
      <div className="flex justify-between mx-10 border-t border-gray-400 py-10">
        <p className="text-gray-400 text-sm">
        © 2025 KeenKeeper. All rights reserved.
        </p>
        <div className="text-gray-400 text-sm flex justify-between gap-4">
          <p>Privacy Policy </p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>

      
      </div>
      
    </div>
  );
}