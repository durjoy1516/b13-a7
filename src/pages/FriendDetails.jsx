import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

export default function FriendDetails() {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

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
    return <p className="text-center mt-20">Loading...</p>;
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

    setToastMsg(`${type} with ${friend.name}`);
    setShowToast(true);

    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <>
      {/* <Navbar /> */}

      <div className=" border max-w-7xl mx-auto p-6 grid md:grid-cols-3 gap-6">

        {/* 🔹 LEFT SIDE */}
        <div className=" border bg-white p-6 rounded-xl shadow text-center">

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
              <span key={i} className="text-xs bg-green-100 px-2 py-1 mr-2 rounded-2xl">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-500 mt-4">{friend.bio}</p>
          <p className="text-sm text-gray-400">{friend.email}</p>

          {/* Buttons */}
          <div className="mt-6 space-y-2">
            <button className="w-full border border-[#e9e9e9] p-2 rounded"><i class="fa-regular fa-alarm-clock"></i> Snooze 2 Weeks</button>
            <button className="w-full border border-[#e9e9e9] p-2 rounded"><i class="fa-regular fa-file-zipper"></i> Archive</button>
            <button className="w-full border border-[#e9e9e9] p-2 rounded text-red-500"><i class="fa-regular fa-trash-can"></i> Delete</button>
          </div>
        </div>

        {/* 🔹 RIGHT SIDE */}
        <div className="border md:col-span-2 space-y-6">

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            <Stat title="Days Since Contact" value={friend.days_since_contact} />
            <Stat title="Goal (Days)" value={friend.goal} />
            <Stat title="Next Due" value={friend.next_due_date} />
          </div>

          {/* Relationship Goal */}
          <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center mt-10">
            <div>
              <p className="font-semibold">Relationship Goal</p>
              <p className="text-gray-500">
                Connect every {friend.goal} days
              </p>
            </div>
            <button className="text-sm text-blue-500">Edit</button>
          </div>

          {/* Quick Check-in */}
          <div className="bg-white p-4 rounded-xl shadow mt-10">
            <h3 className="font-semibold mb-3">Quick Check-in</h3>

            <div className="flex gap-4">
              <button onClick={() => handleAction("Call")} className="flex-1 border border-[#e9e9e9] p-3 rounded text-[18px]">
                <i class="fa-solid fa-phone"></i> Call
              </button>
              <button onClick={() => handleAction("Text")} className="flex-1 border border-[#e9e9e9] p-6 rounded text-[18px]">
                <i class="fa-solid fa-comments"></i> Text
              </button>
              <button onClick={() => handleAction("Video")} className="flex-1 border border-[#e9e9e9] p-3 rounded text-[18px]">
                <i class="fa-solid fa-video"></i> Video
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 🔥 Toast */}
      {showToast && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow">
          {toastMsg}
        </div>
      )}

      {/* <Footer /> */}
    </>
  );
}

// 🔥 Stat Card
function Stat({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow text-center">
      <p className="text-lg font-bold">{value}</p>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  );
}

// 🔥 Status Color
function statusColor(status) {
  if (status === "overdue") return "bg-[#ef4444] text-white";
  if (status === "almost due") return "bg-[#efad44] text-white";
  return "bg-[#244d3f] text-white";
}