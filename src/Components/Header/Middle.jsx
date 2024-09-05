import { ArrowDownIcon } from "../../utils/svgIcons";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import {
  camera,
  computer,
  game,
  headphones,
  mobile,
  powertools,
  robotclean,
  smartwatch,
  sportwatch,
  tablet,
  tvaudio,
  tvbox,
} from "../../utils";

const categories = [
  {
    title: "Tv & Audio",
    icon: tvaudio,
    link: "#",
  },
  {
    title: "Tv Box",
    icon: tvbox,
    link: "#",
  },
  {
    title: "Power Tools",
    icon: powertools,
    link: "#",
  },
  {
    title: "Headphones",
    icon: headphones,
    link: "#",
  },
  {
    title: "Cell Phones",
    icon: mobile,
    link: "#",
  },
  {
    title: "Smart Watches",
    icon: smartwatch,
    link: "#",
  },
  {
    title: "Game & Video",
    icon: game,
    link: "#",
  },
  {
    title: "Robot Clean",
    icon: robotclean,
    link: "#",
  },
  {
    title: "Sport Watches",
    icon: sportwatch,
    link: "#",
  },
  {
    title: "Tablets",
    icon: tablet,
    link: "#",
  },
  {
    title: "Computers & Laptop",
    icon: computer,
    link: "#",
  },
  {
    title: "Cameras & Photos",
    icon: camera,
    link: "#",
  },
];

const navItems = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "Shop",
    link: "#shop",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Blog",
    link: "#blog",
  },
  {
    title: "Cart",
    link: "#cart",
  },
  {
    title: "My Account",
    link: "#account",
  },
];

const Middle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  const toggleResDropdown = () => {
    setIsNavOpen((prevState) => !prevState);
  };
  return (
    <div className="bg-black py-2">
      <div className="container">
        <div className="flex justify-between md:justify-center gap-20 items-center">
          <div className="category-dropdown text-white">
            <div className="relative max-w-max">
              <button
                onClick={toggleDropdown}
                className="inline-flex items-center gap-2 rounded-md border border-gray-400 hover:border-white py-1.5 px-3 text-sm/6 font-semibold text-gray-300 hover:text-white"
                type="button"
              >
                <span>Select Category</span>
                <ArrowDownIcon />
              </button>
              {isOpen && (
                <div className="w-max absolute z-10 bg-[black] divide-y divide-gray-100 rounded-lg shadow ">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a
                          href={category.link}
                          className="flex items-center gap-2 rounded-lg py-2 px-3 hover:bg-stone-600"
                        >
                          <span>
                            <img
                              src={category.icon}
                              className="size-6 rounded-md"
                            />
                          </span>
                          <span>{category.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="navigation">
            <div className="relative">
              <nav className="md:inline-flex gap-10 hidden">
                {navItems.map((item) => (
                  <a
                    className="text-white font-medium uppercase text-sm"
                    key={item.title}
                    href={item.link}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
              <button
                onClick={toggleResDropdown}
                className="md:hidden inline-flex items-center gap-2 rounded-md border border-gray-400 hover:border-white py-1.5 px-3 text-sm/6 font-semibold text-gray-300 hover:text-white"
                type="button"
              >
                <FaBarsStaggered />
              </button>
              {isNavOpen && (
                <div className="md:hidden absolute w-max px-2 right-0 z-10 bg-black divide-y divide-gray-100 rounded-lg shadow">
                  <nav className="flex flex-col py-2 text-sm text-gray-700 dark:text-gray-200 text-left">
                    {navItems.map((item) => (
                      <a
                        key={item.title}
                        href={item.link}
                        className="uppercase cursor-pointer rounded-lg py-2 px-3 hover:bg-stone-600"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
