import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signing up with:", { name, email, password });

    // Add API call for signup
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-900 px-4">
      <div className="bg-gray-800 p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-white text-center mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSignup} className="space-y-6">
          <div className="flex flex-col gap-5">
            <label className="text-gray-300">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 border rounded-lg bg-gray-700 text-white outline-none focus:border-green-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-5">
            <label className="text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg bg-gray-700 text-white outline-none focus:border-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full p-3 border rounded-lg bg-gray-700 text-white outline-none focus:border-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-500 text-white p-3 rounded-lg font-medium transition-all duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-gray-400 text-center">
          Already have an account?{" "}
          <span
            className="text-green-400 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
