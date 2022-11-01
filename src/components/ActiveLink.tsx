import { animated, config, useSpring } from "@react-spring/web";
import Link from "next/link";
import { FC } from "react";

type Props = {
  href: string;
  children: string;
};

export const ActiveLink: FC<Props> = ({ href, children }) => {
  const [props, api] = useSpring(() => ({
    from: {
      width: "0%",
    },
    config: config.slow,
  }));

  const startingAnimation = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: config.molasses,
    delay: 1000,
  });

  const handleMouseEnter = () => {
    api.start({
      width: "100%",
    });
  };

  const handleMouseLeave = () => {
    api.start({
      width: "0%",
    });
  };

  return (
    <Link href={href}>
      <a>
        <animated.span
          className="relative text-xs font-light uppercase tracking-wider"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ ...startingAnimation }}
        >
          {children}
          <animated.span
            style={{ ...props }}
            className="absolute bottom-[-6px] left-[50%] h-[1px] w-[20px] translate-y-[-50%] translate-x-[-50%] bg-black"
          ></animated.span>
        </animated.span>
      </a>
    </Link>
  );
};
