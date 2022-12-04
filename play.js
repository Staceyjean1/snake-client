const net = require("net");
const { stdin } = require("process");

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
  setInterval(() => {
    conn.write("Move: up");
    conn.write('Move: up');
    // conn.write("Move: left");
    // conn.write('Move: left');
  },"2000")
  
    console.log(`Server says: Connected Successfully`)
 
    const setupInput = function () {
      const stdin = process.stdin;
      stdin.setRawMode(true);
      stdin.setEncoding("utf8");
      stdin.resume();
      stdin.on("data", handleUserInput);
      return stdin;
    };
  });

  const handleUserInput = function () {
    stdin.on('data', (key) => {
    process.stdout.write('.');
    });
  };
  return conn;
};
  


console.log("Connecting ...");
connect();

module.exports = connect;