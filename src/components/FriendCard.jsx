// components/FriendCard.jsx
import { Link } from "react-router-dom";

export default function FriendCard({ friend }) {
  return (
    <Link to={`/friend/${friend.id}`}>
      <div className="p-4 bg-white shadow rounded-xl text-center">

        {/* Image */}
        <div className="w-20 h-20 mx-auto rounded-full bg-gray-300 mb-3"></div>

        {/* Name */}
        <h2 className="font-semibold text-lg">{friend.name}</h2>

        {/* Days */}
        <p className="text-gray-500 text-sm">
          {friend.days_since_contact} days ago
        </p>

        {/* Tags */}
        <div className="flex justify-center gap-2 mt-2">
          {friend.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status */}
        <p className={`mt-3 text-sm px-3 py-1 rounded-full inline-block 
          ${getStatusColor(friend.status)}`}>
          {friend.status}
        </p>
      </div>
    </Link>
  );
}

function getStatusColor(status) {
  if (status === "overdue") return "bg-red-100 text-red-600";
  if (status === "almost due") return "bg-yellow-100 text-yellow-600";
  return "bg-green-100 text-green-600";
}