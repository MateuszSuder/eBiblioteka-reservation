import genericErrorResponse from "../../utils/genericErrorResponse.js";
import internalFetcher from "../../http/internalFetcher.js";

/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
export default async (req, res) => {
    const { userId, bookId } = req.params;

    // Check if book exists in system
    const book = await internalFetcher("book", "GET", `/${bookId}`)

    if(!book) return genericErrorResponse(res, null, 404);

    // Create reservation

    res.status(501).send(`Create reservation ${userId} ${bookId}`);
}