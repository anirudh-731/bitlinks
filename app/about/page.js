import React from "react";
export default function About() {
  return (
    <div className="bg-purple-100 min-h-[calc(100vh-157px)] flex flex-col">
      <div className="w-full mx-auto px-6 py-14 flex-1">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 text-center mb-6">
          About <span className="text-purple-500">BitLinks</span>
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12">
          BitLinks is your verified and reliable URL shortener. We make sharing
          links <span className="font-semibold text-purple-600">fast</span>,{" "}
          <span className="font-semibold text-purple-600">secure</span>, and{" "}
          <span className="font-semibold text-purple-600">effortless</span>.
          Whether it’s for personal use, professional branding, or team
          collaboration — BitLinks helps you keep your links clean and
          memorable.
        </p>

        {/* Features */}   
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <h2 className="text-xl font-bold text-purple-700 mb-2">⚡ Fast</h2>
            <p className="text-gray-600">
              Generate short links instantly and share them without delays.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <h2 className="text-xl font-bold text-purple-700 mb-2">🔒 Secure</h2>
            <p className="text-gray-600">
              Your data is safe with encrypted storage and verified redirects.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <h2 className="text-xl font-bold text-purple-700 mb-2">👌 Easy</h2>
            <p className="text-gray-600">
              Minimal design, intuitive UI — shorten links in just one click.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-purple-800 mb-4">
            Our Mission 🚀
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            At BitLinks, we believe in simplifying the way people share
            information online. We’re committed to building a trusted,
            easy-to-use platform that empowers individuals and businesses to
            manage and share their links smarter.
          </p>
        </div>
      </div>
    </div>
  );
}
