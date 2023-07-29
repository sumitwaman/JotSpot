const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Harryisagoodboy';

const fetchuser = (req, res, next) => {
    //get the user from jwt token and add id to req object

    const token = req.header('auth-token');
    console.log("token ", token);

    if (!token) {
        console.log("first ")
        res.status(401).send({ error: "Please authenticate using a valid token." });
    }
    try {

        const data = jwt.verify(token, JWT_SECRET);
        console.log("data", data)
        req.user = data.user;
        next();
    } catch (error) {

        res.status(401).send({ error: "Please authenticate using a valid token." });
    }
}

module.exports = fetchuser;