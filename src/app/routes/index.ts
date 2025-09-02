import express from "express";
import { CouponsRoutes } from "../modules/coupons/coupons.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/coupons",
    route: CouponsRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
