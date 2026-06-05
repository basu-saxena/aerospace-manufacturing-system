export const httpResponse = (res, status, message, data) => {
  res.status(status).json({
    status: true,
    message,
    data,
  });
};
