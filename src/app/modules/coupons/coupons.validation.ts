import { z } from "zod";

const couponsValidateionSchema = z.object({
  body: z.object({
    code: z.string().nonempty("Coupon is required"),
    discountPercentage: z
      .number()
      .min(0, "discount Percentage must be at least 0"),
    maxUsage: z.number(),
    expiryDate: z.date(),
  }),
});

export const ExpensesValidation = {
  couponsValidateionSchema,
};
