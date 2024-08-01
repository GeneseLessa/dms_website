import * as yup from "yup";

const userSchema = yup.object().shape({
  credentials: yup.object().shape({
    email: yup
      .string()
      .email("O username precisa ser um e-mail válido")
      .required("E-mail é requerido como username"),
    password: yup
      .string()
      .min(6, "Digite uma senha com o mínimo de 6 caracteres")
      .required("Informe uma senha"),
  }),
});

export default async (req, res, next) => {
  try {
    await userSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ error: true, result: err.errors });
  }
};
