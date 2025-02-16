import { useState } from "react";

const problemsList = [
  { id: 1, title: "Two Sum", difficulty: "Easy" },
  { id: 2, title: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
  { id: 3, title: "Median of Two Sorted Arrays", difficulty: "Hard" },
];

const ProblemsPage = () => {
  const [problems] = useState(problemsList);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Problems</h2>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Title</th>
              <th className="p-2 text-left">Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem) => (
              <tr key={problem.id} className="border-b">
                <td className="p-2">{problem.title}</td>
                <td
                  className={`p-2 ${
                    problem.difficulty === "Easy"
                      ? "text-green-600"
                      : problem.difficulty === "Medium"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {problem.difficulty}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProblemsPage;
