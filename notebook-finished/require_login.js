module.exports = (req, res, next) => {
    console.log(req.user);
    if (req.user === undefined) {
        res.send(401);
    } else {
        next();
    }
}