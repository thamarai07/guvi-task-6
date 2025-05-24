import React from "react";
import Image from "./Image";
import NavLink from "./Link";
import { useParams } from "react-router-dom";

function Card({ img, title, description, href, price, rating }) {
  const params = useParams();
  const isProductPage = Object.keys(params).length > 0;

  return (
    <div className="flex flex-col shadow-2xl rounded-lg">
      {img && <Image img={img} />}
      <div className="flex flex-col mt-4 gap-3 p-4">
        {title && <p className="text-[15px] font-semibold">{title}</p>}

        {price && (
          <p className="text-[18px] py-2 font-semibold">
            Price: <span>{price}$</span>
          </p>
        )}

        {rating && (rating.rate || rating.count) && (
          <div className="text-[12px] font-semibold flex justify-between items-center">
            {rating.rate && (
              <span className="bg-gray-400 py-1 px-2 rounded-md text-gray-900 shadow-lg">
                Rating: {rating.rate}
              </span>
            )}
            {rating.count && (
              <span className="bg-gray-400 py-1 px-2 rounded-md text-gray-900 shadow-lg">
                Count: {rating.count}
              </span>
            )}
          </div>
        )}

        {description && (
          <p className="text-[12px]">
            {isProductPage ? description : description.slice(0, 65) + "..."}
          </p>
        )}

        {href && (
          <NavLink
            href={"/product/"+href}
            content="Add Cart"
            className="text-center bg-blue-700 w-[60%] m-auto mt-0 p-2 font-semibold text-white rounded-lg"
          />
        )}
      </div>
    </div>
  );
}

export default React.memo(Card);
