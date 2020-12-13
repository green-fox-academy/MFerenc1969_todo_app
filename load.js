import fs from "fs";

export function load() {
  try {
    return JSON.parse(fs.readFileSync("todos.txt"));
  } catch (error) {
    return [];
  }
}
