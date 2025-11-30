import { useContext, useEffect, useState } from "react";
import { ToastContext } from "../context/ToastContext";

interface HackathonData {
  title: string;
  tags: string[];
  deadline: string;
  participants: number;
  description: string;
  difficulty: string;
  prize: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (data: HackathonData) => void;
}

export default function CreateHackathonModal({ isOpen, onClose, onCreate }: ModalProps) {
  const { showToast } = useContext(ToastContext);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [deadline, setDeadline] = useState("");
  const [tags, setTags] = useState("");
  const [prize, setPrize] = useState("");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !desc || !deadline || !tags) {
      showToast("Please fill all required fields!", "error");
      return;
    }

    const hackathon: HackathonData = {
      title,
      description: desc,
      difficulty,
      deadline,
      prize: prize || "TBA",
      tags: tags.split(",").map((t) => t.trim()),
      participants: Math.floor(Math.random() * 60) + 20, // random for now
    };

    onCreate(hackathon);
    showToast("Hackathon Created Successfully!", "success");
    onClose();

    // Reset fields
    setTitle("");
    setDesc("");
    setDeadline("");
    setDifficulty("Beginner");
    setTags("");
    setPrize("");
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center px-4 z-[999]">
      <div className="bg-white dark:bg-gray-800 w-full max-w-lg p-6 rounded-2xl shadow-2xl animate-fadeIn">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold dark:text-white">Create Hackathon</h2>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-xl"
          >
            ✖
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">

          <div>
            <label className="font-medium dark:text-gray-200">Title *</label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="AI for Healthcare"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="font-medium dark:text-gray-200">Description *</label>
            <textarea
              className="w-full mt-1 px-4 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              rows={3}
              placeholder="Explain the challenge..."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          <div>
            <label className="font-medium dark:text-gray-200">Tags (comma separated) *</label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="AI, ML, FinTech"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>

          <div>
            <label className="font-medium dark:text-gray-200">Difficulty *</label>
            <select
              className="w-full mt-1 px-4 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          <div>
            <label className="font-medium dark:text-gray-200">Deadline *</label>
            <input
              type="date"
              className="w-full mt-1 px-4 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>

          <div>
            <label className="font-medium dark:text-gray-200">Prize</label>
            <input
              type="text"
              placeholder="TBA or $500 + Swags"
              className="w-full mt-1 px-4 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={prize}
              onChange={(e) => setPrize(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#6b46ff] to-[#06b6d4] text-white font-semibold shadow-md hover:opacity-90"
          >
            Create Hackathon
          </button>
        </form>

      </div>
    </div>
  );
}
