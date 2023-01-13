import ReservationSchema from "../../schemas/ReservationSchema.js";
import mongooseErrorResponse from "../../utils/mongooseErrorResponse.js";

/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
export default async (req, res) => {
    const { id: reservationId } = req.params;
    const { status } = req.body;
    try {
        const reservations = await ReservationSchema.findOneAndUpdate({ _id: reservationId }, { status: status });

        res.status(200).json({reservations});
    } catch (e) {
        return mongooseErrorResponse(res, e);
    }
}