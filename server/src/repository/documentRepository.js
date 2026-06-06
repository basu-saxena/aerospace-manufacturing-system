import Document from "../models/document.js";

const getByOrderId = async (id) => {
  return await Document.findOne({
    orderId: id,
  });
};

const uploadDrawing = async (id, drawings) => {
  const doc = await getByOrderId(id);
  if (!doc) {
    await Document.create({
      orderId: id,
      drawings: drawings,
    });
  } else {
    await Document.findByIdAndUpdate(doc._id, {
      $push: {
        drawings: {
          $each: drawings,
        },
      },
    });
  }
};

const uploadDocuments = async (id, documents) => {
  const doc = await getByOrderId(id);
  if (!doc) {
    await Document.create({
      orderId: id,
      documents: documents,
    });
  } else {
    await Document.findByIdAndUpdate(doc._id, {
      $push: {
        documents: {
          $each: documents,
        },
      },
    });
  }
};

export default {
  uploadDocuments,
  uploadDrawing,
};
