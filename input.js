let connection;

const setupInput = (conn) => {
  connection = conn;
};
const handleUserInput = require("./handleUserInput");
const setupInput = require("./setupInput");

if (key === 'w') {
  clearInterval(func);
  setInterval(upkey)
}
if (key === 'a') {
  clearInterval(func);
  setInterval(leftkey)
}
if (key === 's') {  
  clearInterval(func);
  setInterval(downkey)
}
if (key === 'd') {
  clearInterval(func);
  setInterval(rightkey)
};
if (key === 't') {
  "Say:Howdy";
}
if (key === 'r') {
  "Say:See ya";
}
if (key === 'q') {
  "Say: Merry Christmas";
};