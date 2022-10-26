import { ShoppingCartIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Nav from "../components/detail/Nav";
import Products from "./../data/items.json";

type Product = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const size = ["00", "02", "04", "06", "08", "10", "12", "14"];
const color = [
  "black",
  "white",
  "gray",
  "blue",
  "red",
  "pink",
  "orange",
  "yellow",
];

type Props = {};

const ProductDetail = (props: Props) => {
  const [item, setItem] = useState(null as Product | null);
  const [selectedColor, setSelectedColor] = useState(color[0]);
  const [selectedSize, setSelectedSize] = useState(size[0]);

  const [search] = useSearchParams();
  let searchId = search.get("id");
  let id: number | null = null;

  if (searchId != null) {
    id = parseInt(searchId);
  }

  useEffect(() => {
    const updateItem = async () => {
      const product = await Products.find((p) => p.id === id);
      if (product) setItem(product);
    };

    updateItem();
  }, []);
  if (item == null || id == null) {
    return null;
  }

  return (
    <div className="bg-black min-h-full border relative px-4 overflow-y-scroll">
      <Nav id={id} />
      {/* <img src="" alt="" /> */}
      <div className="bg-gray-400 h-96 -mt-14 -mx-4">
        <img
          className="h-full w-full object-cover"
          src={item.imgUrl}
          alt={item.name}
        />
      </div>

      <div className="flex justify-between items-center py-4">
        <div className="flex gap-2 items-center">
          <div className=" h-6 w-6 rounded-full bg-white"></div>
          <p className="text-sm font-normal opacity-80 uppercase">Brand</p>
        </div>
        <p className="font-normal">${item.price}</p>
      </div>

      <div className="py-4">
        <h3 className="text-2xl">{item.name}</h3>
        <p className="text-sm font-light opacity-80 mt-4 tracking-wide leading-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          odio nostrum quod
        </p>
      </div>

      {/* Detail */}
      <div className="flex justify-between my-4">
        <h5 className="uppercase ">More Details</h5>
        <ChevronDownIcon className="h-6 w-6" />
      </div>

      <hr className="opacity-20" />

      <div className="my-4">
        <h5>Select size</h5>
        <div className="flex gap-3 my-4 flex-wrap">
          {size.map((s, i) => (
            <SizeBox
              key={i}
              label={s}
              active={s === selectedSize}
              setSelectedSize={setSelectedSize}
            />
          ))}
        </div>
      </div>

      <hr className="opacity-20" />

      <div className="my-4">
        <h5>Color</h5>
        <div className="flex gap-2 my-4">
          {color.map((c, i) => (
            <ColorBox
              key={i}
              color={c}
              active={c === selectedColor}
              setSelectedColor={setSelectedColor}
            />
          ))}
        </div>
      </div>

      <hr className="opacity-20" />

      <button className="uppercase text-sm tracking-wider my-4 p-2 w-full bg-primary rounded-lg flex justify-center items-center gap-2">
        <ShoppingCartIcon className="h-6 w-6" />
        Add to Cart
      </button>

      <div className="h-12"></div>
    </div>
  );
};

export default ProductDetail;

type SizeBoxProps = {
  label: string;
  active?: boolean;
  setSelectedSize: (s: string) => void;
};

const SizeBox = ({ label, active, setSelectedSize }: SizeBoxProps) => {
  return (
    <div
      className={`flex-shrink-0 text-sm border-[2.5px] border-secondary-dark rounded-xl p-[6px] opacity-80 hover:cursor-pointer ${
        active && "opacity-100 border-secondary"
      }`}
      onClick={() => setSelectedSize(label)}
    >
      {label}
    </div>
  );
};

type ColorBoxProps = {
  color: string;
  active?: boolean;
  className?: string;
  setSelectedColor: (s: string) => void;
};

export const ColorBox = ({
  color,
  active,
  className,
  setSelectedColor,
}: ColorBoxProps) => {
  return (
    <div
      className={`flex-shrink-0 w-9 h-9 rounded-full hover:cursor-pointer ${
        className && className
      }  ${active && "border-[2px] border-secondary/80 p-1"}`}
      onClick={() => setSelectedColor(color)}
    >
      <div
        className="w-full h-full rounded-full"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};
