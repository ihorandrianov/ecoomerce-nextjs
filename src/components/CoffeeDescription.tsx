import { FC } from "react";

export const CoffeeDescription: FC = () => {
  return (
    <section className="flex items-center justify-center">
      <article>
        <span className="text-xs font-semibold uppercase tracking-widest">
          Roast level 2 - Light/Medium
        </span>
        <h1>High elevation Oaxacan coffee gives rise to full flavors</h1>
        <h2>
          A smooth and rich coffee perfect for any morning, any brew method
        </h2>
        <p>
          Sierra Mixteca refers to a mountain range in between Oaxaca and
          Puebla. It is geologically one of the oldest regions in Mexico; its
          landscape scarred by ancient volcanic activity, deep canyons and
          ancient river beds. In the highlands of this region, there are
          hundreds of small-scale coffee farmers. Most are descendants of the
          Mixteca tribe. They produce their coffee on no more than 2-3 hectares
          along side honey and fruits. This is a community lot that comes from
          about 70 of these producers.
        </p>
        <p>
          Oaxacan coffees bring with them a wide range of flavors: distinct nut
          notes like cashew and hazelnut, saturated sweetness like cane sugar or
          caramel, richness like drinking chocolate and bright yellow fruit
          acidity. We found the most prominent notes to be creamy hazelnut
          butter, bright clementine and cane sugar making for a full, creamy
          morning brew. We recommend a 1:16 brew ratio, filtered water at
          208-210℉, a medium grind, and a 3-3.5 minute brew cycle.
        </p>
      </article>
      <article className="relative">
        <div className="absolute"></div>
        <h1>Light Brown</h1>
        <p>
          Reliable, all-day brown coffees balance sweet and toasty with a hint
          of excitement, creating well-liked flavor profiles of milk chocolate,
          caramels, and vanilla ice cream
        </p>
      </article>
    </section>
  );
};
