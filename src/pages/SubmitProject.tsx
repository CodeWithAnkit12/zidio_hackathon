import { useContext, useState } from "react";
import { ToastContext } from "../context/ToastContext";

export default function SubmitProject() {
  const { showToast } = useContext(ToastContext);

  const [title, setTitle] = useState("");
  const [github, setGithub] = useState("");
  const [demo, setDemo] = useState("");
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState("");
  const [team, setTeam] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImages(files);

    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setPreviews(previewUrls);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !github || !desc) {
      showToast("Please fill all required fields!", "error");
      return;
    }

    showToast("Project Submitted Successfully!", "success");

    // Clear form
    setTitle("");
    setGithub("");
    setDemo("");
    setDesc("");
    setTags("");
    setTeam("");
    setImages([]);
    setPreviews([]);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-semibold mb-6 dark:text-white">
        🚀 Submit Your Project
      </h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Title */}
          <div>
            <label className="font-medium dark:text-gray-200">Project Title *</label>
            <input
              type="text"
              className="w-full mt-2 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
              placeholder="e.g. AI Fraud Detection System"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* GitHub Repo */}
          <div>
            <label className="font-medium dark:text-gray-200">GitHub Repository *</label>
            <input
              type="url"
              className="w-full mt-2 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
              placeholder="https://github.com/username/project"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </div>

          {/* Live Demo Link */}
          <div>
            <label className="font-medium dark:text-gray-200">Live Demo (optional)</label>
            <input
              type="url"
              className="w-full mt-2 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
              placeholder="https://your-project-demo.com"
              value={demo}
              onChange={(e) => setDemo(e.target.value)}
            />
          </div>

          {/* Description */}
          <div>
            <label className="font-medium dark:text-gray-200">Project Description *</label>
            <textarea
              className="w-full mt-2 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
              rows={4}
              placeholder="Describe your project..."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          {/* Tags */}
          <div>
            <label className="font-medium dark:text-gray-200">Tags (comma separated)</label>
            <input
              type="text"
              className="w-full mt-2 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
              placeholder="AI, ML, Blockchain"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>

          {/* Team Members */}
          <div>
            <label className="font-medium dark:text-gray-200">Team Members</label>
            <input
              type="text"
              className="w-full mt-2 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
              placeholder="Ankit, Rahul, Sanya"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="font-medium dark:text-gray-200">Upload Images</label>
            <input
              type="file"
              multiple
              className="block mt-2 dark:text-white"
              onChange={handleImageUpload}
            />

            {/* Image Previews */}
            {previews.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mt-4">
                {previews.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="h-28 w-full object-cover rounded-lg border"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 mt-4 rounded-xl bg-gradient-to-r from-[#6b46ff] to-[#06b6d4] text-white font-semibold shadow-md hover:opacity-90"
          >
            Submit Project
          </button>

        </form>
      </div>
    </div>
  );
}
