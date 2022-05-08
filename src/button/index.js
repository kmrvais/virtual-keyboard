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
    document.addEventListener(`keydown:${this.keyCode}`, this.keydownHandler.bind(this))
    document.addEventListener(`keyup:${this.keyCode}`, this.keyupHandler.bind(this))
  }

  detachEvents() {
    document.removeEventListener(`keydown:${this.keyCode}`, this.keydownHandler.bind(this))
    document.removeEventListener(`keyup:${this.keyCode}`, this.keyupHandler.bind(this))
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
