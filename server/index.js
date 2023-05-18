const app = require("./app");
const mongoose = require("mongoose");
const port = 8000;
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.acacrp7.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB connection succesful! "));
app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
