const app = require("./app");          // app.js ở ngoài
const config = require("./app/config"); // app/config/index.js

const PORT = config.app.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
