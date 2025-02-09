//connect to mongodb databse server
const user = process.env.USR;
const dbp = process.env.DBP;
const database = process.env.DB;
const localUrl = "mongodb://localhost:27017/" + database;
const DB_CONNECTION_URL =
  "mongodb+srv://" + user + ":" +
  dbp +
  "@cluster0.nvcjjqq.mongodb.net/" +
  database;

export { DB_CONNECTION_URL, localUrl, database };