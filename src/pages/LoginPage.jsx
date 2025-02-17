import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    navigate("/problems");
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white">
      <img 
        src="https://source.unsplash.com/1600x900/?technology,coding" 
        alt="Coding background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="z-10 w-full max-w-md p-8 bg-white bg-opacity-90 rounded-xl shadow-xl text-black">
        <div className="flex items-center justify-center mb-8">
          <Code2 className="w-12 h-12 text-primary mr-4" />
          <h1 className="text-3xl font-bold text-black">CodeX</h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 bg-gray-200 text-black placeholder-gray-500 border-gray-400"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 bg-gray-200 text-black placeholder-gray-500 border-gray-400"
            />
          </div>
          <div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <Link to="#" className="text-sm text-primary hover:underline">
            Forgot password?
          </Link>
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
