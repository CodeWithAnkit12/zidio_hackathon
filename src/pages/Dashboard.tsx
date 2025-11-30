import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const weeklyData = [
  { name: "Mon", participants: 120 },
  { name: "Tue", participants: 180 },
  { name: "Wed", participants: 220 },
  { name: "Thu", participants: 300 },
  { name: "Fri", participants: 260 },
  { name: "Sat", participants: 340 },
  { name: "Sun", participants: 420 },
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold dark:text-white">Dashboard Overview</h1>
      <p className="text-gray-600 dark:text-gray-300 mt-1">
        Track performance and users’ activity.
      </p>

      {/* STATS CARDS */}
      <div className="grid md:grid-cols-4 gap-6 mt-10">
        {[
          { title: "Active Hackathons", value: 6 },
          { title: "Registrations Today", value: 54 },
          { title: "Total Participants", value: "12.5k" },
          { title: "Companies Joined", value: 18 },
        ].map((item) => (
          <div
            key={item.title}
            className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow hover:shadow-xl transition"
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm">{item.title}</p>
            <h2 className="text-3xl font-bold mt-2 dark:text-white">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* LINE CHART */}
      <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow border dark:border-gray-700">
        <h2 className="text-xl font-semibold dark:text-white mb-4">
          Weekly Participants Growth
        </h2>
        <div className="w-full h-[300px]">
          <ResponsiveContainer>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
              <XAxis dataKey="name" stroke="#888" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="participants"
                stroke="#6b46ff"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* RECENT SUBMISSIONS */}
      <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow border dark:border-gray-700">
        <h2 className="text-xl font-semibold dark:text-white mb-4">Recent Submissions</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b dark:border-gray-700 text-left">
              <th className="py-3 text-gray-700 dark:text-gray-200">Team</th>
              <th className="py-3 text-gray-700 dark:text-gray-200">Project</th>
              <th className="py-3 text-gray-700 dark:text-gray-200">Category</th>
              <th className="py-3 text-gray-700 dark:text-gray-200">Status</th>
            </tr>
          </thead>

          <tbody>
            {[
              {
                team: "Alpha Coders",
                project: "AI Loan Predictor",
                category: "FinTech",
                status: "Approved",
              },
              {
                team: "MediCare",
                project: "Diagnosis App",
                category: "Healthcare",
                status: "Pending",
              },
              {
                team: "BlockChainers",
                project: "Secure Wallet",
                category: "Web3",
                status: "Rejected",
              },
            ].map((item) => (
              <tr key={item.team} className="border-b dark:border-gray-700">
                <td className="py-3 dark:text-gray-200">{item.team}</td>
                <td className="py-3 dark:text-gray-200">{item.project}</td>
                <td className="py-3 dark:text-gray-200">{item.category}</td>
                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      item.status === "Approved"
                        ? "bg-green-500"
                        : item.status === "Pending"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* UPCOMING HACKATHONS */}
      <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow border dark:border-gray-700">
        <h2 className="text-xl font-semibold dark:text-white mb-4">Upcoming Hackathons</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "AI in Banking",
              date: "Jan 12, 2026",
              level: "Intermediate",
            },
            {
              title: "Web3 Security Challenge",
              date: "Jan 20, 2026",
              level: "Advanced",
            },
            {
              title: "Healthcare ML Hackfest",
              date: "Feb 02, 2026",
              level: "Beginner",
            },
          ].map((hack) => (
            <div
              key={hack.title}
              className="p-5 rounded-xl bg-gradient-to-r from-[#6b46ff] to-[#06b6d4] text-white shadow-lg hover:scale-[1.02] transition"
            >
              <h3 className="font-semibold text-lg">{hack.title}</h3>
              <p className="text-sm mt-1">{hack.date}</p>
              <p className="text-xs mt-3 opacity-90">Level: {hack.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
