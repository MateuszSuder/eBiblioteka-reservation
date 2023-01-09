/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
export default async (req, res) => {
    // Return all reservations

    res.status(501).send(`Get all reservations`);
}