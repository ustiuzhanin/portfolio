import React from "react";
import Link from "next/link";

function Header() {
  return (
    <>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/portfolio'>
        <a>Portfolio</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/cv'>
        <a>CV</a>
      </Link>
    </>
  );
}

export default Header;
