export const httpError = (res, status, message) => {
  res.status(status).json({
    status: false,
    message: message,
  });
};
