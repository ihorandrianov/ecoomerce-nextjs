import { FC } from "react";
import Link from "next/link";
import { animated, useSpring } from "@react-spring/web";

interface Props {
  isMenuOpened: boolean;
}

export const Navbar: FC<Props> = ({ isMenuOpened }) => {
  const { size } = useSpring({
    size: isMenuOpened ? 240 : 0,
    from: {
      size: 0,
    },
  });
  return (
    <animated.nav
      style={{ height: size }}
      className={`m-5 flex flex-col overflow-hidden md:mt-0 md:flex-row`}
    >
      <ul className="flex w-full  flex-col divide-y-2">
        <li className="mb-5">
          <Link href="/shop">Shop</Link>
        </li>
        <li className="mb-5">
          <Link href="/subscription">Subscription</Link>
        </li>

        <li className="mb-5">
          <Link href="/about">About</Link>
        </li>
        <li className="mb-5">
          <Link href="/account">Account</Link>
        </li>
      </ul>
    </animated.nav>
  );
};
