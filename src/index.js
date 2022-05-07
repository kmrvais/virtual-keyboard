import Keyboard from './keyboard';
import {LANG} from "./data";

document.addEventListener("DOMContentLoaded", function (){
  let lang = localStorage.getItem('lang') || 'RUS';
  const keyboard = new Keyboard(LANG[lang]);
  keyboard.render();

  document.addEventListener('keydown', function(event) {
    if (event.altKey && event.shiftKey) {
      lang = lang === 'RUS' ? 'EN' : 'RUS'
      const keyboard = new Keyboard(LANG[lang]);
      keyboard.render();
      localStorage.setItem('lang', lang);
    }

  });

  localStorage.setItem('lang', lang);
})

