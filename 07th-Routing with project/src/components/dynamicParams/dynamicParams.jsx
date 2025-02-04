import React from "react";
import { useParams } from "react-router-dom";

function DynamicParams() {
  const { parameter } = useParams();
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Dynamic Route Parameters Demo
        </h1>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-2">
          <p className="text-blue-700">
            Current URL:{" "}
            <span className="font-mono bg-blue-100 px-2 py-1 rounded">
              http://localhost:5173/DynamicParams
            </span>
          </p>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            Current Parameter:{" "}
            <span className="font-mono bg-blue-100 px-2 py-1 rounded">
              {parameter}
            </span>
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              How It Works
            </h2>
            <p className="text-gray-600">
              This page demonstrates React Router's dynamic routing
              capabilities. The value you see above is extracted from the URL
              using the useParams() hook.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Try It Out
            </h2>
            <p className="text-gray-600">
              Change the URL parameter in your browser's address bar to see the
              value update automatically. For example Paste it out:{" "}
              <code className="bg-gray-100 px-2 py-1 rounded">
              http://localhost:5173/DynamicParams/12345
              </code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DynamicParams;
