import { animated, config, useSpring, useTrail } from "@react-spring/web";
import { FC, useRef } from "react";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 2, tension: 800, friction: 50 };
const trans = (x: number, y: number) =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

export const ColorGuide: FC = () => {
  const [trail, api] = useTrail(10, (i) => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }));

  const [{ background }] = useSpring(() => ({
    from: {
      background: "#cafaec",
    },
    to: [
      {
        background: "#c2ddf8",
      },
      {
        background: "#a3b5df",
      },
      {
        background: "#c9bbdd",
      },
      {
        background: "#dcfff4",
      },
      {
        background: "#cafaec",
      },
    ],
    loop: true,
    config: config.molasses,
  }));

  const boxRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (boxRef.current) {
      api.start({
        xy: [
          e.clientX - boxRef.current.getBoundingClientRect().left,
          e.clientY - boxRef.current.getBoundingClientRect().top,
        ],
      });
    }
  };

  const [bgProps] = useSpring(() => ({
    from: {
      background: "#facad8",
    },
    to: [
      {
        background: "#f8ddc2",
      },
      {
        background: "#dfcda3",
      },
      {
        background: "#cfddbb",
      },
      {
        background: "#ffdce7",
      },
      {
        background: "#facad8",
      },
    ],
    config: config.molasses,
    loop: true,
  }));

  return (
    <section className="relative flex h-[100vh] items-center justify-center">
      <animated.div
        onMouseMove={handleMouseMove}
        ref={boxRef}
        style={{ ...bgProps }}
        className="absolute top-0 left-0 right-0 bottom-0 z-0 overflow-hidden"
      >
        {trail.map((props, index) => (
          <animated.div
            className="absolute z-10 rounded-[50%] bg-slate-200 blur-lg"
            key={index}
            style={{
              transform: props.xy.to(trans),
              height: 10 * (11 - index) + 10,
              width: 10 * (11 - index) + 10,
              background,
            }}
          />
        ))}
      </animated.div>
      <hgroup className="z-10 flex flex-col items-center justify-center">
        <span className="mb-3 text-sm font-light uppercase">
          Let color be your guide
        </span>
        <h2 className="mb-3 text-4xl font-light uppercase">Taste by color</h2>
        <p className="text-sm font-light uppercase ">
          Explore the coffee spectrum
        </p>
      </hgroup>
    </section>
  );
};
