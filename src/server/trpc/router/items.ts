import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "../trpc";
import { prisma } from "../../db/client";

export const productRouter = router({
  createProduct: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        img: z.string(),
        category: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const product = await ctx.prisma.item.create({
        data: {
          name: input.name,
          description: input.description,
          category: input.category,
          img: input.img,
        },
      });

      return product;
    }),
  getAllProducts: publicProcedure.query(async ({ ctx }) => {
    const products = await ctx.prisma.item.findMany({
      select: {
        name: true,
        description: true,
        category: true,
        img: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return products;
  }),
});
