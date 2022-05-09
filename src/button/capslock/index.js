import Button from '../index';

export default class Capslock extends Button {
  // eslint-disable-next-line no-useless-constructor
  constructor(letter, additionalLetter, type, keyCode) {
    super(letter, additionalLetter, type, keyCode);
  }

  keydownHandler() {
    this.buttonElement.classList.toggle('button_pressed');
  }

  // eslint-disable-next-line class-methods-use-this
  keyupHandler() {
  }

  // eslint-disable-next-line class-methods-use-this
  deactivateHandler() {
  }
}
