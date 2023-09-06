const express = require('express');
const bodyParser = require('body-parser');
// const getThread = require('./controllers/getThread')
const mainRoutes = require('./routes/mainRoutes')

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.use("/main", mainRoutes);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
