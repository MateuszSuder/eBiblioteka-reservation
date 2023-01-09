import genericErrorResponse from "../../utils/genericErrorResponse.js";

/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
export default async (req, res) => {
    const { id: userId } = req.params;
    const { _id } = req.user;

    if(req.user.role === "USER") {
        if(userId !== _id) {
            return genericErrorResponse(res, null, 403);
        }
    }

    // Find reservations with userId === userId

    res.status(501).send(`Block user ${id}`);
}