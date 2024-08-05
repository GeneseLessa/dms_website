import classificateError from "./errors.js";

class CRUDActions {
  constructor(model) {
    this.model = model;
  }

  async create(req, res) {
    const { body } = req;

    try {
      const result = await this.model.create(body.values);
      return res.json({ failed: false, result });
    } catch (error) {
      return res.json(classificateError(error));
    }
  }

  async read(req, res) {
    const { body } = req;

    try {
      const result = await this.model
        .find(body.filters || null, body.fields || "")
        .populate(body.populate || null, body.fieldsToPopulate || "")
        .sort(body.sort || null);
      res.json({ failed: false, result });
    } catch (err) {
      res.status(500).json({
        failed: true,
        message: "Não foi possível processar a requisição",
      });
    }
  }

  async update(req, res) {
    const { body } = req;

    try {
      const result = await this.model.findByIdAndUpdate(body.id, body.values, {
        new: true,
      });
      res.json({ failed: false, result });
    } catch (error) {
      res.json(classificateError(error));
    }
  }

  async delete(req, res) {
    const { body } = req;

    try {
      await this.model.delete(body.id);
      res.json({ failed: false });
    } catch (_error) {
      res.json({
        failed: true,
        message: "Não foi possível excluir o registro",
      });
    }
  }

  async details(req, res) {
    const { body } = req;

    try {
      const result = await this.model.findById(body.id, body.fields || "");
      res.json({ failed: false, result });
    } catch (_error) {
      res.json({
        failed: true,
        message: "Não foi possível buscar o registro",
      });
    }
  }
}

export default CRUDActions;
