export const randomColor = () => 0 + Math.floor(Math.random() * (255 - 0 + 1));

export const randomRGB = ():Array<number> => {
    return [randomColor(), randomColor(), randomColor()]
}

export const colors = {
  black: [0, 0, 0],
  white: [255, 255, 255],
  red: [255, 0, 0],
  lime: [0, 255, 0],
  blue: [0, 0, 255],
  yellow: [255, 255, 0],
  cyan: [0, 255, 255],
  aqua: [0, 255, 255],
  magenta: [255, 0, 255],
  fuchsia: [255, 0, 255],
  silver: [192, 192, 192],
  gray: [128, 128, 128],
  maroon: [128, 0, 0],
  plive: [128, 128, 0],
  green: [0, 128, 0],
  purple: [128, 0, 128],
  teal: [0, 128, 128],
  navy: [0, 0, 128],
};

export const defaultKeys = {
  esc: [0, 0, 0],
  "1": [0, 0, 0],
  "2": [0, 0, 0],
  "3": [0, 0, 0],
  "4": [0, 0, 0],
  "5": [0, 0, 0],
  "6": [0, 0, 0],
  "7": [0, 0, 0],
  "8": [0, 0, 0],
  "9": [0, 0, 0],
  "0": [0, 0, 0],
  minus: [0, 0, 0],
  equals: [0, 0, 0],
  backspace: [0, 0, 0],
  tab: [0, 0, 0],
  q: [0, 0, 0],
  w: [0, 0, 0],
  e: [0, 0, 0],
  r: [0, 0, 0],
  t: [0, 0, 0],
  y: [0, 0, 0],
  u: [0, 0, 0],
  i: [0, 0, 0],
  o: [0, 0, 0],
  p: [0, 0, 0],
  lbracket: [0, 0, 0],
  rbracket: [0, 0, 0],
  backslash: [0, 0, 0],
  caps: [0, 0, 0],
  a: [0, 0, 0],
  s: [0, 0, 0],
  d: [0, 0, 0],
  f: [0, 0, 0],
  g: [0, 0, 0],
  h: [0, 0, 0],
  j: [0, 0, 0],
  k: [0, 0, 0],
  l: [0, 0, 0],
  semicolon: [0, 0, 0],
  apostrophe: [0, 0, 0],
  enter: [0, 0, 0],
  deadkey1: [0, 0, 0],
  leftshift: [0, 0, 0],
  deadkey2: [0, 0, 0],
  z: [0, 0, 0],
  x: [0, 0, 0],
  c: [0, 0, 0],
  v: [0, 0, 0],
  b: [0, 0, 0],
  n: [0, 0, 0],
  m: [0, 0, 0],
  comma: [0, 0, 0],
  dot: [0, 0, 0],
  slash: [0, 0, 0],
  rightshift: [0, 0, 0],
  deadkey3: [0, 0, 0],
  leftctrl: [0, 0, 0],
  deadkey4: [0, 0, 0],
  leftsuper: [0, 0, 0],
  leftalt: [0, 0, 0],
  deadkey5: [0, 0, 0],
  daedkey6: [0, 0, 0],
  space: [0, 0, 0],
  deadkey7: [0, 0, 0],
  deadkey8: [0, 0, 0],
  rightalt: [0, 0, 0],
  fn: [0, 0, 0],
  context: [0, 0, 0],
  rightctrl: [0, 0, 0],
  deadkey9: [0, 0, 0],
};
