import Button from '../index';

export default class Ctrl extends Button {
  // eslint-disable-next-line no-useless-constructor
  constructor(letter, additionalLetter, type, keyCode) {
    super(letter, additionalLetter, type, keyCode);
  }

  keydownHandler() {
    this.buttonElement.classList.add('button_pressed');
  }
}
