import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import NavItem from "./NavItem";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  }, []);
  return (
    <div className='flex justify-between px-5 py-3 my-3'>
      <span className='text-xl font-bold border-b-4 text-green border-green md:text-2xl'>
        {activeItem}
      </span>
      <div className='flex space-x-3 space-x-5 text-lg text-red-400'>
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name='About'
          route='/'
        ></NavItem>
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name='Projects'
          route='/projects'
        ></NavItem>
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name='Resume'
          route='/resume'
        ></NavItem>
      </div>
    </div>
  );
};

export default Navbar;
