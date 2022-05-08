import Button from "../index";

export default class Capslock extends Button {
  constructor(letter, additionalLetter, type, keyCode) {
    super(letter, additionalLetter, type, keyCode);
  }

  keydownHandler(event) {
    this.buttonElement.classList.toggle('button_pressed');
  }

  keyupHandler(event) {
  }
}
