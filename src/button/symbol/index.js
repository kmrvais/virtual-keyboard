import Button from '../index';

export default class SymbolButton extends Button {
  // eslint-disable-next-line no-useless-constructor
  constructor(letter, additionalLetter, type, keyCode) {
    super(letter, additionalLetter, type, keyCode);
  }

  keydownHandler(event) {
    this.buttonElement.classList.add('button_pressed');
    document.dispatchEvent(new CustomEvent('textarea:input', {
      detail: {
        letter: event.detail.isShift ? this.additionalLetter : this.letter,
      },
    }));
  }
}
