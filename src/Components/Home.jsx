import React from "react";
import NavLink from "./Link";
export default function Home() {
  return (
    <div className="max-w-[992px] m-auto flex justify-center">
      <NavLink
        className="text-blue-500 bg-red-200 px-3 py-3 rounded font-semibold"
        content={"View Product"}
        href={"/product"}
      />
    </div>
  );
}
