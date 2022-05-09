import Button from '../button';
import {CAPSLOCK, SHIFT, TYPES} from "../data";
import Capslock from "../button/capslock";
import Backspace from "../button/backspace";
import NumberButton from "../button/number";
import Shift from "../button/shift";
import Enter from "../button/enter";
import Del from "../button/del";
import Tab from "../button/tab";
import Alt from "../button/alt";
import Ctrl from "../button/ctrl";
import Win from "../button/win";
import SymbolButton from "../button/symbol";

const buttonCreate = (letter, additionalLetter, type, keyCode) => {
  if (type === TYPES.CAPSLOCK) {
    return new Capslock(letter, additionalLetter, type, keyCode)
  }

  if (type === TYPES.BACKSPACE) {
    return new Backspace(letter, additionalLetter, type, keyCode)
  }

  if (type === TYPES.NUMBER) {
    return new NumberButton(letter, additionalLetter, type, keyCode)
  }

  if (type === TYPES.SHIFT) {
    return new Shift(letter, additionalLetter, type, keyCode)
  }

  if (type === TYPES.ENTER) {
    return new Enter(letter, additionalLetter, type, keyCode)
  }

  if (type === TYPES.DEL) {
    return new Del(letter, additionalLetter, type, keyCode)
  }

  if (type === TYPES.TAB) {
    return new Tab(letter, additionalLetter, type, keyCode)
  }

  if (type === TYPES.ALT) {
    return new Alt(letter, additionalLetter, type, keyCode)
  }

  if (type === TYPES.CTRL) {
    return new Ctrl(letter, additionalLetter, type, keyCode)
  }

  if (type === TYPES.WIN) {
    return new Win(letter, additionalLetter, type, keyCode)
  }

  if (type === TYPES.SYMBOL) {
    return new SymbolButton(letter, additionalLetter, type, keyCode)
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
    this.shift = false;
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
    this.keydownHandler = this.keydownHandler.bind(this);
    this.keyupHandler = this.keyupHandler.bind(this);
    this.mousedownHandler = this.mousedownHandler.bind(this);

    document.addEventListener('keydown', this.keydownHandler);
    document.addEventListener('keyup', this.keyupHandler);
    this.keyboard.addEventListener('mousedown', this.mousedownHandler);
    this.keyboard.addEventListener('mouseup', this.mouseupHandler);
  }

  detachEvents() {
    document.removeEventListener('keydown', this.keydownHandler);
    document.removeEventListener('keyup', this.keyupHandler);
    this.keyboard.removeEventListener('mousedown', this.mousedownHandler);
    this.keyboard.removeEventListener('mouseup', this.mouseupHandler);
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

    if (SHIFT === event.keyCode) {
      this.shift = true;
    }

    document.dispatchEvent(new CustomEvent(`keydown:${event.keyCode}`, {
      detail: {
        isShift: this.shift,
        isCapsLock: this.capsLock
      }
    }));
  }

  keyupHandler(event) {
    if (SHIFT === event.keyCode) {
      this.shift = false;
    }

    document.dispatchEvent(new CustomEvent(`keyup:${event.keyCode}`));
  }

  mousedownHandler(event) {
    if (!event.target.closest('.button')) {
      return
    }
    const target = event.target.closest('.button');
    const keyCode = +target.getAttribute('data-key-code');

    if (CAPSLOCK === keyCode) {
      this.capsLock = !this.capsLock;
    }

    document.dispatchEvent(new CustomEvent(`button:deactivate`));
    document.dispatchEvent(new CustomEvent(`keydown:${keyCode}`, {
      detail: {
        isShift: this.shift,
        isCapsLock: this.capsLock
      }
    }));
  }

  mouseupHandler(event) {
    const target = event.target.closest('.button');

    if (!target) {
      return
    }

    document.dispatchEvent(new CustomEvent(`keyup:${target.getAttribute('data-key-code')}`));
  }
}
