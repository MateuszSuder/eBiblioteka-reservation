import genericErrorResponse from "../../utils/genericErrorResponse.js";

/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
export default async (req, res) => {
    const { id: reservationId } = req.params;
    const { _id: userId, role } = req.user;

    // Find reservation with given id (reservationId)

    // Check if reservation belongs to user requesting, but only if his role is user

    if(role === "USER") {
        // ...
    }

    // Return reservations that matches userId

    res.status(501).send(`Delete reservation ${reservationId}`);
}