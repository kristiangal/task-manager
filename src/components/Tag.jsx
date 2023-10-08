import React from "react";

const Tag = ({ text, color }) => {
  return (
    <div
      className="py-1 px-3 rounded-lg font-regular text-white mr-2 drop-shadow"
      style={{ backgroundColor: color }}
    >
      {text}
    </div>
  );
};

export default Tag;
