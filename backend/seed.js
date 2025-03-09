const users = require("./data/db.users.json");
const { UserModel } = require("./app/models/user");
const Application = require("./app/server");

(async () => {
  new Application();
  await UserModel.insertMany(users);
})()
  .then(() => {
    console.log("DATA INSERTED SUCCESSFULLY.");
    console.log("NOW RUN npm run dev AND TEST THE APIs");
  })
  .catch((err) => console.log("DATA INSERTION FAILED: ", err));
