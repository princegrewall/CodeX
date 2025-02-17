import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gray-800 shadow-md">
        <div className="flex items-center gap-2">
          <FaCode className="text-2xl text-blue-400" />
          <h1 className="text-xl font-bold">CodeX</h1>
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center flex-1 px-4">
        <h2 className="text-4xl font-bold md:text-5xl">Welcome to CodeX</h2>
        <p className="text-lg text-gray-300 mt-4 max-w-xl">
          The ultimate coding platform to test your skills, compete with peers, and enhance your programming knowledge.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <Link to="/challenges" className="bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-600 transition">
            Get Started
          </Link>
          <Link to="/about" className="border border-blue-500 px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}
