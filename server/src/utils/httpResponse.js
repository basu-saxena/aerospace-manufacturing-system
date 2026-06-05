export const httpResponse = (res, status, message, data = null) => {
  return res.status(status).json({
    status: true,
    message,
    data,
  });
};
