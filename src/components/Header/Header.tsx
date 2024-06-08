import "./assets/styles.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="header-left">
        <RxHamburgerMenu className="header-menu-btn" />
        <div className="header-logo">
          <FaYoutube /> <span>YouTube</span>
        </div>
      </div>
      <form className="header-search">
        <input type="text" placeholder="Search" name="search" />
        <button title="Search">
          <IoSearchOutline />
        </button>
      </form>
      <div className="header-right">
        <div className="header-user">
          <img
            src="https://yt3.ggpht.com/ytc/AIdro_meYAh6NPkc3qZ9RQbztfozX2jknUqc69hcasQTLZa7CCWY6MHmzRI1I6I59gYFhEiQXA=s88-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </div>
      </div>
    </header>
  );
}
