import AOS from "aos";
import { useEffect } from "react";

const leaderboardData = [
  {
    name: "Aman Verma",
    username: "@aman.codes",
    score: 980,
    rank: 1,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Sneha Gupta",
    username: "@sneha.dev",
    score: 920,
    rank: 2,
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Rohit Kumar",
    username: "@rohit.js",
    score: 890,
    rank: 3,
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Priya Singh",
    username: "@priya.tech",
    score: 850,
    rank: 4,
    avatar: "https://i.pravatar.cc/150?img=30",
  },
  {
    name: "Aditya Sharma",
    username: "@adi.stack",
    score: 830,
    rank: 5,
    avatar: "https://i.pravatar.cc/150?img=40",
  },
];

export default function Leaderboard() {

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1
        className="text-3xl font-bold mb-6 dark:text-white"
        data-aos="fade-up"
      >
        🏆 Leaderboard
      </h1>

      <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 shadow p-6 rounded-2xl">
        <div className="space-y-5">
          {leaderboardData.map((user, index) => (
            <div
              key={user.rank}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="
                bg-gray-50 dark:bg-gray-700
                p-5 rounded-2xl shadow 
                hover:shadow-xl hover:-translate-y-1 
                transition-all duration-300 
                flex items-center justify-between
              "
            >
              {/* Left Section */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={user.avatar}
                    className="w-16 h-16 rounded-full shadow border-2 border-gray-200 dark:border-gray-500"
                  />

                  {/* Rank Badge */}
                  <span
                    className={`
                      absolute -bottom-2 left-1/2 -translate-x-1/2 
                      text-xs px-3 py-1 rounded-full text-white font-medium
                      ${
                        user.rank === 1
                          ? "bg-yellow-500"
                          : user.rank === 2
                          ? "bg-gray-400"
                          : user.rank === 3
                          ? "bg-orange-500"
                          : "bg-purple-600"
                      }
                    `}
                  >
                    #{user.rank}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold dark:text-white">
                    {user.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 text-sm">
                    {user.username}
                  </p>
                </div>
              </div>

              {/* Score Section */}
              <div className="text-right w-40">
                <p className="text-lg font-semibold dark:text-white">
                  {user.score} pts
                </p>

                <div className="w-full bg-gray-300 dark:bg-gray-600 h-2 rounded-full mt-2">
                  <div
                    className="
                      h-2 rounded-full
                      bg-gradient-to-r from-[#6b46ff] to-[#06b6d4]
                    "
                    style={{ width: `${(user.score / 1000) * 100}%` }}
                  ></div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
