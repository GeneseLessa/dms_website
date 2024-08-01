import jwtSimple from "jwt-simple";
import bcrypt from "bcrypt";

import users from "../models/users.js";

const secret = process.env.TOKEN_SECRET;

class Authenticate {
  async _getUser(username) {
    try {
      return await users.findOne({ "credentials.email": username });
    } catch (err) {
      // TODO: add log in here
      console.log(err);
      return;
    }
  }

  async checkLogin(req, res) {
    const { body } = req;
    const user = await this._getUser(body.email);
    const defaultMessage = "Usuário ou senha incorretos";

    if (!user)
      return res.status(400).json({
        error: true,
        result: defaultMessage,
      });

    if (!user.access?.isActive)
      return res.status(500).json({
        error: true,
        result: "O seu usuário encontra-se inativo",
      });

    const passwordsMatch = await bcrypt.compare(
      body.password,
      user.credentials.password,
    );

    if (!passwordsMatch) {
      return res.status(400).json({
        error: true,
        result: defaultMessage,
      });
    }

    // generating token
    const payload = { id: user._id, access: user.access };
    const token = jwtSimple.encode(payload, secret);

    return res.json({ error: false, result: token });
  }
}

export default new Authenticate();
