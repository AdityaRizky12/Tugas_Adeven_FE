import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <img
            src="/image/Logo.png"
            alt="logo"
            className="h-7 sm:h-8"
          />
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <p className="text-gray-700 text-sm sm:text-base font-medium cursor-pointer">
            Kategori
          </p>

          <img
            src="/image/avatar.png"
            alt="avatar"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
