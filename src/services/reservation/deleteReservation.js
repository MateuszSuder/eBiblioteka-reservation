import genericErrorResponse from "../../utils/genericErrorResponse.js";
import ReservationSchema from "../../schemas/ReservationSchema.js";
import mongooseErrorResponse from "../../utils/mongooseErrorResponse.js";

/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
export default async (req, res) => {
    const { id: reservationId } = req.params;

    try {
        // Find reservation with given id (reservationId)
        const reservation = await ReservationSchema.findOne(
            {_id: reservationId}
        )

        if(!reservation) return genericErrorResponse(res, "Rezerwacja nieznaleziona", 404);

        if(req.user && req.user.role === "USER" && reservation.userId.toString() !== req.user._id) return genericErrorResponse(res, null, 403);

        await ReservationSchema.findOneAndUpdate(
            {_id: reservationId},
            {status: "CANCELLED"}
        )

        res.status(200).send(null);
    } catch (e) {
        return mongooseErrorResponse(res, e);
    }
}