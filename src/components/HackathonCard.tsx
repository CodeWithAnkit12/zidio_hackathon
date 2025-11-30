import { useNavigate } from "react-router-dom";

interface HackathonCardProps {
  title: string;
  tags: string[];
  deadline: string;
  participants: number;
  index: number; // IMPORTANT
}

export default function HackathonCard({
  title,
  tags,
  deadline,
  participants,
  index,
}: HackathonCardProps) {

  const navigate = useNavigate();

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={Math.random() * 300}
      className="
        p-6 
        bg-white dark:bg-gray-800 
        rounded-2xl 
        shadow border border-gray-100 dark:border-gray-700 
        hover:shadow-xl hover:-translate-y-1 
        transition-all duration-300
      "
    >
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>

      {/* Tags */}
      <div className="flex gap-2 mt-3 flex-wrap">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="
              px-3 py-1 
              text-xs font-medium 
              bg-gray-100 dark:bg-gray-700 
              text-gray-700 dark:text-gray-300 
              rounded-full
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Deadline */}
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        🗓 Deadline: <span className="font-medium">{deadline}</span>
      </p>

      {/* Participants */}
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        👥 Participants: <span className="font-medium">{participants}</span>
      </p>

      {/* CTA Button */}
      <button
        onClick={() => navigate(`/hackathon/${index}`)}
        className="
          mt-6 w-full 
          py-2 rounded-xl 
          bg-gradient-to-r from-[#6b46ff] to-[#06b6d4]
          text-white font-semibold 
          shadow-md hover:opacity-90 
          transition
        "
      >
        View Details
      </button>
    </div>
  );
}
