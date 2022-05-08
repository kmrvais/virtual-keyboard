import Button from "../index";

export default class NumberButton extends Button {
  constructor(letter, additionalLetter, type, keyCode) {
    super(letter, additionalLetter, type, keyCode);
  }

  keydownHandler(event) {
    this.buttonElement.classList.add('button_pressed');
    document.dispatchEvent(new CustomEvent('textarea:input', {
      detail: {
        letter: event.detail.isShift ? this.additionalLetter : this.letter
      }
    }));
  }
}
