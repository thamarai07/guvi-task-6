import "../App.css";
import { FetchData } from "../funcitions/fetch";
import Card from "./Card";
import Loading from "./loading";
import { Outlet, useParams } from "react-router-dom";

function Products() {
  const { Data } = FetchData();
  const { id } = useParams();

  const isLoading = !Data || Data.length === 0;
  const showCards = !isLoading && !id;

  return (
    <div className="max-w-[992px] m-auto mt-5">
      {isLoading && <Loading content="Loading..." />}

      {showCards && (
        <div className="grid grid-cols-3 place-items-center gap-14">
          {Data.map((item) => (
            <>
              <Card
                key={item.id}
                img={item.image}
                title={item.title}
                description={item.description}
                href={item.id}
                price={item.price}
                rating={item.rating}
              />
            </>
          ))}
        </div>
      )}

      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
}

export default Products;
