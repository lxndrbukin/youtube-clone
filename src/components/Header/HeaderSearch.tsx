import { IoSearchOutline } from "react-icons/io5";

export default function HeaderSearch(): JSX.Element {
  return (
    <form className="header-search">
      <input type="text" placeholder="Search" name="search" />
      <button title="Search">
        <IoSearchOutline />
      </button>
    </form>
  );
}
