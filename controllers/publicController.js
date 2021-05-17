
exports.ping = (req, res) => {
    return res.json({ status: true, message: "Service is working..." });
}
