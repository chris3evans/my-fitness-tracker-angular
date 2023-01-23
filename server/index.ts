const Express = require('express');
const app = Express();
const Router = require('./router');
const cors = require('cors');
const PORT = 4000;

app.use(Express.json());

app.use(cors());

app.use(Router);

app.listen(PORT, () => {
  console.log(`Express server is running on port: ${PORT} 📗📗📗`);
});
