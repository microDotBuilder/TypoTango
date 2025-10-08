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
    "The morning sun cast long shadows across the cobblestone street as merchants began setting up their colorful stalls. Fresh bread and roasted coffee filled the air with inviting aromas.",
    "She carefully unfolded the handwritten letter, her eyes scanning each word with growing excitement. A smile spread across her face as she tucked the precious message into her coat pocket.",
    "The old lighthouse stood majestically on the rocky cliff, its beam cutting through the thick fog that rolled in from the restless sea below. Sailors relied on its steady glow to navigate safely home.",
  ],

  "30seconds": [
    "The bustling market square buzzed with activity as vendors arranged their colorful displays of fresh fruits, aromatic spices, and handmade crafts. Shoppers moved between stalls, sampling cheeses and bargaining for the best prices while children played hide-and-seek among the wooden carts.",
    "Under the ancient oak tree, children gathered to fly their handmade kites, watching as the colorful paper creations dipped and soared against the clear blue sky. Laughter echoed across the meadow as parents cheered from picnic blankets spread beneath the dappled shade.",
    "The old bookstore smelled of leather bindings and yellowed pages, where dust motes danced in shafts of afternoon sunlight. A curious cat napped on a stack of poetry books while the owner carefully catalogued new arrivals in his weathered ledger.",
  ],

  "60seconds": [
    "On the first day of spring the town seemed to wake at once: windows opened, curtains fluttered,and a kettle began to hum. Neighbors exchanged quick greetings while a dog nosed through flower beds,and bicycles clattered over the cobbles.Small routines stitched the morning together into a gentle,crowded promise of the season ahead.",
    "By dusk the harbor glowed with reflected lights as fishing boats bobbed gently and gulls wheeledabove the quay. Lanterns swung from posts while a couple walked slowly, sharing stories; the scent of salt and frying fish drifted from a nearby stall. Time felt soft there, measured only by the quiet lap of the tide and distant footsteps on the pier.",
  ],
  "120seconds": [
    "The ancient library stood silent beneath the moonlight, its towering shelves holding countless secretswithin leather-bound volumes. A solitary scholar moved between the aisles, her footsteps echoing softlyagainst the marble floors as she searched for a particular manuscript. Dust motes danced in the beam of herher lantern, illuminating fragments of text that spoke of forgotten civilizations and lost knowledge. She paused at a heavy oak desk, carefully opening a weathered tome that contained maps of distant lands and cryptic symbols that seemed to pulse with mysterious energy. The clock tower chimed midnight, but she remained absorbed in her research, determined to uncover the truth hidden within these sacred pages.",
    "Technology has revolutionized the way we communicate, work, and navigate our daily lives. Smartphones have become indispensable tools that connect us instantly with friends, family, and colleagues across the globe. Social media platforms allow us to share experiences, opinions, and creative content with audiences we might never meet in person. Artificial intelligence is transforming industries from healthcare to finance, automating complex processes and providing insights that were previously impossible to obtain. However, this digital revolution also brings challenges: privacy concerns, information overload, and the need to maintain genuine human connections in an increasingly virtual world. As we embrace these innovations, we must carefully balance efficiency with empathy, ensuring that technology serves humanity rather than replacing the essential qualities that make us human.",
    "The mountain trail wound upward through dense pine forests, where shafts of golden sunlight filtered through the canopy above. Hikers paused to admire wildflowers blooming in rocky crevices and listen to the distant call of an eagle soaring overhead. Streams cascaded down moss-covered boulders, creating natural pools where weary travelers could rest and refresh themselves. As the path grew steeper, the air became thinner and cooler, but the breathtaking views of valleys below made every step worthwhile. At the summit, a panoramic vista stretched endlessly toward the horizon, where snow-capped peaks met the azure sky in a magnificent display of nature's grandeur. This moment of triumph reminded them why they had undertaken this challenging journey.",
  ],
};
