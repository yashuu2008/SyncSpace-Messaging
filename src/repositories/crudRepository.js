export default function crudRepository(model) {
  // here we write set of methods to perform CRUD operations on the schema passed as argument
  return {
    create: async function (data) {
      const newdoc = await model.create(data);
      return newdoc;
    },
    getAll: async function () {
      const allDocs = await model.find();
      return allDocs;
    },
    getById: async function (id) {
      const doc = await model.findById(id);
      return doc;
    },
    delete: async function (id) {
      const deletedDoc = await model.findByIdAndDelete(id);
      return deletedDoc;
    },
    update: async function (id, data) {
      const updatedDoc = await model.findByIdAndUpdate(id, data, { new: true });
      return updatedDoc;
    },
  };
}
