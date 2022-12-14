const net = require("net");
const connect = require('./connect');



// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log(`Server says: Connected Successfully`)
  });
  conn.on("data", (data) => {
    console.log(data.toString())
    conn.end()
  });
  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;