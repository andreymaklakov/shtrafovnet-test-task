export const validation = (type: string, label: string, error: string) => {
  if (type === "number") {
    return {
      required: true,
      pattern: {
        value: /^\d+$/,
        message: error,
      },
    };
  } else {
    if (label === "Email") {
      return {
        required: true,
        pattern: {
          value: /^\S+@\S+\.\S+$/g,
          message: "Неверный Email",
        },
      };
    }
    return {
      required: true,
    };
  }
};
