import { animated, config, useSpring } from "@react-spring/web";
import React, { FC, useEffect, useRef } from "react";
import card from "../../public/card.webp";
import nuts from "../../public/hazlenut.webp";
import { AdditionalInfo } from "./AdditionalInfo";
import { BuyForm } from "./BuyForm";

export const ProductInfo: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [{ scale, translateX, opacity }, imageApi] = useSpring(() => ({
    from: {
      scale: 1,
      translateX: 0,
      opacity: 1,
    },
    config: config.slow,
  }));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        const correctedY = window.scrollY - 20;
        const offsetY = correctedY / 100;
        imageApi.start({
          scale: Math.max(1 - offsetY, 0.5),
          translateX: Math.min(correctedY, 200),
          opacity: Math.max(1 - offsetY, 0),
        });
      }
    };
    document.addEventListener("scroll", handleScroll);
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      const img = new window.Image();
      img.src = card.src;
      img.onload = () => {
        ctx?.drawImage(img, 0, 0, img.width, img.height);
      };
    }
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [imageApi]);

  return (
    <section>
      <div className="relative flex items-start justify-end gap-32">
        <animated.canvas
          className="absolute z-0 h-[200vh] w-[100%]"
          ref={canvasRef}
          style={{
            opacity,
          }}
        ></animated.canvas>
        <animated.img
          src={nuts.src}
          alt="alt"
          style={{ scale, translateX }}
          className="z-10 mt-16 h-[500px] w-[500px]"
        />
        <article className="z-10 mr-16 mt-24 ">
          <span className="font-thin uppercase tracking-widest">Oaxaca</span>
          <h1 className="mb-5 text-4xl font-light">Mexico Sierra Mixteca</h1>
          <p className="mb-3 font-thin">Single origin</p>
          <p className="mb-3 font-light">$19.00</p>
          <p className="mb-3 font-light">
            Hazelnut Butter, Clementine, Cane Sugar
          </p>
          <BuyForm />
        </article>
        <AdditionalInfo />
      </div>
    </section>
  );
};
