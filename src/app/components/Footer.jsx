import React, { useState, useEffect } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span></span>
        <p className="text-gray-500">All rights reserved &copy; {currentYear} <strong>Kolten Edward</strong></p>
      </div>
    </footer>
  );
};

export default Footer;