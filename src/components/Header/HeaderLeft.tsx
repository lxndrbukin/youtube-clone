import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa6";

export default function HeaderLeft(): JSX.Element {
  return (
    <div className="header-left">
      <RxHamburgerMenu className="header-menu-btn" />
      <div className="header-logo">
        <FaYoutube /> <span>YouTube</span>
      </div>
    </div>
  );
}
