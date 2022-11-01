import { FC, useCallback, useEffect } from "react";
import Link from "next/link";
import { Menu } from "@mui/icons-material";
import { ActiveLink } from "./ActiveLink";
import { animated, useSpring } from "@react-spring/web";

export const Header: FC = () => {
  const [props, api] = useSpring(() => ({
    from: {
      height: 0,
    },
    config: {
      mass: 4.1,
      tension: 99,
      friction: 18,
    },
  }));

  const handleMouseScroll = useCallback(() => {
    const offsetY = window.scrollY;
    api.start({
      height: Math.min(offsetY, 64),
    });
  }, [api]);

  useEffect(() => {
    document.addEventListener("scroll", handleMouseScroll);

    return () => {
      document.removeEventListener("scroll", handleMouseScroll);
    };
  }, [handleMouseScroll]);

  return (
    <div className="navbar fixed top-0 z-20 bg-transparent">
      <animated.div
        style={{ ...props }}
        className="absolute top-0 left-0 right-0 z-10 bg-white bg-opacity-40 bg-clip-padding backdrop-blur-xl backdrop-filter"
      ></animated.div>
      <div className="navbar-start z-10">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn lg:hidden">
            <Menu />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu menu-compact mt-3 w-52 bg-base-300 p-2 shadow"
          >
            <li>
              <ActiveLink href="/">Subscription</ActiveLink>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <ul className="menu menu-horizontal z-10 hidden p-0 lg:flex">
          <li>
            <ActiveLink href="/"> Subscription </ActiveLink>
          </li>
          <li tabIndex={0}>
            <ActiveLink href="/">Shop</ActiveLink>
            <ul className=" bg-base-300 p-2">
              <li>
                <ActiveLink href="/">Coffee</ActiveLink>
              </li>
              <li>
                <ActiveLink href="/">Gear</ActiveLink>
              </li>
            </ul>
          </li>
          <li>
            <ActiveLink href="/">Item 3</ActiveLink>
          </li>
        </ul>
      </div>
      <div className="navbar-center flex">
        <Link href="/">
          <a className="z-10 font-serif text-2xl uppercase tracking-widest">
            Roastery
          </a>
        </Link>
      </div>
      <div className="navbar-end z-10 hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <ActiveLink href="/">Location</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/">About</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/">Login</ActiveLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
