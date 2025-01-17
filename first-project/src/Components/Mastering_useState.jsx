import React, { useState } from "react";

function Mastering_useState() {
  const [val, setVal] = useState({ name: "score", value: false });

  return (
    <>
      <div className="p-4 font-bold">
        <h1 className="mb-2">{val.name}</h1>
        <h1>{val.value.toString()}</h1>
        <button
          onClick={() => setVal({ ...val, value: !val.value })}
          className={`px-2 py-2 ${
            val.value ? "bg-blue-400" : "bg-red-400"
          } rounded-full text-white mt-4`}
        >
          Change
        </button>
      </div>
    </>
  );
}

export default Mastering_useState;
