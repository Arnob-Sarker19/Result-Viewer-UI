// src/App.js
import { useState } from "react";
import { database } from "./firebase";
import { ref, get } from "firebase/database";

function App() {
  const [roll, setRoll] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!roll) return setError("Please enter roll number");

    try {
      const snapshot = await get(ref(database, `results/${roll}`));
      if (snapshot.exists()) {
        setResult(snapshot.val());
        setError("");
      } else {
        setResult(null);
        setError("Result not found");
      }
    } catch (err) {
      setError("Error fetching result");
      setResult(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">📘 Result Viewer</h1>

        <input
          type="text"
          placeholder="Enter your roll number"
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded w-full transition"
        >
          View Result
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {result && (
          <div className="mt-6 text-left border-t pt-4">
            <p><strong>Name:</strong> {result.name}</p>
            <p><strong>Roll:</strong> {roll}</p>
            <p><strong>GPA:</strong> {result.gpa}</p>
            <p><strong>Status:</strong> {result.status}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
