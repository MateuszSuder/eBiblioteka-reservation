import genericErrorResponse from "../../utils/genericErrorResponse.js";

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

    res.status(501).send(`Get user reservations ${userId}`);
}