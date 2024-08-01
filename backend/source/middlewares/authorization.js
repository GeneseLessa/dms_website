import jwt from "jwt-simple";

class Authorization {
  constructor() {
    this.secret = process.env.TOKEN_SECRET;
  }

  _decode(token) {
    try {
      jwt.decode(token, this.secret);
    } catch (_) {
      return { error: true };
    }

    return { error: false };
  }

  exec(req, res, next) {
    const { token } = req.headers;
    const errorObject = { error: true, result: "Autorização negada" };

    if (!token) return res.status(400).json(errorObject);

    const rawToken = token.split(" ")[1];
    const decoded = this._decode(rawToken);

    if (decoded?.error) return res.status(400).json(errorObject);

    next();
  }
}

export default Authorization;
