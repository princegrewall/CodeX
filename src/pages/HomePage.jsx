import { useState } from "react";
import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
import { FaCode } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gray-800 shadow-md">
        <div className="flex items-center gap-2">
          <FaCode className="text-2xl text-blue-400" />
          <h1 className="text-xl font-bold">CodeArena</h1>
        </div>
        <div className="space-x-4">
          <Link to="/login" className="text-blue-400 hover:underline">Login</Link>
          <Link to="/signup" className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-10 mt-16">
        <h2 className="text-4xl font-bold">Welcome to CodeArena</h2>
        <p className="text-lg text-gray-400 mt-4 max-w-xl">
          The ultimate coding platform to test your skills, compete with peers, and enhance your programming knowledge.
        </p>
        <Link to="/problems">
          {/* <Button className="mt-6 bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-600"> */}
            {/* Start Solving Problems */}
          {/* </Button> */}
        </Link>
      </section>
    </div>
  );
}
