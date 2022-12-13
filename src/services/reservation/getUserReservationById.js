import genericErrorResponse from "../../utils/genericErrorResponse.js";

/**
 * @param {e.Request} req
 * @param {e.Response} res
 * @return {Promise<*>}
 */
export default async (req, res) => {
    return genericErrorResponse(res, [req.path, "UserById"], 501);
}