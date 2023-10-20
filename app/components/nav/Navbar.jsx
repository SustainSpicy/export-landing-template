"use client";
import Link from "next/link";
import { Wrapper } from "../Wrapper";
import { useEffect, useState } from "react";

const navItemData = [
  { name: "About", url: "#about" },
  { name: "Services", url: "#service" },
  { name: "Fleet", url: "#fleet" },
  { name: "Contact", url: "#contact" },
];
export function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    const changeNavbar = () => {
      const scrolled = window.scrollY;
      if (scrolled >= 80) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }
    };
    window.addEventListener("scroll", changeNavbar);
    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  }, []);

  return (
    <div className=" w-full h-20 absolute top-0 z-10 p-2 flex justify-center">
      <Wrapper>
        <div className="h-full flex flex-col gap-4 justify-between items-center self-center">
          <div className="w-[200px] flex-1">
            <img
              src="logo.png"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`flex gap-6  ${
              navbarVisible
                ? "fixed top-0 bg-blue-950  w-full justify-center"
                : ""
            }`}
          >
            {navItemData.map((item, index) => (
              <Link key={index} href={item.url}>
                <span className="text-white text-[12px] font-medium font-Barlow leading-[60px]">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
