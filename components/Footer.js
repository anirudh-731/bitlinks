import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-700 w-full py-4 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4">
        
        {/* Copyright */}
        <p className="text-lg text-white">
          © {new Date().getFullYear()} BitLinks. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
