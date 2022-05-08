export default class Textarea {
  render() {
    this.textarea = document.createElement('textarea');
    this.textarea.classList.add('textarea');
    const container = document.querySelector('.container');
    container.append(this.textarea);
    this.attachEvents();
  }

  attachEvents() {
    document.addEventListener('textarea:input', this.inputHandler.bind(this));
    document.addEventListener('textarea:remove', this.removeHandler.bind(this));
  }

  inputHandler(event) {
    this.textarea.value += event.detail.letter
  }

  removeHandler() {
    this.textarea.value = this.textarea.value.substring(0, this.textarea.value.length - 1)
  }
}
