export const CAPSLOCK = 20;

export const TYPES = {
  NUMBER: 'number',
  LETTER: 'letter',
  CAPSLOCK: 'capslock',
  BACKSPACE: 'backspace',
  TAB: 'tab',
  DEL: 'del',
  SHIFT: 'shift',
  CTRL: 'ctrl',
  WIN: 'win',
  ALT: 'alt',
  ENTER: 'enter',
  SPACE: 'space',
  ARROW: 'arrow',
  SYMBOL: 'symbol'
}

export const LANG = {
  RUS: [
    {
      letter: 'ё',
      additionalLetter: 'Ё',
      keyCode: 192,
      type: TYPES.LETTER
    },
    {
      letter: '1',
      additionalLetter: '!',
      keyCode: 49,
      type: TYPES.NUMBER
    },
    {
      letter: '2',
      additionalLetter: '"',
      keyCode: 50,
      type: TYPES.NUMBER
    },
    {
      letter: '3',
      additionalLetter: '№',
      keyCode: 51,
      type: TYPES.NUMBER
    },
    {
      letter: '4',
      additionalLetter: ';',
      keyCode: 52,
      type: TYPES.NUMBER
    },
    {
      letter: '5',
      additionalLetter: '%',
      keyCode: 53,
      type: TYPES.NUMBER
    },
    {
      letter: '6',
      additionalLetter: ':',
      keyCode: 54,
      type: TYPES.NUMBER
    },
    {
      letter: '7',
      additionalLetter: '?',
      keyCode: 55,
      type: TYPES.NUMBER
    },
    {
      letter: '8',
      additionalLetter: '*',
      keyCode: 56,
      type: TYPES.NUMBER
    },
    {
      letter: '9',
      additionalLetter: '(',
      keyCode: 57,
      type: TYPES.NUMBER
    },
    {
      letter: '0',
      additionalLetter: ')',
      keyCode: 48,
      type: TYPES.NUMBER
    },
    {
      letter: '-',
      additionalLetter: '_',
      keyCode: 189,
      type: TYPES.NUMBER
    },
    {
      letter: '=',
      additionalLetter: '+',
      keyCode: 187,
      type: TYPES.NUMBER
    },
    {
      letter: 'backspace',
      additionalLetter: null,
      keyCode: 8,
      type: TYPES.BACKSPACE
    },
    {
      letter: 'tab',
      additionalLetter: null,
      keyCode: 9,
      type: TYPES.TAB
    },
    {
      letter: 'й',
      additionalLetter: 'Й',
      keyCode: 81,
      type: TYPES.LETTER
    },
    {
      letter: 'ц',
      additionalLetter: 'Ц',
      keyCode: 87,
      type: TYPES.LETTER
    },
    {
      letter: 'у',
      additionalLetter: 'У',
      keyCode: 69,
      type: TYPES.LETTER
    },
    {
      letter: 'к',
      additionalLetter: 'К',
      keyCode: 82,
      type: TYPES.LETTER
    },
    {
      letter: 'е',
      additionalLetter: 'Е',
      keyCode: 84,
      type: TYPES.LETTER
    },
    {
      letter: 'н',
      additionalLetter: 'Н',
      keyCode: 89,
      type: TYPES.LETTER
    },
    {
      letter: 'г',
      additionalLetter: 'Г',
      keyCode: 85,
      type: TYPES.LETTER
    },
    {
      letter: 'ш',
      additionalLetter: 'Ш',
      keyCode: 73,
      type: TYPES.LETTER
    },
    {
      letter: 'щ',
      additionalLetter: 'Щ',
      keyCode: 79,
      type: TYPES.LETTER
    },
    {
      letter: 'з',
      additionalLetter: 'З',
      keyCode: 80,
      type: TYPES.LETTER
    },
    {
      letter: 'х',
      additionalLetter: 'Х',
      keyCode: 219,
      type: TYPES.LETTER
    },
    {
      letter: 'ъ',
      additionalLetter: 'Ъ',
      keyCode: 221,
      type: TYPES.LETTER
    },
    {
      letter: '|',
      additionalLetter: '|',
      keyCode: 220,
      type: TYPES.LETTER
    },
    {
      letter: 'del',
      additionalLetter: null,
      keyCode: 46,
      type: TYPES.DEL
    },
    {
      letter: 'capslock',
      additionalLetter: null,
      keyCode: 20,
      type: TYPES.CAPSLOCK
    },
    {
      letter: 'ф',
      additionalLetter: 'Ф',
      keyCode: 65,
      type: TYPES.LETTER
    },
    {
      letter: 'ы',
      additionalLetter: 'Ы',
      keyCode: 83,
      type: TYPES.LETTER
    },
    {
      letter: 'в',
      additionalLetter: 'В',
      keyCode: 68,
      type: TYPES.LETTER
    },
    {
      letter: 'а',
      additionalLetter: 'А',
      keyCode: 70,
      type: TYPES.LETTER
    },
    {
      letter: 'п',
      additionalLetter: 'П',
      keyCode: 71,
      type: TYPES.LETTER
    },
    {
      letter: 'р',
      additionalLetter: 'Р',
      keyCode: 72,
      type: TYPES.LETTER
    },
    {
      letter: 'о',
      additionalLetter: 'О',
      keyCode: 74,
      type: TYPES.LETTER
    },
    {
      letter: 'л',
      additionalLetter: 'Л',
      keyCode: 75,
      type: TYPES.LETTER
    },
    {
      letter: 'д',
      additionalLetter: 'Д',
      keyCode: 76,
      type: TYPES.LETTER
    },
    {
      letter: 'ж',
      additionalLetter: 'Ж',
      keyCode: 186,
      type: TYPES.LETTER
    },
    {
      letter: 'э',
      additionalLetter: 'Э',
      keyCode: 222,
      type: TYPES.LETTER
    },
    {
      letter: 'enter',
      additionalLetter: null,
      keyCode: 13,
      type: TYPES.ENTER
    },
    {
      letter: 'shift',
      additionalLetter: null,
      keyCode: 16,
      type: TYPES.SHIFT
    },
    {
      letter: 'я',
      additionalLetter: 'Я',
      keyCode: 90,
      type: TYPES.LETTER
    },
    {
      letter: 'ч',
      additionalLetter: 'Ч',
      keyCode: 88,
      type: TYPES.LETTER
    },
    {
      letter: 'с',
      additionalLetter: 'С',
      keyCode: 67,
      type: TYPES.LETTER
    },
    {
      letter: 'м',
      additionalLetter: 'М',
      keyCode: 86,
      type: TYPES.LETTER
    },
    {
      letter: 'и',
      additionalLetter: 'И',
      keyCode: 66,
      type: TYPES.LETTER
    },
    {
      letter: 'т',
      additionalLetter: 'Т',
      keyCode: 78,
      type: TYPES.LETTER
    },
    {
      letter: 'ь',
      additionalLetter: 'Ь',
      keyCode: 77,
      type: TYPES.LETTER
    },
    {
      letter: 'б',
      additionalLetter: 'Б',
      keyCode: 188,
      type: TYPES.LETTER
    },
    {
      letter: 'ю',
      additionalLetter: 'Ю',
      keyCode: 190,
      type: TYPES.LETTER
    },
    {
      letter: '.',
      additionalLetter: ',',
      keyCode: 191,
      type: TYPES.LETTER
    }
  ],
  EN: [
    {
      letter: '`',
      additionalLetter: '`',
      keyCode: 192,
      type: TYPES.LETTER
    },
    {
      letter: '1',
      additionalLetter: '!',
      keyCode: 49,
      type: TYPES.NUMBER
    },
    {
      letter: '2',
      additionalLetter: '@',
      keyCode: 50,
      type: TYPES.NUMBER
    },
    {
      letter: '3',
      additionalLetter: '№',
      keyCode: 51,
      type: TYPES.NUMBER
    },
    {
      letter: '4',
      additionalLetter: ';',
      keyCode: 52,
      type: TYPES.NUMBER
    },
    {
      letter: '5',
      additionalLetter: '%',
      keyCode: 53,
      type: TYPES.NUMBER
    },
    {
      letter: '6',
      additionalLetter: ':',
      keyCode: 54,
      type: TYPES.NUMBER
    },
    {
      letter: '7',
      additionalLetter: '?',
      keyCode: 55,
      type: TYPES.NUMBER
    },
    {
      letter: '8',
      additionalLetter: '*',
      keyCode: 56,
      type: TYPES.NUMBER
    },
    {
      letter: '9',
      additionalLetter: '(',
      keyCode: 57,
      type: TYPES.NUMBER
    },
    {
      letter: '0',
      additionalLetter: ')',
      keyCode: 48,
      type: TYPES.NUMBER
    },
    {
      letter: '-',
      additionalLetter: '_',
      keyCode: 189,
      type: TYPES.NUMBER
    },
    {
      letter: '=',
      additionalLetter: '+',
      keyCode: 187,
      type: TYPES.NUMBER
    },
    {
      letter: 'backspace',
      additionalLetter: null,
      keyCode: 8,
      type: TYPES.BACKSPACE
    },
    {
      letter: 'tab',
      additionalLetter: null,
      keyCode: 9,
      type: TYPES.TAB
    },
    {
      letter: 'q',
      additionalLetter: 'Q',
      keyCode: 81,
      type: TYPES.LETTER
    },
    {
      letter: 'w',
      additionalLetter: 'W',
      keyCode: 87,
      type: TYPES.LETTER
    },
    {
      letter: 'e',
      additionalLetter: 'E',
      keyCode: 69,
      type: TYPES.LETTER
    },
    {
      letter: 'r',
      additionalLetter: 'R',
      keyCode: 82,
      type: TYPES.LETTER
    },
    {
      letter: 't',
      additionalLetter: 'T',
      keyCode: 84,
      type: TYPES.LETTER
    },
    {
      letter: 'y',
      additionalLetter: 'Y',
      keyCode: 89,
      type: TYPES.LETTER
    },
    {
      letter: 'u',
      additionalLetter: 'U',
      keyCode: 85,
      type: TYPES.LETTER
    },
    {
      letter: 'i',
      additionalLetter: 'I',
      keyCode: 73,
      type: TYPES.LETTER
    },
    {
      letter: 'o',
      additionalLetter: 'O',
      keyCode: 79,
      type: TYPES.LETTER
    },
    {
      letter: 'p',
      additionalLetter: 'P',
      keyCode: 80,
      type: TYPES.LETTER
    },
    {
      letter: '[',
      additionalLetter: '{',
      keyCode: 219,
      type: TYPES.SYMBOL
    },
    {
      letter: ']',
      additionalLetter: '}',
      keyCode: 221,
      type: TYPES.LETTER
    },
    {
      letter: '|',
      additionalLetter: '|',
      keyCode: 220,
      type: TYPES.LETTER
    },
    {
      letter: 'del',
      additionalLetter: null,
      keyCode: 46,
      type: TYPES.DEL
    },
    {
      letter: 'capslock',
      additionalLetter: null,
      keyCode: 20,
      type: TYPES.CAPSLOCK
    },
    {
      letter: 'a',
      additionalLetter: 'A',
      keyCode: 65,
      type: TYPES.LETTER
    },
    {
      letter: 's',
      additionalLetter: 'S',
      keyCode: 83,
      type: TYPES.LETTER
    },
    {
      letter: 'd',
      additionalLetter: 'D',
      keyCode: 68,
      type: TYPES.LETTER
    },
    {
      letter: 'f',
      additionalLetter: 'F',
      keyCode: 70,
      type: TYPES.LETTER
    },
    {
      letter: 'g',
      additionalLetter: 'G',
      keyCode: 71,
      type: TYPES.LETTER
    },
    {
      letter: 'h',
      additionalLetter: 'H',
      keyCode: 72,
      type: TYPES.LETTER
    },
    {
      letter: 'j',
      additionalLetter: 'J',
      keyCode: 74,
      type: TYPES.LETTER
    },
    {
      letter: 'k',
      additionalLetter: 'K',
      keyCode: 75,
      type: TYPES.LETTER
    },
    {
      letter: 'l',
      additionalLetter: 'L',
      keyCode: 76,
      type: TYPES.LETTER
    },
    {
      letter: ';',
      additionalLetter: ':',
      keyCode: 186,
      type: TYPES.LETTER
    },
    {
      letter: '\'',
      additionalLetter: '\"',
      keyCode: 222,
      type: TYPES.LETTER
    },
    {
      letter: 'enter',
      additionalLetter: null,
      keyCode: 13,
      type: TYPES.ENTER
    },
    {
      letter: 'shift',
      additionalLetter: null,
      keyCode: 16,
      type: TYPES.SHIFT
    },
    {
      letter: 'z',
      additionalLetter: 'Z',
      keyCode: 90,
      type: TYPES.LETTER
    },
    {
      letter: 'x',
      additionalLetter: 'X',
      keyCode: 88,
      type: TYPES.LETTER
    },
    {
      letter: 'c',
      additionalLetter: 'C',
      keyCode: 67,
      type: TYPES.LETTER
    },
    {
      letter: 'v',
      additionalLetter: 'V',
      keyCode: 86,
      type: TYPES.LETTER
    },
    {
      letter: 'b',
      additionalLetter: 'B',
      keyCode: 66,
      type: TYPES.LETTER
    },
    {
      letter: 'n',
      additionalLetter: 'N',
      keyCode: 78,
      type: TYPES.LETTER
    },
    {
      letter: 'm',
      additionalLetter: 'M',
      keyCode: 77,
      type: TYPES.LETTER
    },
    {
      letter: ',',
      additionalLetter: '<',
      keyCode: 188,
      type: TYPES.LETTER
    },
    {
      letter: '.',
      additionalLetter: '>',
      keyCode: 190,
      type: TYPES.LETTER
    },
    {
      letter: '/',
      additionalLetter: '?',
      keyCode: 191,
      type: TYPES.LETTER
    }
  ]
}

