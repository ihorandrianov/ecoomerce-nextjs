import { FC } from "react";
import coffee from "../../public/coffee-hero.jpeg";
import { animated, config, useSpring } from "@react-spring/web";
import { ActiveLink } from "./ActiveLink";
import Link from "next/link";

export const Hero: FC = () => {
  const spring = useSpring({
    from: {
      opacity: 0,
      translateY: 300,
    },
    to: {
      opacity: 1,
      translateY: 0,
    },
    config: config.molasses,
  });

  return (
    <div className="relative flex h-[100vh] w-[99vw] items-start justify-start md:items-center md:overflow-hidden">
      <div
        className="absolute top-0 left-0 z-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${JSON.stringify(coffee.src)})` }}
      ></div>
      <div className="z-10 mt-14 ml-5 overflow-hidden md:ml-24">
        <animated.h1
          style={{ ...spring }}
          className="mb-10 text-5xl font-light italic tracking-wide"
        >
          Dive into fall
        </animated.h1>
        <animated.p
          style={{ ...spring }}
          className="mb-2 w-64 font-thin tracking-wide"
        >
          Featuring the freshest in our beautiful range of seasonal coffees
          sourced throughout the year.
        </animated.p>
        <div>
          <ActiveLink href="/shop">Shop now!</ActiveLink>
        </div>
      </div>
    </div>
  );
};
