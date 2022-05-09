export default class Button {
  constructor(letter, additionalLetter, type, keyCode) {
    this.letter = letter;
    this.additionalLetter = additionalLetter;
    this.type = type;
    this.keyCode = keyCode;
    this.buttonElement = document.createElement('button');
  }

  render() {
    this.buttonElement.innerHTML = this.letter;
    this.buttonElement.classList.add('button');
    this.buttonElement.classList.add(`button_${this.type}`);
    this.attachEvents();
    return this.buttonElement;
  }

  attachEvents() {
    this.keydownHandler = this.keydownHandler.bind(this)
    this.keyupHandler = this.keyupHandler.bind(this)

    document.addEventListener(`keydown:${this.keyCode}`, this.keydownHandler)
    document.addEventListener(`keyup:${this.keyCode}`, this.keyupHandler)
  }

  detachEvents() {
    document.removeEventListener(`keydown:${this.keyCode}`, this.keydownHandler)
    document.removeEventListener(`keyup:${this.keyCode}`, this.keyupHandler)
  }

  keydownHandler(event) {
    this.buttonElement.classList.add('button_pressed');
    document.dispatchEvent(new CustomEvent('textarea:input', {
      detail: {
        letter: event.detail.isShift || event.detail.isCapsLock ? this.additionalLetter : this.letter
      }
    }));
  }

  keyupHandler(event) {
    this.buttonElement.classList.remove('button_pressed');
  }
}
