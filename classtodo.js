export class Todo {
  constructor(content) {
    this.content = content;
    this.status = false;
  }
  complete() {
    this.status = true;
  }
}

export const todos = [];
