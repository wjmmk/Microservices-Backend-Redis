exports.success = (req, res, message, status) => {
    let statusMessage = message || '';

    res.status(200).send({
        error: false,
        status:status,
        body: message
    });
}
exports.error = (req, res, message, status) => {
    let statusMessage = message || 'Internal Server Error';

    res.status(500).send({
        error: false,
        status:status,
        body: message
    });
}