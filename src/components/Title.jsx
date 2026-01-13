import React from "react";

function Title() {
  return (
    <div className="w-full max-w-lg mx-auto mb-5">
      <div className="bg-gradient-to-br bg-slate-900 rounded-2xl p-2 shadow-2xl transform hover:scale-105 transition-all duration-300">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="text-5xl sm:text-6xl animate-bounce">📝</div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-wide">
              My TODO List
            </h1>
            <p className="text-indigo-100 text-sm font-medium">
              Stay organized, get things done!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
