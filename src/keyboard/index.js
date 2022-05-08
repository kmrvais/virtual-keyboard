import Button from '../button';

export default class Keyboard {
  constructor(buttons) {
    this.buttons = [];
    for (let i = 0; i < buttons.length; i++) {
      this.buttons.push(new Button(buttons[i].letter, buttons[i].additionalLetter, buttons[i].type, buttons[i].keyCode))
    }
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');
  }

  render() {
    this.clear();
    const container = document.querySelector('.container');
    container.append(this.keyboard);
    for (let i = 0; i < this.buttons.length; i++) {
      this.keyboard.append(this.buttons[i].render());
    }
    this.attachEvents();
  }

  clear() {
    const keyboardElement = document.querySelector('.keyboard');
    if (keyboardElement) {
      keyboardElement.remove();
    }
  }

  attachEvents() {
    document.addEventListener('keydown', this.keydownHandler);
    document.addEventListener('keyup', this.keyupHandler);
  }

  detachEvents() {
    document.removeEventListener('keydown', this.keydownHandler);
    document.removeEventListener('keydown', this.keyupHandler);
    for (let i = 0; i < this.buttons.length; i++) {
      this.buttons[i].detachEvents();
    }
  }

  keydownHandler(event) {
    document.dispatchEvent(new Event(`keydown:${event.keyCode}`));
  }

  keyupHandler(event) {
    document.dispatchEvent(new Event(`keyup:${event.keyCode}`));
  }
}
