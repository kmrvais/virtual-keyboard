import Keyboard from './keyboard';
import {LANG} from "./data";
import Textarea from "./textarea";

const renderKeyboard = (lang) => {
  const keyboard = new Keyboard(LANG[lang]);
  keyboard.render();
  localStorage.setItem('lang', lang);
  return keyboard;
}

document.addEventListener("DOMContentLoaded", function () {
  const container = document.createElement('div');
  container.classList.add('container');
  document.body.append(container);
  container.append('Клавиатура сделана в Windows. Для переключения языка комбинация: ctrl + alt');
  let textarea = new Textarea();
  textarea.render();
  let lang = localStorage.getItem('lang') || 'RUS';
  let keyboard = renderKeyboard(lang);

  document.addEventListener('keydown', function (event) {
    if (event.altKey && event.ctrlKey) {
      lang = lang === 'RUS' ? 'EN' : 'RUS';
      keyboard.detachEvents();
      keyboard = renderKeyboard(lang);
    }
  });
})

