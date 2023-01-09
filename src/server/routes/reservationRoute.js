import express from "express";
import getAllReservations from "../../services/reservation/getAllReservations.js";
import withAuth from "../../framework/middlewares/withAuth.js";

const router = express.Router();

router.get("/", withAuth({ role: "LIBRARIAN" }), getAllReservations);

export default router;