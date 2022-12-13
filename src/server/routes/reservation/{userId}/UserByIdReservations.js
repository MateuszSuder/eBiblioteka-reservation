import express from "express";
import getUserReservationById from "../../../../services/reservation/getUserReservationById.js";

const router = express.Router();

router.get("/", getUserReservationById);

export default router;