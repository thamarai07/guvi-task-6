import React, { useState } from "react";

export default function Image({ img }) {
  const [loading, setLoading] = useState(true);

  return (
    <img
      src={img}
      alt="product"
      onLoad={() => setLoading(false)}
      className={`object-cover w-[60%] h-[60%] m-auto p-2 transition-all duration-300 ${
        loading ? "blur-sm opacity-80" : "blur-0 opacity-100"
      }`}
    />
  );
}
