import minimist from "minimist";

start();

function render() {
  console.log("Parancssori Todo applikáció");
  console.log("=============================");
  console.log("Parancssori argumentumok:");
  console.log("-l   Kilistázza a feladatokat");
  console.log("-a   Új feladatot ad hozzá");
  console.log("-r   Eltávolít egy feladatot");
  console.log("-c   Teljesít egy feladatot");
}
function start() {
  const args = minimist(process.argv);
  const argType = Object.keys(args).every((arg) => typeof arg === "string");
  const valid = Object.keys(args).every((arg) =>
    ["_", "l", "a", "r", "c"].includes(arg)
  );
  const must = args._.length === 2;
  
  if (argType === true && valid === true && must === true) {
    if (args.l) {
      listTodo();
    } else if (args.a) {
      addTodo();
    } else if (args.r) {
      deleteTodo();
    } else if (args.c) {
      completeTodo();
    } else {
      render();
    }
  } else {
    console.log("Nem támogatott agrumentum!");
    render();
  }
}

function listTodo(params) {
  console.log("listázás");
}
function deleteTodo(params) {
  console.log("törlés");
}
function addTodo(params) {
  console.log("hozzáadás");
}
function completeTodo(params) {
  console.log("kész");
}
