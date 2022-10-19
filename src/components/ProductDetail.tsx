import { ShoppingCartIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import React from "react";
import Nav from "./detail/Nav";

type Props = {};

const ProductDetail = (props: Props) => {
  return (
    <div className="bg-black min-h-full border relative px-4 overflow-y-scroll">
      <Nav />
      {/* <img src="" alt="" /> */}
      <div className="bg-gray-400 h-96 -mt-14 -mx-4"></div>

      <div className="flex justify-between items-center py-4">
        <div className="flex gap-2 items-center">
          <div className=" h-6 w-6 rounded-full bg-white"></div>
          <p className="text-sm font-normal opacity-80 uppercase">Brand</p>
        </div>
        <p className="font-normal">$99</p>
      </div>

      <div className="py-4">
        <h3 className="text-2xl">Product Name</h3>
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
          <SizeBox label="00" />
          <SizeBox label="02" />
          <SizeBox label="04" />
          <SizeBox label="06" active />
          <SizeBox label="08" />
          <SizeBox label="10" />
          <SizeBox label="12" />
          <SizeBox label="14" />
        </div>
      </div>

      <hr className="opacity-20" />

      <div className="my-4">
        <h5>Color</h5>
        <div className="flex gap-2 my-4">
          <ColorBox color="black" />
          <ColorBox color="white" />
          <ColorBox color="gray" />
          <ColorBox color="blue" />
          <ColorBox color="red" />
          <ColorBox color="pink" active />
          <ColorBox color="orange" />
          <ColorBox color="yellow" />
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
};

const SizeBox = ({ label, active }: SizeBoxProps) => {
  return (
    <div
      className={`flex-shrink-0 text-sm border-[2.5px] border-secondary-dark rounded-xl p-[6px] opacity-80 ${
        active && "opacity-100 border-secondary"
      }`}
    >
      {label}
    </div>
  );
};

type ColorBoxProps = {
  color: string;
  active?: boolean;
  className?: string;
};

export const ColorBox = ({ color, active, className }: ColorBoxProps) => {
  return (
    <div
      className={`flex-shrink-0 w-9 h-9 rounded-full ${
        className && className
      }  ${active && "border-[2px] border-secondary/80 p-1"}`}
    >
      <div
        className="w-full h-full rounded-full border border-white/40"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};
