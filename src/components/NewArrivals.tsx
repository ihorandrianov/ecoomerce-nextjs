import { FC } from "react";
import { ActiveLink } from "./ActiveLink";
import { ProductCard } from "./ProductCard";

export const NewArrivals: FC = () => {
  return (
    <section className="mx-auto flex flex-col-reverse items-center justify-evenly gap-5 md:flex-row">
      <ProductCard />
      <ProductCard />
      <article className="flex flex-grow flex-col items-center justify-center">
        <h1 className="mb-3 text-xs font-light uppercase">New arrivals</h1>
        <p className=" mb-3 text-3xl font-extralight">Freshest of the Fresh</p>
        <p className="mb-3 text-center text-sm font-light md:max-w-[500px]">
          Featuring the freshest in our beautiful range of seasonal coffees
          sourced throughout the year.
        </p>
        <ActiveLink href="/shop">Shop now</ActiveLink>
      </article>
    </section>
  );
};
