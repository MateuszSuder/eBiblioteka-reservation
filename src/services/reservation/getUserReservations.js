import genericErrorResponse from "../../utils/genericErrorResponse.js";
import mongooseErrorResponse from "../../utils/mongooseErrorResponse.js";
import ReservationSchema from "../../schemas/ReservationSchema.js";

/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
export default async (req, res) => {
    const { id: userId } = req.params;

    if(req.user && req.user.role === "USER") {
        const { _id } = req.user;

        if(userId !== _id) {
            return genericErrorResponse(res, null, 403);
        }
    }

    // Find reservations with userId === userId
    try {
        const reservations = await ReservationSchema.find();

        return res.status(200).json({reservations});
    } catch (e) {
        return mongooseErrorResponse(res, e);
    }
}