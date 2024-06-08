import "./assets/styles.scss";

import HeaderLeft from "./HeaderLeft";
import HeaderSearch from "./HeaderSearch";
import HeaderRight from "./HeaderRight";

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <HeaderLeft />
      <HeaderSearch />
      <HeaderRight />
    </header>
  );
}
