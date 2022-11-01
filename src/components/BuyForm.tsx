import { Field, Form, Formik } from "formik";
import { FC } from "react";

export const BuyForm: FC = () => {
  return (
    <div>
      <Formik
        initialValues={{
          quantity: 1,
          size: 100,
          grindType: "Whole bean",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="flex flex-col">
          <label
            htmlFor="quantity"
            className="mb-2 font-thin uppercase tracking-widest"
          >
            Quantity
          </label>
          <Field
            type="number"
            name="quantity"
            className="mb-3 w-16 bg-transparent text-sm font-light"
          />
          <label
            htmlFor="size"
            className="mb-2 font-thin uppercase tracking-widest"
          >
            Size
          </label>
          <Field
            as="select"
            name="size"
            className="mb-3 w-16 bg-transparent text-sm font-light"
          >
            <option value="100">100g</option>
            <option value="250">250g</option>
            <option value="500">500g</option>
            <option value="1000">1000g</option>
          </Field>
          <label
            htmlFor="grindType"
            className="mb-2 font-thin uppercase tracking-widest"
          >
            Grind Type
          </label>
          <Field
            as="select"
            name="grindType"
            className="mb-5 w-40 bg-transparent text-sm font-light"
          >
            <option value="Whole bean">Whole bean</option>
            <option value="Espresso">Espresso</option>
            <option value="Aeropress">Aeropress</option>
            <option value="Single cup pourover">Single cup pourover</option>
            <option value="Cold Brew">Cold Brew</option>
          </Field>
          <button
            type="submit"
            className="h-10 w-32 bg-white text-sm font-light uppercase tracking-wide text-black transition-colors duration-500 hover:bg-black hover:text-white"
          >
            Add to cart
          </button>
        </Form>
      </Formik>
    </div>
  );
};
