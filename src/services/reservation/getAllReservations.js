/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
import ReservationSchema from "../../schemas/ReservationSchema.js";
import mongooseErrorResponse from "../../utils/mongooseErrorResponse.js";

export default async (req, res) => {
    try {
        const reservations = await ReservationSchema.find();

        res.status(200).json({reservations});
    } catch (e) {
        return mongooseErrorResponse(res, e);
    }
}