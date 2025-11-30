import { useState, useContext } from "react";
import { ToastContext } from "../context/ToastContext";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const { showToast } = useContext(ToastContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !pass) {
      showToast("Please fill all fields", "error");
      return;
    }

    showToast("Account Created Successfully 🎉", "success");

    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border dark:border-gray-700">

        <h1 className="text-3xl font-bold text-center dark:text-white">Create Account</h1>
        <p className="text-center text-gray-500 dark:text-gray-300 mb-6">
          Join our community of builders 👨‍💻🚀
        </p>

        <form onSubmit={handleSignup} className="space-y-5">

          <div>
            <label className="font-medium dark:text-gray-300">Full Name</label>
            <input
              type="text"
              className="w-full mt-2 px-4 py-3 rounded-xl border dark:bg-gray-700 
                         dark:border-gray-600 dark:text-white outline-none focus:ring-2 
                         focus:ring-purple-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="font-medium dark:text-gray-300">Email</label>
            <input
              type="email"
              className="w-full mt-2 px-4 py-3 rounded-xl border dark:bg-gray-700 
                         dark:border-gray-600 dark:text-white outline-none focus:ring-2 
                         focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="font-medium dark:text-gray-300">Password</label>
            <input
              type="password"
              className="w-full mt-2 px-4 py-3 rounded-xl border dark:bg-gray-700 
                         dark:border-gray-600 dark:text-white outline-none focus:ring-2 
                         focus:ring-purple-500"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#6b46ff] 
                       to-[#06b6d4] text-white font-semibold shadow hover:opacity-90 transition"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 dark:text-purple-400 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
