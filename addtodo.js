import { Todo } from "./classtodo.js";
import { save } from "./save.js";
import { todos } from "./classtodo.js";

export function addTodo(content) {
  if (typeof content !== "string") {
    console.log(
      "Nem lehetséges új feladat hozzáadása: nincs megadva a feladat!"
    );
    return;
  }
  let todo = new Todo(content);
  todos.push(todo);
  save();
}
