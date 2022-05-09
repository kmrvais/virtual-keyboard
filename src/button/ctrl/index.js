import Button from "../index";

export default class Ctrl extends Button {
  constructor(letter, additionalLetter, type, keyCode) {
    super(letter, additionalLetter, type, keyCode);
  }

  keydownHandler(event) {
  }
}
