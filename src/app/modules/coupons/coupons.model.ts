import { model, Schema } from "mongoose";
import { TCupons } from "./coupons.interface";

const couponsSchema = new Schema<TCupons>({
  code: { type: String, required: true, unique: true },
  discountPercentage: { type: Number, required: true },
  maxUsage: { type: Number, required: true },
  usedCount: { type: Number, default: 0 },
  expiryDate: { type: Date, required: true },
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
});

export const Coupon = model<TCupons>("Coupon", couponsSchema);
