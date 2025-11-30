import { useState } from "react";

export default function Profile() {
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Ankit Kumar",
    username: "ankit.dev",
    bio: "Full-stack developer passionate about AI, React, and building impactful products.",
    skills: ["React", "TypeScript", "Node.js", "AI/ML", "TailwindCSS"],
    avatar: "https://i.pravatar.cc/200",
  });

  const handleChange = (field: string, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      {/* HEADER */}
      <h1 className="text-4xl font-bold dark:text-white">My Profile</h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2">
        Manage your personal information, skills and achievements.
      </p>

      {/* CARD */}
      <div className="mt-10 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow border dark:border-gray-700">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          
          {/* Avatar */}
          <img
            src={profile.avatar}
            className="w-32 h-32 rounded-full shadow-lg ring-4 ring-purple-400/20"
          />

          {/* USER INFO */}
          <div className="flex-1">
            {editing ? (
              <input
                type="text"
                value={profile.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="text-3xl font-bold dark:text-white bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-xl w-full"
              />
            ) : (
              <h2 className="text-3xl font-bold dark:text-white">{profile.name}</h2>
            )}

            <p className="text-gray-500 dark:text-gray-400">@{profile.username}</p>

            {editing ? (
              <textarea
                value={profile.bio}
                onChange={(e) => handleChange("bio", e.target.value)}
                className="mt-3 w-full px-3 py-2 rounded-xl dark:bg-gray-700 dark:text-white border dark:border-gray-600"
                rows={3}
              />
            ) : (
              <p className="mt-3 text-gray-600 dark:text-gray-300">{profile.bio}</p>
            )}

            {/* BUTTONS */}
            <div className="mt-4 flex gap-4">
              <button
                onClick={() => setEditing(!editing)}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#6b46ff] to-[#06b6d4] text-white shadow hover:opacity-90 transition"
              >
                {editing ? "Save Changes" : "Edit Profile"}
              </button>
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold dark:text-white">Skills</h3>

          <div className="flex flex-wrap gap-3 mt-4">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 
                           text-gray-800 dark:text-gray-200 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* BADGES */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold dark:text-white">Achievements</h3>

          <div className="flex gap-4 mt-4 flex-wrap">
            {[
              { label: "Top 10%", color: "bg-yellow-500" },
              { label: "5 Hackathons", color: "bg-purple-500" },
              { label: "Verified", color: "bg-blue-500" },
            ].map((badge) => (
              <div
                key={badge.label}
                className={`px-4 py-2 rounded-xl text-white font-semibold shadow ${badge.color}`}
              >
                {badge.label}
              </div>
            ))}
          </div>
        </div>

        {/* JOINED HACKATHONS */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold dark:text-white">Joined Hackathons</h3>

          <div className="mt-4 space-y-4">
            {[
              "AI FinTech Challenge",
              "Web3 Security Marathon",
              "HealthTech ML Sprint",
            ].map((item) => (
              <div
                key={item}
                className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl flex justify-between items-center"
              >
                <p className="font-medium dark:text-white">{item}</p>
                <span className="px-3 py-1 rounded-full text-xs bg-purple-500 text-white">
                  Participated
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
