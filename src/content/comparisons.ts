export type ComparisonBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | {
      type: "table";
      caption: string;
      columns: string[];
      rows: string[][];
    }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "cta" };

export type Comparison = {
  slug: string;
  /** Short label for the visible breadcrumb and breadcrumb schema. */
  breadcrumb: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  inlineCta: string;
  blocks: ComparisonBlock[];
  bottomCta: {
    kicker: string;
    title: string;
    body: string;
  };
  related: string[];
};

const published = "2026-09-29";

export const comparisons: Comparison[] = [
  {
    slug: "synema-vs-letterboxd",
    breadcrumb: "Synema vs Letterboxd",
    title: "Synema vs Letterboxd: Different Tools for Different Movie Problems",
    metaTitle:
      "Synema vs Letterboxd: Different Tools for Different Movie Problems – Synema",
    metaDescription:
      "Letterboxd is for logging and sharing films. Synema is for deciding what to watch with other people. Which one fits depends on the job.",
    description:
      "A diary and a community, or a way for the room to agree. They are not the same problem.",
    publishedAt: published,
    updatedAt: published,
    inlineCta:
      "Deciding with the people on the couch is the part Synema is for. Everyone swipes privately, and you keep the movies you agree on.",
    bottomCta: {
      kicker: "Stop debating. Start watching.",
      title: "Synema is for the decision. Letterboxd can keep the diary.",
      body: "Open a room, swipe on your own, and leave with a movie the group actually wants.",
    },
    related: [
      "how-to-choose-a-movie-together",
      "movie-picker-for-friends",
      "movie-picker-for-couples",
      "movie-night-ideas",
    ],
    blocks: [
      {
        type: "p",
        text: "Synema and Letterboxd are not two versions of the same app. Letterboxd is where people keep a record of films and talk about them. Synema is for a smaller, more annoying moment: you are with other people, and you still do not know what to put on.",
      },
      {
        type: "p",
        text: "If you want a diary, a rating, and a community, Letterboxd is the right tool. If you want the people in the room to leave with one movie, that is the problem Synema is built for. Neither job makes the other product a failure.",
      },
      {
        type: "h2",
        text: "What is Synema?",
      },
      {
        type: "p",
        text: "[Synema](/) is a movie app for deciding what to watch, especially with a partner or a small group. One person creates a room and invites the others with a link or a QR code. Everyone swipes through the same movies on their own phone. When everyone swipes right on the same movie, it is a match. On your own, the same swipe builds a personal watchlist: a right swipe saves the movie.",
      },
      {
        type: "p",
        text: "Synema also shows where a movie is available to stream in your country. It is not a public feed of reviews, and it is not a log of everything you have watched.",
      },
      {
        type: "p",
        text: "It is not on the App Store or Google Play yet. You can [join the waitlist](/#waitlist). An invite-only [Android beta](/beta-testing) is open if you want to try it early.",
      },
      {
        type: "h2",
        text: "What is Letterboxd?",
      },
      {
        type: "p",
        text: "[Letterboxd](https://letterboxd.com) is a social network for film. People use it to log what they have watched, rate films, write reviews, keep a watchlist, and make lists. You can follow other members and see the films they watch and the writing they publish.",
      },
      {
        type: "p",
        text: "It is a diary and a community. Finding something to watch often happens sideways, through someone's review or a list, rather than through a shared decision with the people on your couch.",
      },
      {
        type: "p",
        text: "This page sticks to that core. It does not try to inventory every Letterboxd screen, paid plan, or integration.",
      },
      {
        type: "h2",
        text: "The main difference",
      },
      {
        type: "p",
        text: "Letterboxd helps you remember films and share them. Synema helps a specific group choose one. You can care about both. You do not have to pick a winner between them.",
      },
      {
        type: "table",
        caption: "What Letterboxd and Synema are each built to do",
        columns: ["Job", "Letterboxd", "Synema"],
        rows: [
          [
            "Remember what you watched",
            "A diary of films you have seen",
            "Not a log of your viewing",
          ],
          [
            "Rate and review",
            "Ratings and written reviews",
            "No public ratings or reviews",
          ],
          [
            "Lists",
            "Lists and a watchlist",
            "A personal watchlist when you swipe on your own, and one shared deck in a room",
          ],
          [
            "Other people's taste",
            "Follow members and read what they watch",
            "The group is whoever you invited",
          ],
          [
            "Choose with your room",
            "Can inspire a pick. The agreement is still yours to make",
            "Everyone swipes the same movies. A match is when everyone swipes right",
          ],
        ],
      },
      {
        type: "cta",
      },
      {
        type: "h2",
        text: "Movie discovery",
      },
      {
        type: "p",
        text: "On Letterboxd, discovery is social. You browse what people you follow have watched, read reviews, and open lists. Taste is public, which is useful when you want a film culture wider than your living room.",
      },
      {
        type: "p",
        text: "On Synema, discovery is a pile you swipe through with the people who are actually watching tonight. The result that matters is not a review. It is an overlap.",
      },
      {
        type: "h2",
        text: "Choosing a movie together",
      },
      {
        type: "p",
        text: "Letterboxd can start a pick. A list, a rating from someone you trust, a film you have been meaning to see. Agreeing with the other people in the room still happens somewhere else, usually in a chat or a long scroll.",
      },
      {
        type: "p",
        text: "Synema starts at that agreement. Everyone swipes the same movies on their own phone, and it is a match when everyone swipes right. The decision itself, with or without an app, is written up in [how to choose a movie together](/guides/how-to-choose-a-movie-together). The two-person stall is the [movie picker for couples](/guides/movie-picker-for-couples). The group-chat stall is the [movie picker for friends](/guides/movie-picker-for-friends).",
      },
      {
        type: "h2",
        text: "Tracking and logging movies",
      },
      {
        type: "p",
        text: "This is Letterboxd's home ground. A log of what you have seen, ratings, reviews, and lists you can publish. Synema does not keep that diary. Swiping on your own saves movies to a personal watchlist. It does not rate them or record that you have watched them.",
      },
      {
        type: "p",
        text: "In a room, Synema ends at the match. After you watch the film, Letterboxd is a natural place to log it.",
      },
      {
        type: "h2",
        text: "Social and community",
      },
      {
        type: "p",
        text: "Letterboxd is a network. You follow people, read them, and can show your own taste in public.",
      },
      {
        type: "p",
        text: "Synema's group is the room you invited, up to five people. There is no public profile of your taste to maintain. That is a limitation if you want an audience, and a relief if you only want a decision.",
      },
      {
        type: "h2",
        text: "Who each product is for",
      },
      {
        type: "h3",
        text: "Open Letterboxd if",
      },
      {
        type: "ul",
        items: [
          "You want a diary of films you have watched",
          "You like rating films, writing about them, or reading other people",
          "You want lists and a watchlist you can come back to",
          "You like finding films through a community, not only through the people in the room",
        ],
      },
      {
        type: "h3",
        text: "Open Synema if",
      },
      {
        type: "ul",
        items: [
          "You are stuck choosing, tonight",
          "You are choosing with a partner or a few friends",
          "You want a match when everyone swipes right on the same movie",
          "You want a personal watchlist from swiping on your own, not a public diary",
        ],
      },
      {
        type: "p",
        text: "Plenty of people are both. The tools only compete if you force them to do the same job.",
      },
      {
        type: "h2",
        text: "Can you use both?",
      },
      {
        type: "p",
        text: "Yes. Use a private pass over a short list, in Synema or on paper, to decide what to watch with the people who are there. Use Letterboxd to remember it, rate it, and talk about it with people who were not in the room.",
      },
      {
        type: "p",
        text: "A movie night can start with a constraint, which is what [movie night ideas](/guides/movie-night-ideas) is for, and end with a log on Letterboxd. The middle, the actual choice, is the part Synema is for.",
      },
      {
        type: "h2",
        text: "Common questions",
      },
      {
        type: "faq",
        items: [
          {
            q: "Is Synema better than Letterboxd?",
            a: "No. They are for different problems. Letterboxd is the better diary, rating system, and film community. Synema is built for deciding what to watch with other people. Better depends on which of those you opened an app to do.",
          },
          {
            q: "Does Synema replace a Letterboxd watchlist?",
            a: "No. On your own, a right swipe in Synema saves a movie to your personal watchlist. That list is not a public diary, and it has no ratings or reviews. Letterboxd is still the place to publish what you want to watch and what you have already seen.",
          },
          {
            q: "Which should we open when nobody can agree?",
            a: "The tool that includes the people in the room. A shared swipe, or a private yes and no on the same short list, can finish the night. A review feed can suggest films, and it will not settle the argument by itself. The steps without an app are in [how to choose a movie together](/guides/how-to-choose-a-movie-together).",
          },
        ],
      },
    ],
  },
];

/**
 * Not routed and not included in the sitemap.
 * Move an entry into `comparisons` only after every note is checked
 * against the current product. Do not fill the gaps with guesses.
 */
export const unpublishedComparisonNotes = [
  {
    slug: "synema-vs-taste",
    proposedPath: "/compare/synema-vs-taste",
    verifyBeforePublishing: [
      "Which product “Taste” refers to, and its official URL",
      "The job it claims: discovery, logging, social, group decision, or something else",
      "How a couple or group chooses a movie in the product, if it does that at all",
      "Whether it has ratings, reviews, lists, a watchlist, or a public community",
      "Platforms, pricing, and current availability",
      "Any feature that should not be claimed because it is easy to misremember",
    ],
  },
] as const;

export function getComparison(slug: string) {
  return comparisons.find((comparison) => comparison.slug === slug);
}
