import React from "react";
import { useCart } from "../Hooks/ProductContext";

export default function Model() {
  const { state, dispatch } = useCart();

  if (!state.model) return null;

  const closeModel = () => dispatch({ type: "Model" });

  const handleBackdropClick = (e) => {
    if (e.target.id === "modal-backdrop") {
      closeModel();
    }
  };

  return (
    <div
      id="modal-backdrop"
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-md p-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModel}
          className="absolute top-2 right-2 bg-white px-3 py-1 rounded-md text-black font-bold shadow"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">Cart Items</h2>

        {state.product.length > 0 && state.duplicate === false ? (
          <ul className="space-y-3">
            {state.product.map((item, index) => (
              <li key={index} className="border p-3 rounded-md shadow-sm">
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-600">Price: ${item.price}</p>
                <div className="flex mt-1 gap-4">
                  <button
                    onClick={() => dispatch({ type: "INC" })}
                    className="bg-green-600 px-5 rounded"
                  >
                    +
                  </button>
                  <p>Quantity : {state.count}</p>
                  <button
                    onClick={() => dispatch({ type: "DEC" })}
                    className="bg-red-600 px-5 rounded"
                  >
                    -
                  </button>
                  {/* <button
                    className="bg-blue-400 px-2 text-[14px] rounded"
                    onClick={() =>
                      dispatch({
                        type: "ADD",
                        payload: {
                          title,
                          price,
                          description,
                          rating,
                          count: state.count,
                        },
                      })
                    }
                  >
                    Change
                  </button> */}
                </div>
                <button
                  className="mt-2 text-sm text-red-600 hover:underline"
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: item.id })
                  }
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">
            No items in cart. Or Item is Already Added Please check your cart
          </p>
        )}
      </div>
    </div>
  );
}
