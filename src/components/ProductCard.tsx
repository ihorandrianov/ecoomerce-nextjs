import { animated, config, useSpring, useTrail } from "@react-spring/web";
import { FC } from "react";
import cardImg from "../../public/card.webp";

export const ProductCard: FC = () => {
  const [bgProps, bgApi] = useSpring(() => ({
    from: {
      scale: 1,
    },
    config: config.slow,
  }));

  const [trail, infoApi] = useTrail(3, () => ({
    from: {
      translateX: 0,
    },
    config: config.molasses,
  }));

  const [buyProps, buyApi] = useSpring(() => ({
    from: {
      translateX: "-400%",
    },
    config: config.molasses,
  }));

  const handleMouseOn = () => {
    bgApi.start({
      scale: 1.1,
    });
    infoApi.start({
      to: {
        translateX: 500,
      },
      delay: 500,
    });
    buyApi.start({
      to: {
        translateX: "-50%",
      },
      delay: 500,
    });
  };

  const handleMouseOut = () => {
    bgApi.start({
      scale: 1,
    });
    infoApi.start({
      translateX: 0,
    });
    buyApi.start({
      translateX: "-400%",
    });
  };

  return (
    <article
      onMouseEnter={handleMouseOn}
      onMouseLeave={handleMouseOut}
      className="relative flex h-[307px] w-[215px] items-end justify-center overflow-hidden md:h-[533px] md:w-[373px]"
    >
      <animated.div
        className="absolute z-0 h-[100%] w-[100%] bg-cover bg-bottom"
        style={{
          backgroundImage: `url(${JSON.stringify(cardImg.src)})`,
          ...bgProps,
        }}
      ></animated.div>
      <section className="relative z-0 mb-2 flex flex-col items-center justify-center md:mb-10">
        <animated.p
          style={{ ...trail[2] }}
          className="mb-2 text-xs font-light uppercase tracking-wider"
        >
          Single Origin
        </animated.p>
        <animated.h1
          style={{ ...trail[1] }}
          className="mb-2 font-light tracking-wide"
        >
          Mexico Sierra Mixteca
        </animated.h1>
        <animated.p style={{ ...trail[0] }} className=" text-xs font-light">
          $19.00
        </animated.p>
        <animated.button
          style={{ ...buyProps }}
          className="absolute left-[50%] top-[50%] w-[120px] translate-x-[-50%] translate-y-[-50%] bg-white p-3 text-xs font-light uppercase tracking-wide transition-colors duration-500 hover:bg-black hover:text-white"
        >
          Add to cart
        </animated.button>
      </section>
    </article>
  );
};
