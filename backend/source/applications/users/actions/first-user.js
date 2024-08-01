import user from "../models/users.js";

export default async (req, res) => {
  try {
    if (await user.exists({})) {
      return res.status(400).json({
        error: true,
        message: "Já existem usuários no sistema",
      });
    }

    const { body } = req;

    const userCreated = await user.create({
      ...body,
      access: { isRoot: true },
    });

    return res.json({ error: false, result: userCreated });
  } catch (err) {
    // TODO: add log in here
    console.log(err);

    return res.status(500).json({
      error: true,
      message: "Não foi possível criar o usuário",
    });
  }
};
