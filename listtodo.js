import { todos } from "./classtodo.js";
import { Todo } from "./classtodo.js";

export function listTodo() {
  if (todos.length === 0) {
    console.log("Nincs mára tennivalód! :)");
  } else {
    todos.forEach((todo, index) => {
      let todoObj = new Todo(todo.content, todo.status);
      todoObj.printTodo(index + 1);
    });
  }
}
