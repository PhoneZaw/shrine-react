import { SearchIcon } from "@heroicons/react/outline";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className="flex justify-between items-center px-4 py-4">
      <div className="flex gap-2">
        <button>
          <img src="/MenuIcon.svg" alt="menu" />
        </button>
        <h3 className="text-base uppercase">Shrine</h3>
      </div>
      <button>
        <SearchIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Nav;
