import React from "react";

const Tag = ({ text, color }) => {
  return (
    <div
      className="py-1 px-3 rounded-lg font-medium text-gray-700 mr-2 drop-shadow"
      style={{ backgroundColor: color }}
    >
      {text}
    </div>
  );
};

export default Tag;
