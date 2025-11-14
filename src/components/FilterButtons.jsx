
import React from "react";

function FilterButtons() {
  return (
    <div className="flex gap-3 mt-4">
      <button className="px-4 py-2 bg-gray-200 rounded-lg">All</button>
      <button className="px-4 py-2 bg-gray-200 rounded-lg">Active</button>
      <button className="px-4 py-2 bg-gray-200 rounded-lg">Completed</button>
    </div>
  );
}

export default FilterButtons;
