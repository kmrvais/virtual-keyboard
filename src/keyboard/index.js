import Button from '../button';

export default class Keyboard {
  constructor(buttons) {
    this.buttons = buttons;
  }

  render() {
    this.clear();
    const keyboardElement = document.createElement('div');
    const container = document.querySelector('.container');
    keyboardElement.classList.add('keyboard');
    container.append(keyboardElement);
    for (let i = 0; i < this.buttons.length; i++) {
      let keyboardButton = new Button(this.buttons[i].letter, this.buttons[i].additionalLetter, this.buttons[i].type);
      keyboardElement.append(keyboardButton.render());
    }
  }

  clear() {
    const keyboardElement = document.querySelector('.keyboard');
    if (keyboardElement) {
      keyboardElement.remove();
    }
  }
}
