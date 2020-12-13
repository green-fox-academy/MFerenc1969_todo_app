import minimist from "minimist";
import { render } from "./render.js";
import {addTodo} from "./addtodo.js";
import {listTodo} from "./listtodo.js";
import {completeTodo} from "./completetodo.js";
import {deleteTodo} from "./deletetodo.js"

start();

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
      addTodo(args.a);
    } else if (args.r) {
      deleteTodo(args.r);
    } else if (args.c) {
      completeTodo(args.c);
    } else {
      render();
    }
  } else {
    console.log("Nem támogatott agrumentum!");
    render();
  }
}



