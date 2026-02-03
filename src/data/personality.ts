export interface PersonalityHighlight {
  id: string;
  title: string;
  description: string;
  details: string;
  image: { src: string; alt: string };
}

export const personalityHighlights: PersonalityHighlight[] = [
  {
    id: "cooking",
    title: "Home Chef",
    description:
      "Cooking lets me unplug, experiment with flavor, and share something tangible with the people I care about.",
    details:
      "I’ll chase fancy plating one night and crave simple comfort food the next—but the through-line is cooking for others. I love recreating restaurant dishes to understand every step, then sharing the results with friends and family.",
    image: { src: "/images/hobbies/food2.jpeg", alt: "Cooking a favorite recipe" },
  },
  {
    id: "golf",
    title: "Weekend Golfer",
    description:
      "Golf is my reset button and the newest obsession I’m trying to level up.",
    details:
      "I’m still new, but I’m hooked on the pursuit of that one flushed shot that lands pin-high. It’s wild how hard a stationary ball can be to hit—perfect practice in patience and iteration. Fun fact: I just carded a hole-in-one on a 205-yard par 3 by absolutely flushing a 4i, then immediately called everyone I’ve ever golfed with!",
    image: { src: "/images/hobbies/golf.jpeg", alt: "On the course" },
  },
    {
    id: "badminton",
    title: "Badminton Regular",
    description: "Quick rallies, quicker decisions (plus the lifting sessions that keep me ready for them).",
    details:
      "I grew up playing competitively, so it’s still my go-to for high-intensity cardio. Weekly doubles plus strength work keep the timing, positioning, and explosive movement dialed in.",
    image: { src: "/images/hobbies/badminton.png", alt: "Badminton court" },
  },
];
