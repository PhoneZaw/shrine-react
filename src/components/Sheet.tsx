import { AdjustmentsIcon } from "@heroicons/react/outline";
import Cart from "./Cart";
import Product from "./Product";
import Products from "./../data/items.json";

type Props = {};

const Sheet = (props: Props) => {
  return (
    <div className="w-full flex-1 bg-black relative">
      <div className="absolute border-x-8 border-x-transparent w-0 h-0 border-t-[30px] border-r-[30px] border-t-primary border-r-transparent border-b-0 border-l-0" />
      <button className="absolute right-4 top-4 rotate-90">
        <AdjustmentsIcon className="w-6 h-6" />
      </button>

      {/* Product Shelf */}
      <div className="grid grid-flow-col grid-rows-2 mt-14 overflow-x-scroll scrollbar-thin items-center h-fit py-6 scrollbar-thumb-secondary-dark scrollbar-track-transparent pb-10">
        {/* <div className="space-y-10">
          <Product />
          <Product />
        </div>
        <Product /> */}
        {Products.map((p) => (
          <Product key={p.id} {...p} />
        ))}
      </div>

      {/* Cart */}
      <div className="absolute bottom-0 right-0">
        <Cart />
      </div>
    </div>
  );
};

export default Sheet;
