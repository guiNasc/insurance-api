const { Router } = require("express");
const bodyParserMiddleware = require("body-parser");
const corsMiddleware = require("cors");

const insuranceController = require("../controllers/insurance.controller");
const errorMiddleware = require("../middleware/error");

const router = Router();

router.use(
  corsMiddleware({
    corsOptions: {
      origin: process.env.CORS_ORIGIN,
    },
  })
);

router.use(bodyParserMiddleware.json());
router.post("/api/insurance/evaluation", insuranceController.evaluate);
router.use(errorMiddleware);

module.exports = router;
