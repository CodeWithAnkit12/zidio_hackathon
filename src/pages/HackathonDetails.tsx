import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import type { Hackathon } from "../data/hackathons";

export default function HackathonDetails() {
  const { id } = useParams(); // dynamic slug
  const navigate = useNavigate();

  const [hackathon, setHackathon] = useState<Hackathon | null>(null);

  // Load from localStorage
  useEffect(() => {
    AOS.init({ duration: 800 });

    const saved = localStorage.getItem("hackathons");
    if (!saved) return;

    try {
      const list: Hackathon[] = JSON.parse(saved);

      // The slug is generated using the index
      const index = Number(id);
      if (!isNaN(index) && list[index]) {
        setHackathon(list[index]);
      }
    } catch (err) {
      console.error("JSON error", err);
    }
  }, [id]);

  if (!hackathon) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center dark:text-white">
        <h1 className="text-2xl font-semibold">Hackathon not found!</h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-xl"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 rounded-lg border dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        ← Back
      </button>

      {/* Title */}
      <h1
        className="text-4xl font-bold dark:text-white"
        data-aos="fade-up"
      >
        {hackathon.title}
      </h1>

      {/* Tags */}
      <div className="flex gap-2 mt-4 flex-wrap" data-aos="fade-up">
        {hackathon.tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Metadata */}
      <div
        className="mt-6 grid md:grid-cols-2 gap-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow border dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400">Deadline</p>
          <h3 className="text-xl font-semibold dark:text-white">{hackathon.deadline}</h3>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow border dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400">Difficulty</p>
          <h3 className="text-xl font-semibold dark:text-white">{hackathon.difficulty}</h3>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow border dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400">Prize</p>
          <h3 className="text-xl font-semibold dark:text-white">{hackathon.prize}</h3>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow border dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400">Participants</p>
          <h3 className="text-xl font-semibold dark:text-white">{hackathon.participants}</h3>
        </div>
      </div>

      {/* Description */}
      <div
        className="mt-10 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow border dark:border-gray-700"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-2xl font-semibold dark:text-white">About this Hackathon</h2>
        <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
          {hackathon.description}
        </p>
      </div>

      {/* CTA */}
      <div className="mt-10" data-aos="zoom-in">
        <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#6b46ff] to-[#06b6d4] text-white text-lg font-semibold shadow-lg hover:opacity-90 transition">
          Join Hackathon 🚀
        </button>
      </div>
    </div>
  );
}
