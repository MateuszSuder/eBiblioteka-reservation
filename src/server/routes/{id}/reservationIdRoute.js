import express from "express";
import getUserReservations from "../../../services/reservation/getUserReservations.js";
import withAuth from "../../../framework/middlewares/withAuth.js";
import deleteReservation from "../../../services/reservation/deleteReservation.js";
const router = express.Router({mergeParams: true});

router.get("/", withAuth({ role: "USER" }), getUserReservations);
router.delete("/", withAuth({ role: "USER" }), deleteReservation);

export default router;