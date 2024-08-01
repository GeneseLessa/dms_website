import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup.string().required("Senha requerida"),
});

const validateLogin = async (req, res, next) => {
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    // TODO: add log in here
    return res.status(500).json({ error: true, result: err.errors });
  }
};

export default validateLogin;
