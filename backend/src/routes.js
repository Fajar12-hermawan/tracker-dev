const express = require("express");

const router = express.Router();

const userRouter = require("./modules/user/user.route");
const authRouter = require("./modules/auth/auth.route");
const categoryRouter = require("./modules/category/category.route");
const transactionRoutes = require("./modules/transaction/transaction.route");
const monthlySummaryRouter =require("./modules/monthlySummary/monthlySummary.route");
const NotFound = require("./errors/NotFoundError");


console.log("userRouter:", typeof userRouter);
console.log("authRouter:", typeof authRouter);
console.log("categoryRouter:", typeof categoryRouter);
console.log("transactionRoutes:", typeof transactionRoutes);
console.log("monthlySummaryRouter:", typeof monthlySummaryRouter);

router.use("/categories", categoryRouter);
router.use("/transaction", transactionRoutes);
router.use("/monthly-summary", monthlySummaryRouter);
router.use("/users", userRouter);
router.use("/auth", authRouter);

router.use((req, res) => {
  throw new NotFound("Terjadi kesalahan pada server");
});

module.exports = router;
