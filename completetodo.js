import { todos } from "./classtodo.js";
import { save } from "./save.js";

export function completeTodo(index) {
  if (typeof index === "boolean") {
    console.log(
      "Nem lehetséges a feladat végrehajtása: nem adtál meg indexet!"
    );
  } else if (typeof index !== "number") {
    console.log(
      "Nem lehetséges a feladat végrehajtása: a megadott index nem szám"
    );
  } else if (index - 1 >= todos.length) {
    console.log(
      "Nem lehetséges a feladat végrehajtása: túlindexelési probléma adódott!"
    );
  } else {
    todos[index - 1].status = true;
    save();
  }
}
