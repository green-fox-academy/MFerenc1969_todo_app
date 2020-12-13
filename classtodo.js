import { load } from "./load.js";

export class Todo {
  constructor(content, status) {
    this.content = content;
    this.status = status ? status : false;
  }
  complete() {
    this.status = true;
  }
  printTodo(index) {
    console.log(`${index} - [${this.status ? "x" : " "}] ${this.content}`);
  }
}

export const todos = load();
