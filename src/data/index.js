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
      type: TYPES.LETTER
    },
    {
      letter: '1',
      additionalLetter: '!',
      type: TYPES.NUMBER
    },
    {
      letter: '2',
      additionalLetter: '"',
      type: TYPES.NUMBER
    },
  ],
  EN: [
    {
      letter: '~',
      additionalLetter: '`',
      type: TYPES.LETTER
    },
    {
      letter: '1',
      additionalLetter: '!',
      type: TYPES.NUMBER
    },
    {
      letter: '2',
      additionalLetter: '@',
      type: TYPES.NUMBER
    },
  ]
}

