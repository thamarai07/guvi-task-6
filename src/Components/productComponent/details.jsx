import { useParams } from "react-router-dom";
import { FetchDataByID } from "../../funcitions/fetch";
import Card from "../Card";
import { useCart } from "../../Hooks/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { Data } = FetchDataByID(id);
  const { state, dispatch } = useCart();

  if (!Data) return <p className="text-center mt-10">Loading...</p>;

  const { title, price, description, rating, image } = Data;

  const handleIncrement = () => dispatch({ type: "INC" });
  const handleDecrement = () => dispatch({ type: "DEC" });
  const handleAddToCart = () => {
    let storeState = localStorage.getItem("storeState");
    let storeArr = storeState ? JSON.parse(storeState) : [];

    console.log(storeArr);
    let found = storeArr.product.some((item) => item.title === title);

    if (found) {
      dispatch({ type: "Model" });
      dispatch({
        type: "DUP",
        payload: true,
      });
    } else {
      dispatch({
        type: "ADD",
        payload: {
          id: Date.now(),
          title,
          price,
          description,
          rating,
          count: state.count,
        },
      });
      alert("Item added please check you cart");
    }
  };

  return (
    <div className="max-w-[772px] mx-auto mt-10 p-4">
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
        <Card
          img={image}
          title={title}
          description={description}
          price={price}
          rating={rating}
        />

        <div className="w-full md:w-[30%] text-center">
          <p className="mb-6 text-[22px] font-semibold">
            Total Price: <span>{price * state.count}$</span>
          </p>

          <div className="flex gap-10 items-center justify-center mb-6">
            <button
              onClick={handleIncrement}
              className="bg-green-600 w-[60px] rounded-md px-4 leading-8 text-white"
            >
              +
            </button>
            <span className="text-[20px] font-semibold">{state.count}</span>
            <button
              onClick={handleDecrement}
              className="bg-red-600 w-[60px] rounded-md px-4 leading-8 text-white"
            >
              -
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="py-2 px-6 rounded-md text-white bg-blue-700 hover:bg-blue-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
