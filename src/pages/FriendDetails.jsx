import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function FriendDetails() {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  // 🔥 Fetch friend
  useEffect(() => {
    fetch("/friends.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(f => f.id === parseInt(id));
        setFriend(found);
      });
  }, [id]);

  if (!friend) {
    return 
      <div className="flex flex-col items-center gap-3 py-10">
        <div className="w-10 h-10 border-4 border-[#244d3f] border-t-transparent rounded-full animate-spin">
        </div>
        <p className="text-gray-500">Loading data...</p>
      </div>
  }

  // 🔥 Handle Action (Call/Text/Video)
  const handleAction = (type) => {
    const entry = {
      type,
      name: friend.name,
      date: new Date().toLocaleDateString()
    };

    const old = JSON.parse(localStorage.getItem("timeline")) || [];
    const updated = [entry, ...old];

    localStorage.setItem("timeline", JSON.stringify(updated));

    // 🔥 React Toastify
    toast.success(`${type} with ${friend.name}`);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-3 gap-6">

        {/* 🔹 LEFT SIDE */}
        <div className="bg-white p-6 rounded-xl shadow text-center">

          <img
            src={friend.picture}
            alt={friend.name}
            className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
          />

          <h2 className="text-xl font-bold">{friend.name}</h2>

          <span className={`px-3 py-1 rounded-full text-sm ${statusColor(friend.status)}`}>
            {friend.status}
          </span>

          <div className="mt-3">
            {friend.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-[#cbfadb] text-[#244d3f] px-2 py-1 mr-2 rounded-2xl"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-500 mt-4">{friend.bio}</p>
          <p className="text-sm text-gray-400">{friend.email}</p>

          {/* Buttons */}
          <div className="mt-6 space-y-2">
            <button className="w-full border border-[#e9e9e9] p-2 rounded hover:bg-gray-300 cursor-pointer">
              <i className="fa-regular fa-alarm-clock"></i> Snooze 2 Weeks
            </button>

            <button className="w-full border border-[#e9e9e9] p-2 rounded hover:bg-gray-300 cursor-pointer">
              <i className="fa-regular fa-file-zipper"></i> Archive
            </button>

            <button className="w-full border border-[#e9e9e9] p-2 rounded text-red-500 hover:bg-gray-300 cursor-pointer">
              <i className="fa-regular fa-trash-can"></i> Delete
            </button>
          </div>
        </div>

        {/* 🔹 RIGHT SIDE */}
        <div className="md:col-span-2 space-y-6">

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-10 text-center">

            <div className="p-4 bg-white rounded-xl shadow-sm flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-[#244d3f]">
                {friend.days_since_contact}
              </p>
              <h4 className="text-sm text-gray-500 mt-1">Days Since Contact</h4>
            </div>

            <div className="p-4 bg-white rounded-xl shadow-sm flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-[#244d3f]">
                {friend.goal}
              </p>
              <h4 className="text-sm text-gray-500 mt-1">Goal (Days)</h4>
            </div>

            <div className="p-4 bg-white rounded-xl shadow-sm flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-[#244d3f]">
                {friend.next_due_date}
              </p>
              <h4 className="text-sm text-gray-500 mt-1">Next Due</h4>
            </div>

          </div>

          {/* Relationship Goal */}
          <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center mt-10">
            <div>
              <p className="font-bold text-[#244d3f] mb-2">
                Relationship Goal
              </p>
              <p className="text-gray-500">
                Connect every{" "}
                <span className="font-bold text-black">
                  {friend.goal} days
                </span>
              </p>
            </div>

            <button className="border rounded border-gray-200 px-2 hover:shadow-md transition duration-200 text-sm text-blue-500">
              Edit
            </button>
          </div>

          {/* Quick Check-in */}
          <div className="bg-white p-4 rounded-xl shadow mt-10">
            <h3 className="font-bold mb-3 text-[#244d3f]">
              Quick Check-in
            </h3>

            <div className="flex gap-4">

              <button
                onClick={() => handleAction("Call")}
                className="flex-1 border border-[#e9e9e9] hover:text-red-500 p-3 rounded text-[18px] hover:shadow-lg hover:-translate-y-1 transition duration-200"
              >
                <i className="fa-solid fa-phone"></i> Call
              </button>

              <button
                onClick={() => handleAction("Text")}
                className="flex-1 border border-[#e9e9e9] p-6 rounded text-[18px] hover:text-blue-500 hover:shadow-lg hover:-translate-y-1 transition duration-200"
              >
                <i className="fa-solid fa-comments"></i> Text
              </button>

              <button
                onClick={() => handleAction("Video")}
                className="flex-1 border border-[#e9e9e9] p-3 rounded text-[18px] hover:text-yellow-700 hover:shadow-lg hover:-translate-y-1 transition duration-200"
              >
                <i className="fa-solid fa-video"></i> Video
              </button>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

// 🔥 Status Color
function statusColor(status) {
  if (status === "overdue") return "bg-[#ef4444] text-white";
  if (status === "almost due") return "bg-[#efad44] text-white";
  return "bg-[#244d3f] text-white";
}