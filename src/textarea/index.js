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
    document.addEventListener('textarea:del', this.delHandler.bind(this));
    document.addEventListener('textarea:tab', this.tabHandler.bind(this));
  }

  inputHandler(event) {
    this.textarea.value += event.detail.letter;
  }

  removeHandler() {
    this.textarea.value = this.textarea.value.substring(0, this.textarea.value.length - 1);
  }

  delHandler() {
    const currentValue = this.textarea.value;
    const { selectionStart } = this.textarea;

    if (selectionStart > 0 && selectionStart <= currentValue.length) {
      const beforeValue = currentValue.slice(0, selectionStart);
      const afterValue = currentValue.slice(selectionStart + 1, currentValue.length);
      this.textarea.value = beforeValue + afterValue;
      this.textarea.setSelectionRange(selectionStart, selectionStart);
    }
  }

  tabHandler() {
    this.textarea.value = `${this.textarea.value}    `;
    this.textarea.setSelectionRange(this.textarea.value.length - 1, this.textarea.value.length - 1);
  }
}
