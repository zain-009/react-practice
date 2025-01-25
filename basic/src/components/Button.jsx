import React from "react";

function Button({ btnName, onClick }) {
  return (
    <button
      style={{ backgroundColor: btnName }}
      className="px-4 py-2 rounded-md text-white"
      onClick={onClick}
    >
      {btnName}
    </button>
  );
}

export default Button;
