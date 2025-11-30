interface StatItem {
  title: string;
  value: string | number;
}

interface StatsDashboardProps {
  items: StatItem[];
}

export default function StatsDashboard({ items }: StatsDashboardProps) {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {items.map((stat, i) => (
        <div
          key={stat.title}
          data-aos="fade-up"
          data-aos-delay={i * 150}           // staggered delay
          className="
            p-6 
            bg-white dark:bg-gray-800 
            border border-gray-100 dark:border-gray-700
            rounded-2xl shadow 
            hover:shadow-xl 
            transition
          "
        >
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {stat.title}
          </p>

          <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}
