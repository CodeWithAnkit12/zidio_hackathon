import React from "react";

type Props = {
  query: string;
  onQueryChange: (q: string) => void;

  selectedTags: string[];
  onToggleTag: (tag: string) => void;

  difficulty: string;
  onDifficultyChange: (d: string) => void;

  sortBy: string;
  onSortChange: (v: string) => void;

  availableTags: string[];
};

export default function HackathonFilterBar({
  query,
  onQueryChange,
  selectedTags,
  onToggleTag,
  difficulty,
  onDifficultyChange,
  sortBy,
  onSortChange,
  availableTags,
}: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-6 transition-all">
      
      {/* 🔍 SEARCH + SORT ROW */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search hackathons..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="
            w-full md:w-1/2 px-4 py-3 
            rounded-xl border dark:border-gray-600 
            dark:bg-gray-700 dark:text-white
            outline-none focus:ring-2 focus:ring-purple-500
            transition
          "
        />

        {/* SORT */}
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="
            px-4 py-3 rounded-xl border 
            dark:bg-gray-700 dark:border-gray-600 dark:text-white
            outline-none
          "
        >
          <option value="featured">Featured</option>
          <option value="deadline">Deadline (Soonest)</option>
          <option value="participants">Participants (High → Low)</option>
        </select>
      </div>

      {/* TAGS + DIFFICULTY ROW */}
      <div className="mt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

        {/* TAGS */}
        <div className="flex flex-wrap gap-2">
          {availableTags.map((tag) => {
            const active = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => onToggleTag(tag)}
                className={`
                  px-3 py-1 text-sm rounded-full border transition
                  ${
                    active
                      ? "bg-gradient-to-r from-[#6b46ff] to-[#06b6d4] text-white border-transparent shadow"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }
                `}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* DIFFICULTY FILTER */}
        <select
          value={difficulty}
          onChange={(e) => onDifficultyChange(e.target.value)}
          className="
            px-4 py-3 rounded-xl border
            dark:bg-gray-700 dark:border-gray-600 dark:text-white
            outline-none
          "
        >
          <option value="">All Difficulty Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

      </div>
    </div>
  );
}
