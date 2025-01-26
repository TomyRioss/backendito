export type Locale = Locales[number];

export const defaultLocale: Locale = 'es';

// TODO: change images to free usage images or with commercial licence
export const Languages: Language[] = [
  {
    id: 1,
    value: 'en',
    name: 'English',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/8/88/United-states_flag_icon_round.svg',
  },
  {
    id: 2,
    value: 'es',
    name: 'Español',
    image:
      'https://vectorflags.s3-us-west-2.amazonaws.com/flags/es-circle-01.png',
  },
];
