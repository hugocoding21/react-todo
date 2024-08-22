import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='bg-slate-600 text-white w-full'>
      <ul className='flex gap-[20rem] justify-center items-center h-20'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/add'>Add task</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
