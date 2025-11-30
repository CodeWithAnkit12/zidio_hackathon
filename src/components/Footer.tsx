export default function Footer() {
  return (
<footer className="bg-gray-900 text-gray-300 dark:bg-black dark:text-gray-200 py-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-bold text-lg">Zidio Hackathon</h2>
          <p className="text-sm text-gray-600 mt-2">Build. Showcase. Get hired.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>How it works</li>
            <li>Pricing</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm text-gray-600">hello@zidio.com</p>

          <p className="mt-4 text-sm text-gray-500">
            © {new Date().getFullYear()} Zidio
          </p>
        </div>
      </div>
    </footer>
  );
}
