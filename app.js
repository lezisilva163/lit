const express = require("express");
const router = require('./router');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())
app.use(router);

(async () => {
  const database = require('./database');

  try {
      const resultado = await database.sync();
  } catch (error) {
      console.log(error);
  }
})();



app.listen(port, function () {
  console.log(`Example app listening on port http://localhost:${port}!`);
});