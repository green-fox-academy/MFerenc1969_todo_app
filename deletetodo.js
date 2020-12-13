import { todos } from "./classtodo.js";
import { save } from "./save.js";

export function deleteTodo(index) {
  if (typeof index === "boolean") {
    console.log("Nem lehetséges az eltávolítás : nem adtál meg indexet!");
  } else if (typeof index !== "number") {
    console.log("Nem lehetséges az eltávolítás : a megadott index nem szám");
  } else if (index - 1 >= todos.length) {
    console.log(
      "Nem lehetséges az eltávolítás : túlindexelési probléma adódott!"
    );
  } else {
    todos.splice(index - 1, 1);
    save();
  }
}
