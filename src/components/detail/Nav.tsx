import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import React from "react";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className="sticky top-0  flex justify-between items-center py-4 text-black">
      <button className="text-2xl">
        <XIcon className="h-6 w-6" />
      </button>
      <div className="flex gap-4">
        <button>
          <ShoppingCartIcon className="h-6 w-6" />
        </button>
        <button>
          <HeartIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Nav;
