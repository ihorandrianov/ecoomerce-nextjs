// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { authRouter } from "./auth";
import { productRouter } from "./items";

export const appRouter = router({
  auth: authRouter,
  items: productRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
