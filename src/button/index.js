export default class Button {
  constructor(letter, additionalLetter, type, keyCode) {
    this.letter = letter;
    this.additionalLetter = additionalLetter;
    this.type = type;
    this.keyCode = keyCode;
    this.buttonElement = document.createElement('button');
  }

  render() {
    const additionalLetter = this.additionalLetter ? `<div class="button__additional-letter">${this.additionalLetter}</div>` : '';
    this.buttonElement.innerHTML = `<div class="button__letter">${this.letter}</div>${additionalLetter}`;
    this.buttonElement.classList.add('button');
    this.buttonElement.classList.add(`button_${this.type}`);
    this.buttonElement.setAttribute('data-key-code', this.keyCode);
    this.attachEvents();
    return this.buttonElement;
  }

  attachEvents() {
    this.keydownHandler = this.keydownHandler.bind(this);
    this.keyupHandler = this.keyupHandler.bind(this);
    this.deactivateHandler = this.deactivateHandler.bind(this);

    document.addEventListener(`keydown:${this.keyCode}`, this.keydownHandler);
    document.addEventListener(`keyup:${this.keyCode}`, this.keyupHandler);
    document.addEventListener('button:deactivate', this.deactivateHandler);
  }

  detachEvents() {
    document.removeEventListener(`keydown:${this.keyCode}`, this.keydownHandler);
    document.removeEventListener(`keyup:${this.keyCode}`, this.keyupHandler);
    document.removeEventListener('button:deactivate', this.deactivateHandler);
  }

  keydownHandler(event) {
    this.buttonElement.classList.add('button_pressed');
    document.dispatchEvent(new CustomEvent('textarea:input', {
      detail: {
        // eslint-disable-next-line max-len
        letter: event.detail.isShift || event.detail.isCapsLock ? this.additionalLetter : this.letter,
      },
    }));
  }

  keyupHandler() {
    this.buttonElement.classList.remove('button_pressed');
  }

  deactivateHandler() {
    this.buttonElement.classList.remove('button_pressed');
  }
}
