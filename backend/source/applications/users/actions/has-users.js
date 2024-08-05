import users from "../models/users.js";

export default async (_, res) => {
  try {
    const usersFound = await users.exists({});
    return res.json({ error: false, result: usersFound ? true : false });
  } catch (err) {
    return res
      .status(500)
      .json({ error: true, result: "Serviço não disponível" });
  }
};
