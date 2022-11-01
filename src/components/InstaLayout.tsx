import { Instagram } from "@mui/icons-material";
import Image from "next/image";
import { FC } from "react";
import igMain from "../../public/Ig-main.jpeg";
import ig1 from "../../public/ig-1.jpeg";
import ig2 from "../../public/ig-2.png";
import ig3 from "../../public/ig-3.jpeg";
import ig4 from "../../public/ig-4.jpeg";
import ig5 from "../../public/ig-5.png";
import ig6 from "../../public/ig-6.jpeg";

const images = [ig1, ig2, ig3, ig4, ig5, ig6];

export const InstaLayout: FC = () => {
  return (
    <section className="relative mx-3 flex flex-col items-center justify-center gap-5 md:flex-row">
      <a href="https://intagram.com">
        <Instagram
          color="inherit"
          fontSize="large"
          className="md:absolute md:top-10 md:left-10"
        />
      </a>
      <article className="flex flex-col items-center md:items-start">
        <h1 className="text-4xl font-light ">Roastery grammed</h1>
        <p className="font-thin">
          Follow along for new events, products and more.
        </p>
      </article>
      <figure className="mt-10 h-96 w-96">
        <a href="https://intagram.com">
          <Image
            src={igMain}
            alt="Coffee"
            layout="responsive"
            objectFit="cover"
            objectPosition="bottom"
          />
        </a>
      </figure>
      <div className="grid grid-cols-2 grid-rows-3 gap-5 md:grid-cols-3 md:grid-rows-2">
        {images.map((img) => (
          <figure key={img.src} className="h-36 w-36">
            <a href="https://intagram.com">
              <Image src={img} alt="img from insta" />
            </a>
          </figure>
        ))}
      </div>
    </section>
  );
};
