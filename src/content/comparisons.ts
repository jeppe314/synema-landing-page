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
    title: "Synema vs Letterboxd: Who Each Product Suits",
    metaTitle: "Synema vs Letterboxd: Who Each Product Suits – Synema",
    metaDescription:
      "Letterboxd is a film diary and discovery community you can use now. Synema is an upcoming app for a room of up to five to match on a movie.",
    description:
      "Use Letterboxd now for a diary and other people's taste. Synema is upcoming, for a small group to agree.",
    publishedAt: published,
    updatedAt: "2026-10-03",
    inlineCta:
      "Synema is not available on the App Store or Google Play yet. Join the waitlist if a small-group match is the part you want later.",
    bottomCta: {
      kicker: "Stop debating. Start watching.",
      title: "Letterboxd is open now. Synema is still upcoming.",
      body: "Keep the diary. Join the waitlist if you want a room where everyone has to swipe right.",
    },
    related: [
      "letterboxd-alternatives-for-movie-discovery",
      "best-movie-picker-apps",
      "how-to-choose-a-movie-together",
      "movie-picker-for-friends",
    ],
    blocks: [
      {
        type: "p",
        text: "Use Letterboxd if you want a film diary, ratings, reviews, and other people's taste today. Use Synema later if you want a room of up to five people to swipe in private and keep a movie only when everyone swipes right. Letterboxd is available now. Synema's public launch is upcoming, and it is not on the App Store or Google Play.",
      },
      {
        type: "p",
        text: "The notes below follow Letterboxd's own help pages and this site's description of Synema. This is not a hands-on test. Prices, ratings, and download counts are left out.",
      },
      {
        type: "h2",
        text: "What each product is",
      },
      {
        type: "p",
        text: "[Letterboxd](https://letterboxd.com/faq/) is a social network for film discussion and discovery. You can keep a diary, rate and review films, make lists, keep a watchlist, and follow other members. The [welcome page](https://letterboxd.com/welcome/) also points at browsing by decade, genre, popularity, rating, and streaming service. Apps exist for iOS, Android, and Apple TV. A free membership remains, and paid Pro and Patron tiers add extras, including streaming filters.",
      },
      {
        type: "p",
        text: "[Synema](/) is documented here as an upcoming movie app for a partner or a small group. Someone creates a room and invites the others with a link or a QR code. Everyone swipes the same movies on their own phone. A match is when everyone swipes right. A right swipe on your own saves the film to a personal watchlist. It is not a public feed of reviews, and it does not log films you have watched. [Join the waitlist](/#waitlist). An invite-only [Android beta](/beta-testing) is the early path, not a public store release.",
      },
      {
        type: "h2",
        text: "What is different",
      },
      {
        type: "table",
        caption: "Letterboxd features you can use now, next to Synema features documented for an upcoming launch.",
        columns: ["Job", "Letterboxd now", "Synema, upcoming"],
        rows: [
          [
            "Diary",
            "Log films you have watched. [FAQ](https://letterboxd.com/faq/).",
            "Not a log of what you have watched.",
          ],
          [
            "Ratings and reviews",
            "Rate films and write reviews.",
            "No public ratings or reviews.",
          ],
          [
            "Watchlist and lists",
            "A watchlist, plus lists you can publish or keep private. [Watchlist](https://letterboxd.zendesk.com/hc/en-us/articles/15179261056143-What-s-the-difference-between-my-lists-and-my-watchlist).",
            "A personal watchlist when you swipe right on your own. A room uses one shared deck.",
          ],
          [
            "Discovery",
            "Follow people, read reviews, and browse by genre, popularity, rating, and streaming service. [Welcome](https://letterboxd.com/welcome/).",
            "A pile the invited room swipes through. Not a public community.",
          ],
          [
            "Streaming info",
            "The films browser includes streaming service. Paying members can filter by favorite services and get watchlist alerts. Alerts use JustWatch data and may lag by up to 24 hours. [Pro](https://letterboxd.com/about/pro/). [Alerts](https://letterboxd.zendesk.com/hc/en-us/articles/15178655699471-Can-I-get-notified-when-films-in-my-watchlist-are-ready-to-watch).",
            "Shows where a movie is available in your country, including Netflix, Disney+, Prime Video, Max, and Apple TV+, and more. Not a guarantee that every title is listed.",
          ],
          [
            "Choosing together",
            "Lists and reviews can suggest a film. The FAQ does not describe a private group match.",
            "A room of up to five. A match is when everyone swipes right.",
          ],
          [
            "Availability",
            "Free membership, plus paid Pro and Patron. Apps for iOS, Android, and Apple TV.",
            "Not on the App Store or Google Play. Waitlist, plus an invite-only Android beta.",
          ],
        ],
      },
      {
        type: "h2",
        text: "Launch status and hosting",
      },
      {
        type: "p",
        text: "Letterboxd is something you can open now. Synema is not. Public launch is upcoming. Hosting a Synema group room needs Synema Pro. Joining someone else's room, and swiping on your own, do not need a subscription. Those rules describe the product as this site documents it. They are not a store page you can install today.",
      },
      {
        type: "cta",
      },
      {
        type: "h2",
        text: "When using both makes sense",
      },
      {
        type: "p",
        text: "Use Letterboxd to find films through lists and people you follow, and to log the movie after you watch it. After Synema launches, use it for the people in the room: everyone swipes, and you keep a title only when all of them swipe right. Until that launch, decide with the steps in [how to choose a movie together](/guides/how-to-choose-a-movie-together), or with a current group tool from [best movie picker apps](/guides/best-movie-picker-apps).",
      },
      {
        type: "p",
        text: "Two people can use the [movie picker for couples](/guides/movie-picker-for-couples). A chat that has grown past a pair can use the [movie picker for friends](/guides/movie-picker-for-friends), which stays inside a room of five. If you wanted other discovery tools rather than this comparison, read [Letterboxd alternatives for movie discovery](/guides/letterboxd-alternatives-for-movie-discovery).",
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
            a: "No. Letterboxd is the diary, the review community, and a discovery feed you can use now. Synema is an upcoming way for up to five people to match on one movie. Better depends on which of those jobs you have.",
          },
          {
            q: "Does Letterboxd have a watchlist and streaming information?",
            a: "Yes. Every member has a watchlist. The films browser includes streaming service. Paying members can filter by favorite services and get watchlist alerts. Synema does not replace that diary or that community.",
          },
          {
            q: "Can we use Synema tonight?",
            a: "Not as a public app. It is not on the App Store or Google Play. Join the waitlist, or use the invite-only Android beta if you are accepted. Tonight, use Letterboxd for ideas and a manual pass for the decision.",
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
