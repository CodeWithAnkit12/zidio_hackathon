import Hero from "../components/Hero";
import HackathonCard from "../components/HackathonCard";
import StatsDashboard from "../components/StatsDashboard";
import CreateHackathonModal from "../components/CreateHackathonModal";
import HackathonFilterBar from "../components/HackathonFilterBar";

import { useEffect, useMemo, useState } from "react";

import { hackathons as defaultHackathons } from "../data/hackathons";
import type { Hackathon } from "../data/hackathons";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // -----------------------------------------
  // 1) Load from localStorage or use default
  // -----------------------------------------
  const loadHackathons = () => {
    const saved = localStorage.getItem("hackathons");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {
        console.error("Invalid JSON in localStorage", err);
      }
    }
    return defaultHackathons;
  };

  const [list, setList] = useState<Hackathon[]>(loadHackathons);

  // -----------------------------------------
  // 2) Save to localStorage whenever list changes
  // -----------------------------------------
  useEffect(() => {
    localStorage.setItem("hackathons", JSON.stringify(list));
  }, [list]);

  // -----------------------------------------
  // Filter States
  // -----------------------------------------
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // Compute available tags
  const availableTags = useMemo(() => {
    const s = new Set<string>();
    list.forEach((h) => h.tags.forEach((t) => s.add(t)));
    return Array.from(s);
  }, [list]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // -----------------------------------------
  // Filtering + Sorting Logic
  // -----------------------------------------
  const filtered = useMemo(() => {
    let out = [...list];

    if (query.trim()) {
      const q = query.toLowerCase();
      out = out.filter(
        (h) =>
          h.title.toLowerCase().includes(q) ||
          h.description?.toLowerCase().includes(q)
      );
    }

    if (selectedTags.length) {
      out = out.filter((h) =>
        selectedTags.every((t) => h.tags.includes(t))
      );
    }

    if (difficulty) {
      out = out.filter((h) => h.difficulty === difficulty);
    }

    if (sortBy === "deadline") {
      out.sort(
        (a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
      );
    } else if (sortBy === "participants") {
      out.sort((a, b) => b.participants - a.participants);
    }

    return out;
  }, [list, query, selectedTags, difficulty, sortBy]);

  // -----------------------------------------
  // Create Hackathon Handler
  // -----------------------------------------
  const handleCreate = (data: Hackathon) => {
    setList((prev) => [data, ...prev]);
    setIsModalOpen(false);
  };

  const stats = [
    { title: "Active Hackathons", value: list.length },
    { title: "Participants", value: "12.5k" },
    { title: "Partner Companies", value: 18 },
    { title: "Ongoing Mentors", value: 24 },
  ];

  return (
    <>
      <Hero />

      {/* FILTER BAR + CREATE BUTTON */}
      <div className="max-w-7xl mx-auto px-6 mt-10">

        <div className="flex items-start justify-between gap-4">

          <div className="flex-1">
            <HackathonFilterBar
              query={query}
              onQueryChange={setQuery}
              selectedTags={selectedTags}
              onToggleTag={toggleTag}
              difficulty={difficulty}
              onDifficultyChange={setDifficulty}
              sortBy={sortBy}
              onSortChange={setSortBy}
              availableTags={availableTags}
            />
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#6b46ff] to-[#06b6d4] text-white font-semibold shadow-md hover:opacity-90 transition h-fit"
          >
            + Create Hackathon
          </button>

        </div>
      </div>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-10 bg-white dark:bg-gray-800 rounded-xl transition-colors mt-8">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">Quick Stats</h2>
        <StatsDashboard items={stats} />
      </section>

      {/* Hackathon Cards */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">Featured Hackathons</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {filtered.length ? (
  filtered.map((c, i) => (
    <HackathonCard key={i} {...c} index={i} />
  ))
) : (
            <div className="col-span-3 p-6 bg-white dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-300 border dark:border-gray-600">
              No hackathons match your filters.
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <CreateHackathonModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreate}
      />
    </>
  );
}
