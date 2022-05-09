import Button from '../button';
import {CAPSLOCK, TYPES} from "../data";
import Capslock from "../button/capslock";
import Backspace from "../button/backspace";
import NumberButton from "../button/number";

const buttonCreate = (letter, additionalLetter, type, keyCode) => {
  if(type === TYPES.CAPSLOCK) {
    return new Capslock(letter, additionalLetter, type, keyCode)
  }

  if(type === TYPES.BACKSPACE) {
    return new Backspace(letter, additionalLetter, type, keyCode)
  }

  if(type === TYPES.NUMBER) {
    return new NumberButton(letter, additionalLetter, type, keyCode)
  }

  return new Button(letter, additionalLetter, type, keyCode)
}

export default class Keyboard {
  constructor(buttons) {
    this.buttons = [];
    for (let i = 0; i < buttons.length; i++) {
      this.buttons.push(buttonCreate(buttons[i].letter, buttons[i].additionalLetter, buttons[i].type, buttons[i].keyCode))
    }
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');
    this.capsLock = false;
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
    document.removeEventListener('keyup', this.keyupHandler);
    for (let i = 0; i < this.buttons.length; i++) {
      this.buttons[i].detachEvents();
    }
  }

  keydownHandler(event) {
    if (event.altKey && event.ctrlKey) {
      return;
    }

    event.preventDefault();

    if (CAPSLOCK === event.keyCode) {
      this.capsLock = !this.capsLock;
    }

    document.dispatchEvent(new CustomEvent(`keydown:${event.keyCode}`, {
      detail: {
        isShift: event.shiftKey,
        isCapsLock: this.capsLock
      }
    }));
  }

  keyupHandler(event) {
    document.dispatchEvent(new CustomEvent(`keyup:${event.keyCode}`));
  }
}
