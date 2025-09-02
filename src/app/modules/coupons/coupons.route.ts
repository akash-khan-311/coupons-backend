import express from "express";
import { couponsController } from "./coupons.controller";
const router = express.Router();

router.post(
  "/",

  couponsController.createCoupon
);
router.delete(
  "/:code",

  couponsController.deleteCoupon
);
router.post(
  "/:apply",

  couponsController.applyCoupon
);

router.get("/report", couponsController.getCouponReport);

router.get("/", couponsController.getAllCoupons);

export const CouponsRoutes = router;
