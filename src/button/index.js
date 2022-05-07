export default class Button {
  constructor(letter, additionalLetter, type) {
    this.letter = letter;
    this.additionalLetter = additionalLetter;
    this.type = type;
  }

  render() {
    const buttonElement = document.createElement('button');
    buttonElement.innerHTML = this.letter;
    buttonElement.classList.add('button');
    buttonElement.classList.add(`button_${this.type}`);
    return buttonElement;
  }
}
