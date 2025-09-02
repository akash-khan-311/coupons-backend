import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { CouponServices } from "./coupons.service";
import httpStatus from "http-status";

const createCoupon = catchAsync(async (req, res) => {
  const result = await CouponServices.createCouponsIntoDB(req.body);
  if (result) {
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Coupon created successfully",
      data: result,
    });
  }
});

const getAllCoupons = catchAsync(async (req, res) => {
  const result = await CouponServices.getCouponsFromDb();
  if (result) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Coupons fetched successfully",
      data: result,
    });
  }
});

export const deleteCoupon = catchAsync(async (req, res) => {
  const code = req.params.code;
  const result = await CouponServices.deleteCouponsFromDb(code);
  if (result) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Coupon deleted successfully",
      data: result,
    });
  }
});

export const applyCoupon = catchAsync(async (req, res) => {
  const { code } = req.body;
  const result = await CouponServices.applyCouponOnDB(code);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Coupon applied successfully",
    data: result,
  });
});

const getCouponReport = catchAsync(async (req, res) => {
  const result = await CouponServices.getCouponReportFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Coupon report fetched successfully",
    data: result,
  });
});
export const couponsController = {
  createCoupon,
  getAllCoupons,
  deleteCoupon,
  applyCoupon,
  getCouponReport,
};
