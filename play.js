const net = require("net");

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
    conn.write("Name: SJB");
    // conn.write("Move: up");
  });
conn.on("connect", () => {
    console.log(`Server says: Connected Successfully`)
    // conn.write("Name: SJB");
    conn.write("Move: up");
    conn.write('Move: up');
    conn.write("Move:left");
    conn.write("Move:left");
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