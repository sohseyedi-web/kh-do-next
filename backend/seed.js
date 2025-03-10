const Application = require("./app/server");
const { CategoryModel } = require("./app/models/category");
const categories = require("./data/db.category.json");

(async () => {
  new Application();
  await CategoryModel.insertMany(categories);
})()
  .then(() => {
    console.log("DATA INSERTED SUCCESSFULLY.");
    console.log("NOW RUN npm run dev AND TEST THE APIs");
  })
  .catch((err) => console.log("DATA INSERTION FAILED: ", err));
