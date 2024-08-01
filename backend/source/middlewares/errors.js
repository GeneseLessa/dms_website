class ErrorClassifier {
  constructor() {
    this.errorHandlers = [
      new UniqueFieldErrorHandler(),
      new ValidationErrorHandler(),
      new UnknownErrorHandler(),
    ];
  }

  classify(err) {
    for (const handler of this.errorHandlers) {
      if (handler.canHandle(err)) {
        return handler.handle(err);
      }
    }

    // Fallback in case no handler is found
    return {
      failed: true,
      message: "Houve um erro ao tentar processar a ação",
    };
  }
}

class UniqueFieldErrorHandler {
  canHandle(err) {
    return err.code === 11000;
  }

  handle(err) {
    let field = Object.keys(err.keyValue)[0];

    try {
      field = field.split(".")[1].toLowerCase();
    } catch (error) { }

    const message = `O ${field} informado já está em uso no sistema`;
    return { failed: true, message };
  }
}

class ValidationErrorHandler {
  canHandle(err) {
    return err.name === "ValidationError";
  }

  handle(err) {
    const message = err.message.split(": ").pop();
    return { failed: true, message };
  }
}

class UnknownErrorHandler {
  canHandle(err) {
    // TODO: put log in here
    console.log(err);
    return true; // Always handles if no other handler matches
  }

  handle(_err) {
    const message = "Houve um erro ao tentar processar a ação";
    return { failed: true, message };
  }
}

export default (err) => {
  const classifier = new ErrorClassifier();
  return classifier.classify(err);
};
