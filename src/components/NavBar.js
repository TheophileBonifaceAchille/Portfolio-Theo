import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
        <nav className="flex flex-col sm:flex-row">
          <NavLink
            to="/"
            exact
            activeClassName="text-teal-400"
            className="inflex-flex items-center py-6 px-3 mr-4 text-gray-300 hover:text-yellow-200 text-4xl font-bold cursive tracking-widest"
          >
            Théophile
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-300 hover:text-yellow-200"
            activeClassName="text-teal-400"
          >
            About Me
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-300 hover:text-yellow-200"
            activeClassName="text-teal-400"
          >
            Projects
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-300 hover:text-yellow-200"
            activeClassName="text-teal-400"
          >
            Blog Post
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-3 flex justify-start md:justify-end">
          <SocialIcon
            url="https://www.linkedin.com/in/theophilebonifaceachille/"
            className="mr-4"
            target="_blank"
            rel="noopener noreferrer"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/TheophileBonifaceAchille"
            className="mr-4"
            target="_blank"
            rel="noopener noreferrer"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
