class Task {
  date = new Date();

  id = `${Date.now()}`.slice(-10);

  checked = false;

  constructor(description) {
    this.description = description;
  }
}
export default Task;
