import genericErrorResponse from "../../utils/genericErrorResponse.js";
import internalFetcher from "../../http/internalFetcher.js";
import ReservationSchema from "../../schemas/ReservationSchema.js";

/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
export default async (req, res) => {
    const { id: userId, bookId } = req.params;

    if(req.user && req.user._id !== userId) {
        return genericErrorResponse(res, null, 403);
    }

    try {
        // Check if book exists in system
        const book = await internalFetcher("book", "GET", `${bookId}`);
        if(!book) return genericErrorResponse(res, "Książka nieznaleziona", 404);

        const t = new Date();
        t.setDate(t.getDate() + 7 * 2)

        // Create reservation
        const reservation = new ReservationSchema({
            userId,
            bookId,
            validTill: t
        })
        await reservation.save();

        res.status(201).send(reservation);
    } catch (e) {
        return genericErrorResponse(res, "Internal error", 500);
    }
}