import AppError from "../../errors/AppError";
import { TCupons } from "./coupons.interface";
import { Coupon } from "./coupons.model";
import httpStatus from "http-status";

export const createCouponsIntoDB = async (payload: TCupons) => {
  // Check if same user already has an expense with this title
  const existingCoupons = await Coupon.findOne({
    code: payload.code,
    discountPercentage: payload.discountPercentage,
    isDeleted: false,
  });

  if (existingCoupons) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Coupon with this code already exists"
    );
  }

  // Create new expense
  const newCoupon = await Coupon.create(payload);
  return newCoupon;
};

export const getCouponsFromDb = async () => {
  const result = await Coupon.find({ isDeleted: false, isActive: true });
  return result;
};

export const deleteCouponsFromDb = async (code: string) => {
  const existingCoupon = await Coupon.findOne({
    code: code,
    isDeleted: false,
  });

  if (!existingCoupon) {
    throw new AppError(httpStatus.BAD_REQUEST, "Coupon not found");
  }
  const result = await Coupon.findOneAndUpdate(
    { code: code },
    { isDeleted: true },
    { new: true }
  );
  return result;
};

export const applyCouponOnDB = async (code: string) => {
  const coupon = await Coupon.findOne({
    code,
    isDeleted: false,
    isActive: true,
  });
  if (!coupon) {
    throw new AppError(httpStatus.BAD_REQUEST, "Coupon not found");
  }
  if (new Date() > coupon.expiryDate) {
    throw new AppError(httpStatus.BAD_REQUEST, "Coupon expired or invalid");
  }
  if (coupon.usedCount >= coupon.maxUsage) {
    throw new AppError(httpStatus.BAD_REQUEST, "Coupon expired or invalid");
  }

  coupon.usedCount += 1;
  await coupon.save();

  return {
    discountPercentage: coupon.discountPercentage,
    remainingUsage: coupon.maxUsage - coupon.usedCount,
  };
};

export const getCouponReportFromDb = async () => {
  const coupons = await Coupon.find({ isDeleted: false });
  return coupons.map((coupon) => {
    const expired = new Date() > coupon.expiryDate;
    return {
      code: coupon.code,
      discountPercentage: coupon.discountPercentage,
      totalUsed: coupon.usedCount,
      remainingUsage: coupon.maxUsage - coupon.usedCount,
      expired,
    };
  });
};

export const CouponServices = {
  createCouponsIntoDB,
  getCouponsFromDb,
  deleteCouponsFromDb,
  applyCouponOnDB,
  getCouponReportFromDb,
};
