import React from "react";
import { Navbaritem } from "../utils/Navbar";
import NavLink from "./Link";
import { useCart } from "../Hooks/ProductContext";

export default function Navbar() {
  const { state, dispatch } = useCart();
  return (
    <nav>
      <ul className="flex py-4 max-w-[992px] m-auto shadow-xl mb-4 items-center px-4">
        <li className=" flex justify-center gap-14 w-[60%]">
          {Navbaritem.map(
            (item, index) =>
              item.clickable.isClickable && (
                <NavLink
                  href={item.clickable.href}
                  content={item.item}
                  key={index}
                />
              )
          )}
        </li>

        <li
          onClick={() => {
            dispatch({ type: "Model" });
            dispatch({
              type: "DUP",
              payload: false,
            });
          }}
          className="w-[40%] text-center flex justify-center items-center bg-green-500 text-[20px] rounded-md cursor-pointer"
        >
          Products - {state.product.length}
        </li>
      </ul>
    </nav>
  );
}
