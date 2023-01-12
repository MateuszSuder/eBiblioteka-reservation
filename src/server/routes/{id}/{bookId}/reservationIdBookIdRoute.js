import express from "express";
import createNewReservation from "../../../../services/reservation/createNewReservation.js";
import withAuth from "../../../../framework/middlewares/withAuth.js";
const router = express.Router({mergeParams: true});

router.post("/", withAuth({ role: "USER" }), createNewReservation);

export default router;