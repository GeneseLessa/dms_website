class GenericRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const created = await this.model.create(data);
    return created;
  }

  async list(filters, fields) {
    return await this.model.find(filters, fields.join(" "));
  }

  async findOne(id, fields) {
    return await this.model.findById(id, fields.join(" "));
  }
}
