const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const app = express();
const cors = require('cors');
// data base connection
const db = require('./config/connection');
const homeRouter = require('./router/home');
const { errorHandler, notFound } = require('./middleware/errorMiddleware');
// .env config
dotenv.config();
// react cros config
const corsOptions = {
  origin: process.env.ORIGIN,
  credentials: true, // access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

//sever config
app.use(express.static(path.join(__dirname, '../Client/build/')));

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// redirects to roughts
app.use('/api', homeRouter);
// for sever
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Client/build/index.html'));
});
app.use(errorHandler);
app.use(notFound);

// data connection call
db.connect((err) => {
  if (err) console.log(`Connection error${err}`);
  else console.log('Datebase Connected to port 27017');
});
app.listen(process.env.PORT, () => {
  console.log(`'sever started running on localhost:${process.env.PORT}`);
});
