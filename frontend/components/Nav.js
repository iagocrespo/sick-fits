import React from "react";
import Link from "next/link";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/sell">
          <a>Sell</a>
        </Link>
      </div>
    );
  }
}

export default Nav;
