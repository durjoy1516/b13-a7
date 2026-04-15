// components/Banner.jsx
export default function Banner() {
  return (
    <div className="text-center pt-12 bg-gray-50">
      
      <h1 className="text-4xl font-bold mb-3">
        Friends to keep close in your life
      </h1>

      <p className="text-gray-500 mb-6">
        Your personal shield of meaningful connections.
        Reconnect, track, and nurture relationships.
      </p>

      <button className="bg-green-700 text-white px-6 py-2 rounded-lg">
        + Add a Friend
      </button>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        <div className="p-4 bg-white shadow rounded-xl">
          <h2 className="text-2xl font-bold">10</h2>
          <p>Total Friends</p>
        </div>

        <div className="p-4 bg-white shadow rounded-xl">
          <h2 className="text-2xl font-bold">3</h2>
          <p>On Track</p>
        </div>

        <div className="p-4 bg-white shadow rounded-xl">
          <h2 className="text-2xl font-bold">6</h2>
          <p>Need Attention</p>
        </div>

        <div className="p-4 bg-white shadow rounded-xl">
          <h2 className="text-2xl font-bold">12</h2>
          <p>Interactions</p>
        </div>
      </div>
    </div>
  );
}