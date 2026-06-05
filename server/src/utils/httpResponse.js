export const httpResponse = (res, status, message) => {
  res.status(status).json({
    status: true,
    message: message,
  });
};
