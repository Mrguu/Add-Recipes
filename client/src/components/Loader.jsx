import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#1E221E]">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-green-500 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-green-500 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-green-500 animate-bounce [animation-delay:-.5s]"></div>
        <div className="w-4 h-4 rounded-full bg-green-500 animate-bounce [animation-delay:-.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-green-500 animate-bounce [animation-delay:-.9s]"></div>
      </div>
    </div>
  );
};

export default Loader;
