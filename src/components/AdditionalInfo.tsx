import { animated, config, useSpring, useTransition } from "@react-spring/web";
import { FC, useState, useEffect } from "react";

export const AdditionalInfo: FC = () => {
  const [toggleButton, setToggle] = useState(false);

  const transition = useTransition(toggleButton, {
    from: {
      top: 100,
      opacity: 0,
    },
    enter: {
      top: 0,
      opacity: 1,
    },
    leave: {
      top: 100,
      opacity: 0,
    },
  });

  const [props, api] = useSpring(() => ({
    from: {
      translateY: 0,
    },
    config: config.molasses,
  }));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        api.start({ translateY: 100 });
      } else {
        api.start({ translateY: 0 });
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [api]);

  const handleToggle = () => {
    setToggle(!toggleButton);
  };

  return (
    <animated.div
      style={{ ...props }}
      className="fixed bottom-0 z-10 flex w-full justify-center"
    >
      <div className="mx-20 flex h-20  w-full justify-center bg-white">
        <div className="flex justify-center gap-10">
          <button onClick={handleToggle}>
            <span className="mr-2 text-xs font-bold uppercase tracking-wider">
              Acidity
            </span>
            <span className="text-xs font-light uppercase tracking-wider">
              Bright
            </span>
          </button>
          <button onClick={handleToggle}>
            <span className="mr-2 text-xs font-bold uppercase tracking-wider">
              Elevation
            </span>
            <span className="text-xs font-light uppercase tracking-wider">
              1700Masl
            </span>
          </button>
          <button onClick={handleToggle}>
            <span className="mr-2 text-xs font-bold uppercase tracking-wider">
              harvest
            </span>
            <span className="text-xs font-light uppercase tracking-wider">
              Spring 2022
            </span>
          </button>
          <button onClick={handleToggle}>
            <span className="mr-2 text-xs font-bold uppercase tracking-wider">
              Roast
            </span>
            <span className="text-xs font-light uppercase tracking-wider">
              Light-medium
            </span>
          </button>
          <button onClick={handleToggle}>
            <span className="mr-2 text-xs font-bold uppercase tracking-wider">
              Process
            </span>
            <span className="text-xs font-light uppercase tracking-wider">
              Washed
            </span>
          </button>
          <button onClick={handleToggle}>
            <span className="mr-2 text-xs font-bold uppercase tracking-wider">
              cultivar
            </span>
            <span className="text-xs font-light uppercase tracking-wider">
              Typica, bourbon, mondo novo
            </span>
          </button>
        </div>
      </div>
      {transition((style, category) => (
        <>
          {category ? (
            <animated.div
              style={style}
              className="absolute flex h-20 w-full justify-center gap-10 "
            >
              <div className=" mx-20 flex w-full items-center justify-center bg-white">
                <span className="ml-auto mr-2 text-xs font-bold uppercase tracking-wider">
                  Acidity
                </span>
                <span className="mr-28 text-xs font-light uppercase tracking-wider">
                  Bright
                </span>
                <span className="text-xs font-light">
                  Speaks to level of vibrancy on plate
                </span>
                <button className="ml-auto mr-5" onClick={handleToggle}>
                  x
                </button>
              </div>
            </animated.div>
          ) : null}
        </>
      ))}
    </animated.div>
  );
};
