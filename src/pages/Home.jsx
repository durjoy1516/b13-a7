import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import FriendCard from "../components/FriendCard";

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 FETCH HERE
  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      });
  }, []);

  // ⏳ Loading State (IMPORTANT for marks)
  if (loading) {
    return (
     <div className="flex flex-col items-center gap-3 py-10">
  <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
  <p className="text-gray-500">Loading data...</p>
</div>
    );
  }

  return (
    <>
      {/* <Navbar /> */}
      <div className=" px-40">
        <Banner/>

        <div className=" mt-10">
            <h2 className="text-xl font-semibold mb-6">
          Your Friends
            </h2>

        {/* Friends Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {friends.map((friend) => (
            <FriendCard key={friend.   id} friend={friend} />
                ))}
            </div>
        </div>
      </div>
    </>
  );
}