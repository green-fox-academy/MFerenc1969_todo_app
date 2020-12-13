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
  console.log(args);
  if (argType === true && valid === true && must === true) {
    console.log("helyes");
  } else {
    console.log("Nem támogatott agrumentum!");
    render();
  }
}
