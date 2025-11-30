export interface Hackathon {
  title: string;
  tags: string[];
  deadline: string;
  participants: number;
  description: string;
  difficulty: string;
  prize: string;
}

export const hackathons: Hackathon[] = [
  {
    title: "AI for FinTech",
    tags: ["AI", "FinTech"],
    deadline: "Dec 20, 2025",
    participants: 120,
    description:
      "Build an AI-driven fraud detection system for modern fintech applications.",
    difficulty: "Intermediate",
    prize: "$1200 + Internship Opportunity",
  },
  {
    title: "Healthcare ML",
    tags: ["ML", "Healthcare"],
    deadline: "Jan 10, 2026",
    participants: 92,
    description:
      "Develop ML models that predict patient outcomes and optimize workflows.",
    difficulty: "Beginner",
    prize: "$600 + Certificate",
  },
  {
    title: "Web3 Security",
    tags: ["Blockchain", "Security"],
    deadline: "Feb 02, 2026",
    participants: 60,
    description:
      "Build a Web3 vulnerability scanner to detect smart contract flaws.",
    difficulty: "Advanced",
    prize: "$2000 + Job Offer",
  },
];
