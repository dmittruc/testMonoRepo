/** @format */

require("dotenv").config();

const { initApp, initSequelize } = require("./utils/init");

const PORT = process.env.PORT || 5000;

const app = initApp(__dirname);

const start = async () => {
  try {
    await initSequelize();
    app.listen(PORT, () =>
      console.log(`Server started on http://localhost:${PORT}`)
    );
  } catch (e) {
    console.log("Databse initialization error", e);
  }
};

start();
