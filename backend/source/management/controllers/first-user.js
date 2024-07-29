import user from "../models/users.js";

class FirstUser {
  constructor() {
    this.model = user;
  }

  async _checkExistance() {
    try {
      const exists = await this.model.exists({});
      return exists;
    } catch (err) {
      // TODO: put log in here
      console.log(err);
    }

    return false;
  }

  async firstUser(req, res) {
    const isSomeUser = await this._checkExistance();

    if (isSomeUser) {
      return res.status(500).json({
        error: true,
        result: "Já existem usuários cadastrados no sistema",
      });
    }

    const data = req.body;

    try {
      const created = await this.model.create(data);
      return res.json({ error: false, result: created });
    } catch (err) {
      // TODO: add log in here
      return res.status(500).json({ error: true, result: err });
    }
  }
}

export default new FirstUser();
