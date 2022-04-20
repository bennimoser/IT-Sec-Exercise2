const express = require("express");
const router = express.Router();
const parser = require("body-parser");

const app = express();
const cors = require("cors");
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

const r = require("rethinkdb");
const { response } = require("../app");
var databaseName = "TestDB";
var orderTable = "Orders";

router.get("/getOrder", (request, response) => {
  let orderid = request.query.OrderId;
  console.log("Request for Order Nr:" + orderid);
  let id = Math.floor(orderid);
  r.db(databaseName)
    .table(orderTable)
    .filter({ id: id })
    .run(request._rdb)
    .then((result) => result.toArray())
    .then((endresult) => {
      response.json(endresult);
      console.log("Order found and returned");
    })
    .catch((error) => console.log(error));
});

// Just for Dummy Data creation
router.get("/getDummyData", (request, response) => {
  for (let i = 0; i < 10; i++) {
    let orderid = Math.floor(Math.random() * 100000) + 100000;
    let creditcardnumber =
      Math.floor(Math.random() * 10000000000000000) + 1000000000000000;
    let till = "12/23";
    let cvv = Math.floor(Math.random() * 100) + 100;
    let entry = {
      id: orderid,
      creditcardnumber: creditcardnumber,
      till: till,
      cvv: cvv,
    };
    r.db(databaseName)
      .table(orderTable)
      .insert(entry)
      .run(request._rdb)
      .then((result) => {})
      .catch((error) => console.error(error));
  }
  let data = { message: "Angelegt" };
  console.log("New Entry created");
  response.json(data);
});

module.exports = router;
