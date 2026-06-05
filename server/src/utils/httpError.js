export const httpError = (res, status, message) => {
  return res.status(status).json({
    status: false,
    message: message,
  });
};
