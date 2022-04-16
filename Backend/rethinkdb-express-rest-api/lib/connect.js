const r = require("rethinkdb");
// TODO Marcus!!
var databaseName = "DonerTagebuch";
var userTable = "Users";
var orderTable = "Orders";

module.exports.connect = function (req, res, next) {
  let count = 0;

  //Connect to Database
  (function _connect() {
    r.connect({ host: "localhost", port: 28015 }, (error, connection) => {
      if (
        error &&
        error.name === "ReqlDriverError" &&
        error.message.indexOf("Could not connect") === 0 &&
        ++count < 31
      ) {
        console.log(error);
        setTimeout(_connect, 1000);
        return;
      }

      req._rdb = connection;
      init(req._rdb);
      next();
    });
  })();
};

//Init Method
function init(connection) {
  createDatabase(connection, () => {
    createUserTable(connection, () => {
      createOrderTable(connection, () => {});
    });
  });
}

//Method to create new Database
function createDatabase(connection, callback) {
  r.dbList()
    .contains(databaseName)
    .do(function (containsDb) {
      return r.branch(containsDb, { created: 0 }, r.dbCreate(databaseName));
    })
    .run(connection, function (error) {
      callback(error);
    });
}

//Method to create User Table
function createUserTable(connection, callback) {
  r.db(databaseName)
    .tableList()
    .contains(userTable)
    .do(function (containsTable) {
      return r.branch(
        containsTable,
        { created: 0 },
        r.db(databaseName).tableCreate(userTable)
      );
    })
    .run(connection, function (error) {
      callback(error);
    });
}

//Method to create Diary Table
function createOrderTable(connection, callback) {
  r.db(databaseName)
    .tableList()
    .contains(orderTable)
    .do(function (containsTable) {
      return r.branch(
        containsTable,
        { created: 0 },
        r.db(databaseName).tableCreate(orderTable)
      );
    })
    .run(connection, function (error) {
      callback(error);
    });
}

module.exports.close = function (req, res, next) {
  req._rdb.close();
};
