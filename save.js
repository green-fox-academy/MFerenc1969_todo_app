import fs from "fs";
import { todos } from "./classtodo.js";

export function save() {
  try {
    fs.writeFileSync("todos.txt", JSON.stringify(todos));
  } catch (error) {
    console.log("Nem sikerült menteni: " + error);
  }
}
