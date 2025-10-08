export const wordState = {
  UNTYPED: "untyped",
  CORRECT: "correct",
  INCORRECT: "incorrect",
};

export const appState = {
  IDLE: "IDLE",
  TYPING: "TYPING",
  FINISHED: "FINISHED",
} as const;

export const TIMERSTATE = {
  "15seconds": 15,
  "30seconds": 30,
  "60seconds": 60,
  "120seconds": 120,
};

export const PARAGRAPH =
  "On Monday the small fox zipped past forty-two sleepy dogs then paused;\
   it sniffed the warm, fragrant bread at the old baker’s stall. Wind carried the scent across the\
   bustling market as traders called prices, children laughed, and a bright kite snagged on a lamppost.\
   A distant bell chimed the hour while every tiny sound — a creak, a chuckle, a hurried footstep — \
   stitched the morning into a lively patchwork of motion and color.";

export const MESSAGES = {
  "15seconds": [
    "A bright morning sun warmed the quiet street as a cyclist rode past.",
    "She opened the letter, smiled, and tucked it carefully into her pocket.",
  ],

  "30seconds": [
    "The market smelled of spices and fresh bread; vendors called prices while shoppers moved between stalls.",

    "Under the old oak, children chased a red kite that dipped and soared against the clear blue sky.",
  ],

  "60seconds": [
    "On the first day of spring the town seemed to wake at once: windows opened, curtains fluttered,\
       and a kettle began to hum. Neighbors exchanged quick greetings while a dog nosed through flower beds,\
       and bicycles clattered over the cobbles.Small routines stitched the morning together into a gentle,\
       crowded promise of the season ahead.",
    "By dusk the harbor glowed with reflected lights as fishing boats bobbed gently and gulls wheeled\
       above the quay. Lanterns swung from posts while a couple walked slowly, sharing stories; the scent of \
       salt and frying fish drifted from a nearby stall. Time felt soft there, measured only by the quiet lap \
       of the tide and distant footsteps on the pier.",
  ],
};
