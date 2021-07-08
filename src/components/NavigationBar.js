import React from "react";
import { Link } from "gatsby";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Header() {
  return (
    <nav className="bg-green-200 grid items-center border-b-2 border-gray-800 py-4">
      <ul className="grid grid-cols-8 text-center">
        <li className="col-span-2 block text-gray-800 font-bold text-xl hover:text-gray-500">
          <Link to="/">Home</Link>
        </li>
        <li className="col-span-2 block text-gray-800 font-bold text-xl hover:text-gray-500 ">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="col-span-2 block text-gray-800 font-bold text-xl hover:text-gray-500 ">
          <a href="mailto:hotel.kilo.alpha@gmail.com">Contact</a>
        </li>
        <li className="block text-gray-800 font-bold text-xl hover:text-gray-500 ">
          <a
            href="https://www.github.com/aaronkai"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <AiFillGithub className="text-3xl block m-auto" />
          </a>
        </li>
        <li className="text-gray-800 font-bold text-xl hover:text-gray-500">
          <a
            href="https://www.linkedin.com/in/aaron-hubbard/"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <AiFillLinkedin className="text-3xl block m-auto" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
