export const TYPES = {
  NUMBER: 'number',
  LETTER: 'letter'

  /*button_backspace

  button_tab

  button_del

  button_capslock

  button_shift

  button_ctrl

  button_win

  button_alt

  button_enter

  button_space

  button_arrow*/

}

export const LANG = {
  RUS: [
    {
      letter: 'ё',
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
      additionalLetter: '"',
      keyCode: 50,
      type: TYPES.NUMBER
    },
    {
      letter: 'й',
      additionalLetter: 'Й',
      keyCode: 81,
      type: TYPES.LETTER
    },
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
      letter: 'q',
      additionalLetter: 'Q',
      keyCode: 81,
      type: TYPES.LETTER
    },
  ]
}

