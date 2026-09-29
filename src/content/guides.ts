import { guideImages } from "./guide-images";

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "cta" }
  | {
      type: "figure";
      src: string;
      alt: string;
      caption?: string;
      wide?: boolean;
      priority?: boolean;
      variant?: "editorial" | "product";
    }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "tip"; text: string }
  | { type: "checklist"; items: string[] }
  | { type: "pullout"; text: string }
  | {
      type: "table";
      caption: string;
      columns: string[];
      rows: string[][];
    }
  | { type: "faq"; items: { q: string; a: string }[] };

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  inlineCta: string;
  blocks: GuideBlock[];
  bottomCta: {
    kicker: string;
    title: string;
    body: string;
  };
  related: string[];
};

const published = "2026-09-24";

export const guides: Guide[] = [
  {
    slug: "movie-picker-for-couples",
    title: "Movie Picker for Couples: Find Something You Both Want to Watch",
    metaTitle:
      "Movie Picker for Couples: Find Something You Both Want to Watch – Synema",
    metaDescription:
      "How to decide what to watch with your partner, when one person ends up scrolling and the other ends up vetoing.",
    description:
      "How to pick a movie you both want, without one person scrolling and the other quietly giving up.",
    category: "For couples",
    publishedAt: published,
    updatedAt: "2026-09-29",
    inlineCta:
      "Want to skip the debate? Synema lets everyone swipe privately and reveals the movies you agree on.",
    bottomCta: {
      kicker: "Stop debating. Start watching.",
      title:
        "Synema helps couples and groups find the movie everyone actually wants to watch.",
      body: "You both swipe in private. The movies you agree on are the only ones you have to talk about.",
    },
    related: [
      "movie-picker-for-friends",
      "how-to-choose-a-movie-together",
      "how-to-decide-what-movie-to-watch",
    ],
    blocks: [
      {
        type: "p",
        text: "The couch is free, the day is over, and then someone opens a streaming app. A few minutes later you are still on the home screen, trading titles. One of you has seen it. The other is not in the mood. The popcorn is theoretical.",
      },
      {
        type: "p",
        text: "A movie picker for couples is a way to choose a movie together, so one person is not stuck pitching options while the other sits in judgment. The catalog was never the hard part. Agreeing on one film, tonight, is.",
      },
      {
        type: "figure",
        src: guideImages.coupleAtScreen,
        alt: "Two people seen from behind, watching a film on a screen in a dark room.",
        caption: "The hard part is agreeing, not finding another poster.",
        wide: true,
        priority: true,
      },
      {
        type: "h2",
        text: "Why the remote always lands on one person",
      },
      {
        type: "p",
        text: "Most couples do not plan to make movie night a solo job. It just happens. One of you is faster with the remote. The other is tired, already half-scrolling on their phone, and says you should pick.",
      },
      {
        type: "p",
        text: "That sounds generous. It puts the whole evening on one person. They have to guess a mood, dodge anything that landed badly last month, and keep a straight face when a suggestion gets a shrug. After a few no's, the offers get safer. You end up with a movie neither of you would have chosen on purpose.",
      },
      {
        type: "p",
        text: "The shared scroll has its own problem. You narrate every poster out loud. Too long. Too sad. We saw his last one. By the time a title survives, the night already feels like a meeting. A movie picker only helps if it shortens that meeting.",
      },
      {
        type: "cta",
      },
      {
        type: "h2",
        text: "You pick is a way of avoiding blame",
      },
      {
        type: "p",
        text: "When someone says you pick, they are usually trying to be easy. They do not want to be difficult, and they do not want to be the reason the movie was bad. So the other person carries it. If the film is slow, it is their fault. If it is great, it was luck. Next time they pick even safer.",
      },
      {
        type: "p",
        text: "Taking turns does not fully fix this. On your night you still have to predict what the other person will sit through. A film you love and they endure is a fine solo watch. It is a poor way to spend a night together. Choosing a movie together means finding the overlap, rather than crowning a winner.",
      },
      {
        type: "h2",
        text: "Look for the overlap",
      },
      {
        type: "p",
        text: "A fairer movie night starts with a smaller question: what would you actually press play on tonight? Not someday, and not a film you respect and would never finish on a Wednesday. Tonight, on this couch, at this energy level.",
      },
      {
        type: "p",
        text: "Each of you answers that on the same short list, privately. Then you only talk about the movies you both marked. That overlap is the decision. Everything else can wait for a different mood.",
      },
      {
        type: "p",
        text: "Private matters. If you react out loud, people edit themselves. You skip the odd comedy because you are not sure it will land. They skip the quiet drama because last time you checked your phone. A quiet pass lets the honest yes show up before either of you performs a taste.",
      },
      {
        type: "h2",
        text: "A simple way to choose a movie together",
      },
      {
        type: "p",
        text: "You can do a rough version of this with a note on your phone. It takes less time than it sounds, as long as you keep the pile small.",
      },
      {
        type: "steps",
        items: [
          {
            title: "Start with a constraint",
            text: "Under two hours. Nothing either of you has seen. Something light, because it is Tuesday. A constraint turns an endless home screen into a pile a person can actually finish. If you cannot agree on a constraint, you will not agree on a title, and it is better to notice that in the first minute.",
          },
          {
            title: "Name the mood in one sentence",
            text: "Funny and easy is a decision. The one with the actor from that show is a search that grows. Say the mood out loud, once, and then stop adding genres. If you want a looser evening with more people, the same idea scales — see the notes on a [movie picker for friends](/guides/movie-picker-for-friends).",
          },
          {
            title: "Do a quiet pass, then stop at the first real yes",
            text: "Each person looks at the same ten or fifteen movies and marks yes or no. No commentary until you are both done. Then compare. You will often find you already agreed and had not said it. If you both would watch it, watch it. Holding out for a better option is how the same series gets a fourth rewatch.",
          },
        ],
      },
      {
        type: "p",
        text: "The longer version of this, including what to do when the list is still huge, is in [how to decide what movie to watch](/guides/how-to-decide-what-movie-to-watch). With more than two people, the same overlap has a stricter room — that version is [how to choose a movie together](/guides/how-to-choose-a-movie-together).",
      },
      {
        type: "h2",
        text: "When nothing overlaps",
      },
      {
        type: "p",
        text: "Sometimes you both finish and the shared list is empty. That is useful. One of you wants something heavy. The other wants to turn their brain off. Say that, then use a default you picked before anyone was annoyed: shortest runtime, a coin flip, or whoever did not pick last time.",
      },
      {
        type: "p",
        text: "The default should produce something the other person can sit through. An empty overlap is a cleaner outcome than a fake yes that turns into a phone in someone's hand at minute twenty. You can also split the week — their lane tonight, yours on Friday — as long as each pick is a movie, not a test.",
      },
      {
        type: "h2",
        text: "What a couple's movie picker should actually do",
      },
      {
        type: "p",
        text: "If you use a tool, it should stay boring in the best way. Same list for both of you. Swipes that stay private until you are done. A clear match when you both say yes. A hint about where it is streaming, so agreeing does not turn into a second search.",
      },
      {
        type: "p",
        text: "That is a narrow job. A streaming search, a random button, and a film diary are different tools, which is the distinction in [best movie picker apps](/guides/best-movie-picker-apps).",
      },
      {
        type: "figure",
        src: guideImages.match,
        alt: "Synema match screen with a WATCH stamp after both people liked the same movie.",
        caption: "A match is the only title you still have to talk about.",
        variant: "product",
      },
      {
        type: "checklist",
        items: [
          "One shared pile, small enough to finish",
          "A yes that does not have to be performed out loud",
          "A stop rule: the first movie you both want is the movie",
          "Somewhere obvious to press play once you have matched",
        ],
      },
      {
        type: "p",
        text: "Couples rarely need more opinions. They need the films they already agree on, a bit sooner. Synema is built for that moment. You each swipe. When you both like the same movie, it is a match, and the scrolling can end.",
      },
      {
        type: "h2",
        text: "Common questions",
      },
      {
        type: "faq",
        items: [
          {
            q: "How do you decide what to watch with your partner?",
            a: "Agree a constraint and a mood first. Then each of you marks the same short list in private, and you only talk about the films you both said yes to. The first one you would both start is the one you watch. If the catalog is still the problem, the longer version is [how to decide what movie to watch](/guides/how-to-decide-what-movie-to-watch).",
          },
          {
            q: "What if we want different kinds of night?",
            a: "Say so, then use a default you picked before anyone was annoyed: shortest runtime, a coin flip, or whoever did not pick last time. An empty overlap is cleaner than a fake yes. For more than two people, the stricter version is [how to choose a movie together](/guides/how-to-choose-a-movie-together).",
          },
        ],
      },
    ],
  },
  {
    slug: "movie-picker-for-friends",
    title: "Movie Picker for Friends: Find Something Everyone Wants to Watch",
    metaTitle:
      "Movie Picker for Friends: Find Something Everyone Wants to Watch – Synema",
    metaDescription:
      "How to pick a movie with friends when the group chat fills up with maybes, and how to leave with a film the room will actually start.",
    description:
      "How a group can leave with one movie, instead of a thread full of maybes.",
    category: "For friends",
    publishedAt: published,
    updatedAt: "2026-09-29",
    inlineCta:
      "Rather than another group chat poll? Synema lets everyone swipe privately and shows the movies you all like.",
    bottomCta: {
      kicker: "Stop debating. Start watching.",
      title:
        "Synema helps couples and groups find the movie everyone actually wants to watch.",
      body: "Everyone swipes on their own phone. A movie counts when the room actually wants it.",
    },
    related: [
      "how-to-choose-a-movie-together",
      "best-movies-to-watch-with-friends",
      "movie-picker-for-couples",
    ],
    blocks: [
      {
        type: "p",
        text: "Someone says movie night. Someone else says they are in. Then the group chat fills up with links, half-jokes, and the sentence that ends every plan: anything is fine.",
      },
      {
        type: "p",
        text: "Anything is fine is rarely true. It means I do not want to be the person who sinks the plan. A movie picker for friends gives the group a way to answer honestly, at the same time, and walk out with one title.",
      },
      {
        type: "figure",
        src: guideImages.friendsAtScreen,
        alt: "Three people seen from behind, watching a movie together.",
        caption: "A group only needs the titles more than one person would actually start.",
        wide: true,
        priority: true,
      },
      {
        type: "h2",
        text: "Why friend groups stall",
      },
      {
        type: "p",
        text: "Two people can negotiate. Four people produce a committee. Every extra person adds a veto, a mood, and a film they are sure everyone will love. The host starts curating to keep the peace. The chat gets longer. The start time slips.",
      },
      {
        type: "p",
        text: "Polls look democratic and still fail. The options were chosen by whoever bothered to type them. People vote for the safe title so they do not look fussy. Someone who has already seen it abstains and then talks through the opening. You did not decide what to watch. You ranked a shortlist nobody was excited about.",
      },
      {
        type: "p",
        text: "There is also the loudest-voice problem. One friend has strong taste and a fast mouth. The others go along because arguing about a movie feels silly. Twenty minutes in, two phones are out. The movie was chosen. The room was not.",
      },
      {
        type: "cta",
      },
      {
        type: "h2",
        text: "What a group movie picker is for",
      },
      {
        type: "p",
        text: "A group movie picker is a shared pass over the same movies, with the likes kept separate until everyone has answered. The point is the overlap: titles more than one person would actually watch tonight.",
      },
      {
        type: "p",
        text: "It is a small tool for a specific mess. You do not need a social network, a power ranking, or a debate about whether a three-hour epic counts as a hangout. You need the films that survive contact with the actual people on the couch.",
      },
      {
        type: "h2",
        text: "Set the room up so a decision can happen",
      },
      {
        type: "p",
        text: "Before anyone names a title, spend one minute on the shape of the night. This is the part groups skip, and it is the part that saves the next half hour.",
      },
      {
        type: "steps",
        items: [
          {
            title: "Cap the guest list in your head",
            text: "Five people can still share one movie. Eight people are a party that happens to have a screen nearby, and the film matters less than the snacks. If you are trying to please a crowd, pick something familiar and loud, on purpose. If you want a real pick, keep the room small enough that a match means something.",
          },
          {
            title: "Agree on a lane",
            text: "New to everyone, or comfort rewatch. Funny, or tense. Home by midnight, which quietly rules out the long ones. Write the lane in the chat in a single sentence so later suggestions have somewhere to bounce off. A theme can do this job too — there are a few that work in [movie night ideas](/guides/movie-night-ideas).",
          },
          {
            title: "Give everyone the same pile",
            text: "One person can build a list of twelve to twenty films that fit the lane, including where they are streaming. Then everyone marks yes or no on their own. Building the pile is hosting. Marking it is the decision. Those are different jobs, and they should not happen in the same breath.",
          },
        ],
      },
      {
        type: "h2",
        text: "How to read the results",
      },
      {
        type: "p",
        text: "If one movie is a yes from everyone, play it. Do not reopen the chat to see whether a slightly cooler option exists. The win condition was agreement, and you have it.",
      },
      {
        type: "p",
        text: "If several movies clear the room, use a boring tie-break: shortest runtime, the one nobody has seen, or a quick second swipe on just those finalists. If you want a rule of thumb for ties and empty lists, [how to decide what movie to watch](/guides/how-to-decide-what-movie-to-watch) goes further.",
      },
      {
        type: "p",
        text: "If nothing clears, the lane was wrong, or the group is split between two moods. Say so. Offer two piles — one light, one heavier — and let people choose a pile before they choose a film. That is faster than inventing a compromise movie that nobody named.",
      },
      {
        type: "checklist",
        items: [
          "Everyone answers the same list",
          "Likes stay private until the pass is done",
          "A match is a movie most of the room would start",
          "The first solid match ends the search",
        ],
      },
      {
        type: "h2",
        text: "When the room wants different things",
      },
      {
        type: "p",
        text: "Do not hunt for a film that is everyone's favorite. Hunt for a film most of the room would start, and that nobody has a hard no against. Favorites can take the rest of the year.",
      },
      {
        type: "p",
        text: "If the split is stable — half the room wants horror, half wants a comedy — alternate on purpose. Write down whose night is next, in the same chat where the plan was made, so fairness does not depend on anyone remembering.",
      },
      {
        type: "p",
        text: "The person with the odd taste should get a whole night sometimes, instead of a watered-down film every time. One musical that three people will try is a better plan than a permanent compromise nobody asked for.",
      },
      {
        type: "p",
        text: "What counts as a hard no, and what to do when the overlap is only partial, is in [how to choose a movie together](/guides/how-to-choose-a-movie-together).",
      },
      {
        type: "h2",
        text: "Keep it off the group chat",
      },
      {
        type: "p",
        text: "Chat is a bad ballot box. Messages arrive late, jokes outvote real preferences, and the person who replies first frames the whole thread. A private swipe takes the performance out. People will yes a musical, or a subtitled film, when they do not have to defend it in front of friends first.",
      },
      {
        type: "figure",
        src: guideImages.createRoom,
        alt: "Synema create room screen with options to watch with friends or alone.",
        caption: "Open one room. Everyone answers the same pile on their own phone.",
        variant: "product",
      },
      {
        type: "p",
        text: "Synema is that pass, done in one room. Someone creates it and invites the people they are watching with. Everyone swipes through the same movies on their own phone. When everyone swipes right on the same movie, it is a match, and you stop. The two-person version of the same stall is the [movie picker for couples](/guides/movie-picker-for-couples).",
      },
      {
        type: "p",
        text: "If the missing piece is the pile, [movies that tend to work with friends](/guides/best-movies-to-watch-with-friends) is a lane you can steal from, not a list you have to finish. If you are comparing apps, [best movie picker apps](/guides/best-movie-picker-apps) separates a group match from a streaming search and a diary.",
      },
      {
        type: "h2",
        text: "Common questions",
      },
      {
        type: "faq",
        items: [
          {
            q: "Why does choosing a movie with friends take so long?",
            a: "Every extra person adds a veto and a reason not to be the one who picks badly. The catalog is not the slow part. Waiting for a public, unanimous, defensible yes is.",
          },
          {
            q: "What if nobody likes the same movie?",
            a: "Say so, then change one thing: the mood, or whose turn it is. Do not open a second streaming app and start over. If you want a default, the shortest film that anyone liked is blunt and usually fair.",
          },
          {
            q: "What if someone has already seen it?",
            a: "Ask whether they want to watch it again. A film they have seen can still be a yes. If they do not want to sit through it, that is a real no, and it should count. Do not make them abstain and then talk over the opening.",
          },
          {
            q: "Is a group chat poll enough?",
            a: "Only if the options were not chosen by one person and the votes are not a performance. Most chat polls fail both. People vote for the safe title, and the friend who has already seen it stays quiet until it starts.",
          },
        ],
      },
    ],
  },
  {
    slug: "how-to-decide-what-movie-to-watch",
    title: "How to Decide What Movie to Watch Without Scrolling Forever",
    metaTitle:
      "How to Decide What Movie to Watch Without Scrolling Forever – Synema",
    metaDescription:
      "A practical way to decide what movie to watch: shrink the list, keep opinions honest, and stop scrolling before the night is over.",
    description:
      "Shrink the catalog, take an honest pass, and use a stop rule so the scroll has an ending.",
    category: "Deciding",
    publishedAt: published,
    updatedAt: "2026-09-29",
    inlineCta:
      "If you'd rather not run the process by hand, Synema lets everyone swipe privately and reveals the movies you agree on.",
    bottomCta: {
      kicker: "Stop debating. Start watching.",
      title:
        "Synema helps couples and groups find the movie everyone actually wants to watch.",
      body: "Bring the same list, keep the likes private, and skip the part where someone has to nominate a film.",
    },
    related: [
      "how-to-choose-a-movie-together",
      "what-to-watch-tonight",
      "movie-picker-for-couples",
    ],
    blocks: [
      {
        type: "p",
        text: "You open an app to decide what to watch. You close it. You open another. Somewhere in there, someone says they do not mind, which is how forty minutes disappear and the evening becomes a highlight reel of menus.",
      },
      {
        type: "p",
        text: "Endless choice feels like freedom and behaves like a stall. The fix is a short process with an ending. You can run it for yourself, with a partner, or with a room full of friends. The steps barely change.",
      },
      {
        type: "figure",
        src: guideImages.swipe,
        alt: "Synema swipe screen showing a movie card you can like or pass in private.",
        caption: "The decision is a private pass over one pile, not another row of the catalog.",
        variant: "product",
        priority: true,
      },
      {
        type: "h2",
        text: "Why scrolling feels productive",
      },
      {
        type: "p",
        text: "Scrolling gives you the feeling of progress. New posters, new trailers, a sense that the right film is one row down. It rarely is. Each extra minute raises the standard. The movie you would have enjoyed at 8:10 now has to justify the search that replaced it.",
      },
      {
        type: "p",
        text: "Other people make this worse in a specific way. If you are choosing for a group, every title is a small social risk. You start filtering for what is defensible, which is a different list from what you want. That is how what movie should we watch turns into what movie will nobody complain about. The back-and-forth between people is [how to choose a movie together](/guides/how-to-choose-a-movie-together). This page is the part that still works if you are on your own: shrink the list, then stop.",
      },
      {
        type: "cta",
      },
      {
        type: "h2",
        text: "Give the decision a shape",
      },
      {
        type: "p",
        text: "Before you look at a single title, answer three questions. Who is watching? How much time do you have? What kind of energy is in the room? Write the answers down if more than one person is involved, so they do not drift.",
      },
      {
        type: "checklist",
        items: [
          "Who has a real veto, and who is happy to go along",
          "A runtime cap, so the long films leave the pile",
          "One mood: easy, tense, funny, or already-seen comfort",
          "A stop time for the search itself, such as ten minutes",
        ],
      },
      {
        type: "p",
        text: "If you cannot answer those, you are browsing for fun. That is allowed. Call it browsing, and pick a different night to actually watch something. Mixing the two is how you decide what to watch at the exact moment everyone gets hungry and gives up.",
      },
      {
        type: "h2",
        text: "Build a small pile, then judge it once",
      },
      {
        type: "p",
        text: "Open one service, or a note, and collect ten to twenty titles that fit the shape. Include a few obvious ones and a few you are curious about. Then close the catalog. The rest of the decision happens inside that pile.",
      },
      {
        type: "p",
        text: "Judging the open internet never ends, because the internet does not end. Judging twenty movies can end in a few minutes. If you are with other people, give everyone the same twenty. Ask for a yes or a no, kept private until each person is done. Talking during the pass turns it back into a debate.",
      },
      {
        type: "h3",
        text: "Use a stop rule",
      },
      {
        type: "pullout",
        text: "The first movie that clears the room is the movie.",
      },
      {
        type: "p",
        text: "If you are alone, the first film you would start without bargaining with yourself is the movie. A stop rule sounds strict and feels like relief. You can always watch the runner-up another night. You cannot watch a film you never start.",
      },
      {
        type: "h3",
        text: "Break ties without a second search",
      },
      {
        type: "p",
        text: "Two or three films left is a good problem. Sort them by the constraint you already set: shortest, newest to the group, or whichever is leaving a service soon. Flip a coin if they are truly equal. Reopening the full catalog at this point is how the ten-minute search becomes thirty.",
      },
      {
        type: "h2",
        text: "When the pile fails",
      },
      {
        type: "p",
        text: "An empty yes-list means the shape was wrong. Someone wanted comfort and someone wanted a premiere. Split into two smaller piles and pick the pile first. Choosing a mood is a real decision, and it is easier than choosing a title from a mix of moods.",
      },
      {
        type: "p",
        text: "If you are alone and nothing appeals, you are probably tired of deciding, not out of movies. Drop the bar. Rewatch something you already trust, or pick the shortest film in the pile and give it fifteen minutes. Quitting a movie is cheaper than quitting the night in a menu.",
      },
      {
        type: "p",
        text: "For the specific case of a weeknight with another person on the couch, [what should we watch tonight](/guides/what-to-watch-tonight) is the shorter version of this. If the stall is mostly a couple dynamic, start with the [movie picker for couples](/guides/movie-picker-for-couples).",
      },
      {
        type: "h2",
        text: "Make the next time easier",
      },
      {
        type: "p",
        text: "Keep a running note of films people mention during the week, when nobody is trying to start a movie right now. A list built on a random Tuesday is more honest than a list built while everyone is waiting. Next movie night, that note is your pile. You skip the archaeology.",
      },
      {
        type: "p",
        text: "You can also borrow a constraint from a theme so the pile builds itself. A few that actually shrink the choice are in [movie night ideas](/guides/movie-night-ideas).",
      },
      {
        type: "p",
        text: "Synema does the private pass for you. Everyone swipes the same movies, a match appears when you agree, and the search has a visible ending. The process above still works with a notepad. The app just removes the part where someone has to be the host of the list.",
      },
    ],
  },
  {
    slug: "how-to-choose-a-movie-together",
    title: "How to Choose a Movie Together Without Arguing or Endless Scrolling",
    metaTitle:
      "How to Choose a Movie Together Without Arguing or Endless Scrolling – Synema",
    metaDescription:
      "How to choose a movie together: agree on the rules before the titles, keep each yes honest, and stop when the overlap is real.",
    description:
      "How two or more people can agree on one film without making someone the villain of the choice.",
    category: "Together",
    publishedAt: "2026-09-29",
    updatedAt: "2026-09-29",
    inlineCta:
      "If you'd rather not host the list yourself, Synema lets everyone swipe privately and reveals the movies you agree on.",
    bottomCta: {
      kicker: "Stop debating. Start watching.",
      title: "Same list. Private swipes. A movie when you actually agree.",
      body: "Synema keeps the yeses honest and ends the search when the room overlaps.",
    },
    related: [
      "how-to-decide-what-movie-to-watch",
      "movie-picker-for-couples",
      "movie-picker-for-friends",
    ],
    blocks: [
      {
        type: "p",
        text: "Choosing a movie together is a strange little argument. Everyone wants the night to start. Nobody wants to be the person who picked wrong. So the conversation circles, the catalog stays open, and the film you would have enjoyed at the beginning is still unwatched.",
      },
      {
        type: "p",
        text: "This page is about the part that happens between people. Shrinking a huge catalog is its own job, and it is written up in [how to decide what movie to watch](/guides/how-to-decide-what-movie-to-watch). What follows is how two or more people land on one title without turning it into a trial.",
      },
      {
        type: "figure",
        src: guideImages.livingRoom,
        alt: "Two people on a sofa, seen from behind, with a film on the television.",
        caption: "The film can wait a minute. The way you are choosing should not.",
        wide: true,
        priority: true,
      },
      {
        type: "h2",
        text: "Most of the fight is about the process",
      },
      {
        type: "p",
        text: "It looks like a disagreement about a movie. Often it is a disagreement about who is exposed. One person keeps naming titles and collecting the nos. Another stays vague, because a vague person cannot be blamed. A third has a film in mind and hears every other idea as a rejection.",
      },
      {
        type: "p",
        text: "Until the process is shared, every suggestion is a small test of someone's taste. People defend harder than they need to, or they give up and say anything is fine. Anything is fine is rarely a preference. It is a way to leave the decision in someone else's hands.",
      },
      {
        type: "cta",
      },
      {
        type: "h2",
        text: "Decide what a yes means",
      },
      {
        type: "p",
        text: "A lot of these arguments are people using yes for different things.",
      },
      {
        type: "ul",
        items: [
          "I want to watch this tonight",
          "I can sit through it",
          "I do not want to be difficult",
        ],
      },
      {
        type: "p",
        text: "Ask for the first one. A pile of films people can sit through produces something that starts and then loses the room to phones. A pile of I do not want to be difficult produces the same safe film as last time.",
      },
      {
        type: "pullout",
        text: "A useful yes is a movie you would start, not a movie you would tolerate.",
      },
      {
        type: "h2",
        text: "Agree the rules before anyone names a film",
      },
      {
        type: "p",
        text: "This takes about a minute. It saves the next twenty. Say it once, out loud, before a single poster.",
      },
      {
        type: "steps",
        items: [
          {
            title: "Who has a say",
            text: "Everyone who will actually watch, not everyone who happens to be in the apartment. A person leaving after the trailer does not need a veto.",
          },
          {
            title: "What agreement means",
            text: "Everyone, or most of the room. For two people, most of the room is both of you. For a few friends, waiting on a unanimous favorite is how you rewatch something harmless. The friends version of that rule is a [movie picker for friends](/guides/movie-picker-for-friends).",
          },
          {
            title: "The backup, chosen now",
            text: "Shortest film left, a coin flip, or whoever did not choose last time. Pick the backup while everyone is still pleasant. You will not invent a fair one later.",
          },
        ],
      },
      {
        type: "p",
        text: "Couples get stuck in a narrower version of the same rules, usually with one person holding the remote. That case is a [movie picker for couples](/guides/movie-picker-for-couples).",
      },
      {
        type: "h2",
        text: "Take the performance out of the pass",
      },
      {
        type: "p",
        text: "Same short list for everyone. Each person marks yes or no without explaining. Then you compare. The overlap is the decision.",
      },
      {
        type: "p",
        text: "Narrating during the pass lets the first confident opinion become the group's taste. People edit a yes into a maybe because they do not want to argue about a musical, a subtitle, or a film someone already dismissed. A few quiet minutes are the point.",
      },
      {
        type: "tip",
        text: "If you cannot get through fifteen titles without debating them, the list is too open. Close it, name the mood, and build a smaller one.",
      },
      {
        type: "p",
        text: "How big that list should be, and why the first real overlap wins, is the practical half of [how to decide what movie to watch](/guides/how-to-decide-what-movie-to-watch). Use that when the catalog is the problem. Stay here when the people are.",
      },
      {
        type: "h2",
        text: "Read the overlap, then stop",
      },
      {
        type: "p",
        text: "If everyone marked the same film, play it. Do not go looking for a slightly better one. You were searching for agreement, and you have it.",
      },
      {
        type: "p",
        text: "If most of the room said yes and one person said no, ask which kind of no it is. A real no — I will not enjoy this, or I have seen it and I do not want to sit through it again — should count. A soft no that means I had a different favorite can yield. Pretending those are the same answer is how someone spends the film on their phone.",
      },
      {
        type: "p",
        text: "If the room splits into two moods, do not average them into a third film nobody named. Choose the mood first. Light or heavy. New or familiar. Then pick inside the mood that won.",
      },
      {
        type: "p",
        text: "If the overlap is empty, use the backup you already chose. Opening another app is a new decision, which is the thing you were trying to finish.",
      },
      {
        type: "figure",
        src: guideImages.match,
        alt: "Synema match screen with a WATCH stamp after the room liked the same movie.",
        caption: "A match is the overlap. Everything else can wait.",
        variant: "product",
      },
      {
        type: "h2",
        text: "When you should stop choosing one film",
      },
      {
        type: "p",
        text: "Some nights the overlap is empty because the tastes are actually different, not because the process failed. Forcing a compromise film every time teaches people to fake the next yes.",
      },
      {
        type: "p",
        text: "Take turns on purpose. Their lane this time, yours next, written down so it is not a vague promise. The person whose turn it is still brings something the other can sit through. A turn is not a license to program a film the room will endure out of politeness.",
      },
      {
        type: "p",
        text: "You can also split the evening without calling it a failure. One short film everyone can stand, and the heavier one waits for another night. That is still a decision.",
      },
      {
        type: "h2",
        text: "A tool only helps if it keeps the rules",
      },
      {
        type: "p",
        text: "You can run all of this with a note. The list has to be shared, the marks have to stay private until everyone is done, and something visible has to count as finished.",
      },
      {
        type: "p",
        text: "Synema is built for that pass. Someone opens a room and invites the people they are watching with. Everyone swipes through the same movies on their own phone. When everyone swipes right on the same movie, it is a match. If you are comparing that job with a streaming search or a diary, [best movie picker apps](/guides/best-movie-picker-apps) keeps them apart.",
      },
      {
        type: "p",
        text: "It will not referee two people who want different kinds of evening, and it will not replace a diary of everything you have seen. Choosing tonight and logging it later are different jobs. [Synema and Letterboxd](/compare/synema-vs-letterboxd) sit on opposite sides of that line.",
      },
      {
        type: "h2",
        text: "Common questions",
      },
      {
        type: "faq",
        items: [
          {
            q: "What if someone says they do not care?",
            a: "Treat that as I will not name a film, not as any film is fine. Ask them to mark the list anyway, with a real yes or no. People who do not care out loud often care at minute twenty.",
          },
          {
            q: "Should one person just pick, to save time?",
            a: "Sometimes, if you agreed to that before the scroll started. A surprise you pick, in the middle of the argument, hands them the blame along with the remote. A planned turn is different from giving up.",
          },
          {
            q: "How is this different from the couples and friends guides?",
            a: "Those pages are the specific stall. One partner stuck with the remote, or a group chat that never lands. This page is the shared part underneath both. If it is just the two of you, start with the [movie picker for couples](/guides/movie-picker-for-couples). If the chat is the problem, start with the [movie picker for friends](/guides/movie-picker-for-friends).",
          },
        ],
      },
    ],
  },
  {
    slug: "what-to-watch-tonight",
    title: "What Should We Watch Tonight?",
    metaTitle: "What Should We Watch Tonight? – Synema",
    metaDescription:
      "What should we watch tonight? A short plan for picking a movie when you're tired, the catalog is huge, and nobody wants to choose wrong.",
    description:
      "A ten-minute plan for the nightly question, including a rule for when to just press play.",
    category: "Tonight",
    publishedAt: published,
    updatedAt: "2026-09-29",
    inlineCta:
      "For tonight, specifically: Synema lets everyone swipe privately and reveals the movies you agree on.",
    bottomCta: {
      kicker: "Stop debating. Start watching.",
      title:
        "Synema helps couples and groups find the movie everyone actually wants to watch.",
      body: "Open a room, swipe for a few minutes, and leave with a movie instead of another scroll.",
    },
    related: [
      "how-to-decide-what-movie-to-watch",
      "movie-night-ideas",
      "movie-picker-for-couples",
    ],
    blocks: [
      {
        type: "p",
        text: "What should we watch tonight is a small question with a talent for eating the evening. You are already home. The decision should be shorter than the movie. It often is not.",
      },
      {
        type: "p",
        text: "Tonight is different from a perfect film weekend. People are tired, the runtime matters, and someone has an early morning. You need a movie that fits the room you actually have, found before the room gives up and defaults to a series it has memorized.",
      },
      {
        type: "figure",
        src: guideImages.livingRoom,
        alt: "Two people on a sofa, seen from behind, watching a film on the television.",
        caption: "Start from the room and the clock. The poster can wait.",
        wide: true,
        priority: true,
      },
      {
        type: "h2",
        text: "Start from the clock, not the poster",
      },
      {
        type: "p",
        text: "Look at the time before you look at a thumbnail. If you want to be in bed by eleven, you do not have a three-hour slot, no matter how good the film is. Subtract twenty minutes for settling in and the search itself. What remains is your runtime cap. Say it out loud so the long movies leave the conversation early.",
      },
      {
        type: "p",
        text: "Then name the energy in one word. Easy, funny, tense, or familiar. Tonight is a bad time to discover that one person wanted a thriller and the other wanted to fold laundry with a comedy on. If the words do not match, pick the lower-energy one. You can spend ambition on a Friday.",
      },
      {
        type: "cta",
      },
      {
        type: "h2",
        text: "A ten-minute way to answer it",
      },
      {
        type: "p",
        text: "Set a timer if you need the pressure. Ten minutes is enough for a weeknight. When it rings, you are watching something, even if the something is a rewatch.",
      },
      {
        type: "steps",
        items: [
          {
            title: "Minute one: who is in the room",
            text: "Just you, a partner, or friends who have opinions. The more people, the smaller the pile should be. Two people can wander a bit. A group needs a lane. If friends are coming over and the night is meant to feel like an event, borrow a theme from [movie night ideas](/guides/movie-night-ideas) and then come back to the timer.",
          },
          {
            title: "Minutes two to six: a short list",
            text: "Collect about ten films that fit the runtime and the energy. Pull from a note you already keep, from one streaming service, or from whatever people have mentioned this week. Do not tour five apps. Five apps is how the timer loses.",
          },
          {
            title: "Minutes seven to ten: honest yes or no",
            text: "Each person marks the list without narrating. Then compare. Play the first film you share a yes on. If you are solo, play the first film you would start without a speech about how you should watch something better.",
          },
        ],
      },
      {
        type: "h2",
        text: "Good enough is the correct standard",
      },
      {
        type: "tip",
        text: "Weeknights punish perfectionism. The film only has to be one you will still be watching after fifteen minutes, with these people, at this hour. A movie you both like is a better outcome than a movie one of you admires and the other tolerates.",
      },
      {
        type: "p",
        text: "Rewatches count. If everyone relaxes when a familiar title comes up, that is information. Familiar is a mood, and some nights it is the right one. Save the unseen, ambitious pick for a night when the timer is not running.",
      },
      {
        type: "h2",
        text: "If you still cannot land",
      },
      {
        type: "p",
        text: "Use a default you will not relitigate. Shortest film on the list. A coin flip between the last two. Whoever did not choose last time picks from the yeses, and the yeses only. Defaults feel blunt, which is why they work when everyone is bored of talking.",
      },
      {
        type: "p",
        text: "What you should skip is a fresh search. A new app, a new genre, a trailer that leads to another trailer. If the ten films failed, the energy word was wrong. Change the word — from tense to easy, for example — build five new titles, and stop there. The longer method for stubborn nights is [how to decide what movie to watch](/guides/how-to-decide-what-movie-to-watch).",
      },
      {
        type: "checklist",
        items: [
          "Runtime first, so the evening has a real ending",
          "One energy word, shared before any titles",
          "Ten films, one service or one note",
          "The first shared yes wins",
          "A default ready for when the yeses are thin",
        ],
      },
      {
        type: "h2",
        text: "Two people, or a few more",
      },
      {
        type: "p",
        text: "With a partner, the failure mode is polite vetoes. Keep the pass private so a maybe can be a real no, and a secret yes can survive. The [movie picker for couples](/guides/movie-picker-for-couples) is written for that exact stall.",
      },
      {
        type: "p",
        text: "With friends, the failure mode is the group chat. Anything is fine until it is time to press play. Same timer, same list, likes kept on each person's own screen. A [movie picker for friends](/guides/movie-picker-for-friends) earns its place on a Tuesday precisely because nobody wants a production. They want the question to end. A few films that tend to survive a room are in [movies to watch with friends](/guides/best-movies-to-watch-with-friends).",
      },
      {
        type: "p",
        text: "Synema is the short version of this plan. You swipe the same movies in private, and the titles you agree on are the ones left standing. Tonight does not need a better algorithm. It needs a smaller decision and a point where you stop.",
      },
    ],
  },
  {
    slug: "movie-night-ideas",
    title: "Movie Night Ideas That Make Choosing What to Watch Easier",
    metaTitle:
      "Movie Night Ideas That Make Choosing What to Watch Easier – Synema",
    metaDescription:
      "Movie night ideas that shrink the choice: a theme, a genre, a blind pick, or a rotating chooser. Then agree before the snacks get cold.",
    description:
      "Themes and constraints that shrink the choice, so the night starts on a movie instead of a menu.",
    category: "Movie night",
    publishedAt: published,
    updatedAt: "2026-09-29",
    inlineCta:
      "When the theme is set and you still need a title, Synema lets everyone swipe privately and reveals the movies you agree on.",
    bottomCta: {
      kicker: "Stop debating. Start watching.",
      title:
        "Synema helps couples and groups find the movie everyone actually wants to watch.",
      body: "Pick a theme if you want. Then let the group swipe and keep whatever you all like.",
    },
    related: [
      "what-to-watch-tonight",
      "movie-picker-for-friends",
      "movie-picker-for-couples",
    ],
    blocks: [
      {
        type: "p",
        text: "A good movie night idea does two jobs. It makes the evening feel like something, and it makes the choice smaller. A bad one is a decoration you add after forty minutes of scrolling, when the decision is already tired.",
      },
      {
        type: "p",
        text: "Themes, rules, and tiny rituals work when they happen first. They give everyone the same fence to stand inside. Once you are inside it, picking a film is a shorter conversation.",
      },
      {
        type: "figure",
        src: guideImages.cinema,
        alt: "A dark cinema seen from the back row, with the screen lit and the audience in silhouette.",
        caption: "A good idea makes the evening feel like something, and the choice smaller.",
        wide: true,
        priority: true,
      },
      {
        type: "h2",
        text: "Use the idea as a filter",
      },
      {
        type: "pullout",
        text: "Any theme you cannot use to reject a movie is just a vibe.",
      },
      {
        type: "p",
        text: "Under ninety minutes is a filter. Cozy is a mood that still contains half of streaming. Prefer filters. You can add atmosphere after the title exists.",
      },
      {
        type: "p",
        text: "Pick one constraint and stop. Stacking five rules — short, funny, unseen, from the 90s, available on one specific app — usually leaves you with nothing, which sends you back to the open catalog. One sharp fence is enough.",
      },
      {
        type: "h2",
        text: "Ideas that actually shrink the list",
      },
      {
        type: "h3",
        text: "One service only",
      },
      {
        type: "p",
        text: "Choose the app before the movie. Everyone already paying for it, or whichever one is on the TV. You lose a few great films and gain an ending. Hopping between services feels thorough and mostly adds logins.",
      },
      {
        type: "cta",
      },
      {
        type: "h3",
        text: "The runtime box",
      },
      {
        type: "p",
        text: "Under 100 minutes, or over two hours on purpose because you cleared the evening. Runtime is the least romantic filter and the most useful. It respects mornings, trains, and people who get restless. Put the number in the invite so nobody arrives ready to argue for an epic.",
      },
      {
        type: "h3",
        text: "Unseen by everyone",
      },
      {
        type: "p",
        text: "No rewatches, no I have seen it but I will behave. This filter is stricter than it looks, and it removes the person who talks through a film they love. If the unseen pile is thin, that is a sign to relax the rule, explicitly, and do a comfort night instead.",
      },
      {
        type: "h3",
        text: "A decade, a city, or a director",
      },
      {
        type: "p",
        text: "1970s crime. Movies set in one city. Two films from the same director, months apart, if you want a series without calling it a series. A narrow slice of cinema still leaves plenty of titles, and it gives the group something to talk about that is not whose turn it is to pick.",
      },
      {
        type: "h3",
        text: "Double feature with a job",
      },
      {
        type: "p",
        text: "Two short films, not two long ones. Give them a link: a comedy and the darker film it is quietly answering, or an original and a remake. Decide both titles before you start the first, so the intermission does not become a second search. If the group is tired, drop the second film and keep the snacks. The plan did its job if the first movie started on time.",
      },
      {
        type: "h3",
        text: "A blind pick",
      },
      {
        type: "p",
        text: "One person builds a short list that fits a rule you already set, and withholds the titles until everyone has agreed to the rule. Or each person writes one fitting title, you draw, and the draw stands. No speech about why someone else's slip was worse.",
      },
      {
        type: "p",
        text: "This works when people trust the fence. Under two hours, comedy, unseen by the room. It falls apart when the fence is just a movie, because then you have randomized the catalog and called it a game.",
      },
      {
        type: "h3",
        text: "One genre",
      },
      {
        type: "p",
        text: "Horror, a heist, or a comedy you do not have to respect. A genre shrinks the night only if you refuse the second one. Funny, but also a thriller, but not silly is how the fence disappears. Name one, build a short pile inside it, and use the same yes or no.",
      },
      {
        type: "h3",
        text: "Whoever did not choose last time",
      },
      {
        type: "p",
        text: "Rotation works when the chooser brings two or three films they themselves would watch, inside the rule, and everyone else may strike one. It sours when the chooser tries to guess the whole room and arrives with nothing they want. Guessing is the scroll, moved one person earlier.",
      },
      {
        type: "figure",
        src: guideImages.emptyCinema,
        alt: "Empty cinema seats in a dark theater.",
        caption: "Atmosphere is what you add after a title exists.",
        wide: true,
      },
      {
        type: "h2",
        text: "Rituals that are about the room, not the algorithm",
      },
      {
        type: "p",
        text: "Some of the best movie night ideas barely touch the catalog. They make the decision feel lighter because the night is already a little arranged.",
      },
      {
        type: "checklist",
        items: [
          "Phones in a bowl once the movie starts, with a two-minute pause built in at the halfway point if people need that",
          "One snack rule: whoever did not host the list brings the food, so labor is split",
          "A single trailer, after you have chosen, never before",
          "A one-line review in the group chat the next day, which slowly builds next month's pile",
        ],
      },
      {
        type: "p",
        text: "Trailers before you choose are a trap. They are ads for spending more time choosing. Watch one after the title is locked, as a way of sitting down, or skip it and press play.",
      },
      {
        type: "h2",
        text: "Pick the idea, then pick the movie",
      },
      {
        type: "p",
        text: "Once the fence is up, go back to a normal decision. Ten to twenty films inside it. Everyone marks yes or no on their own. The first film the room shares is the one you watch. If you need the steps written out, [how to decide what movie to watch](/guides/how-to-decide-what-movie-to-watch) is the process, and [what should we watch tonight](/guides/what-to-watch-tonight) is the weeknight version with a timer.",
      },
      {
        type: "p",
        text: "Friends make this easier when the invite includes the rule. Movie at 8, under two hours, nothing any of us has seen is a better text than what do you want to watch. People can opt out of the rule before they are on your sofa. A [movie picker for friends](/guides/movie-picker-for-friends) is what you use after they have opted in. If you want films that tend to survive a group, start from [movies to watch with friends](/guides/best-movies-to-watch-with-friends) and cut the list down. For two people, you can skip the theme and still use a fence. That version is the [movie picker for couples](/guides/movie-picker-for-couples).",
      },
      {
        type: "h2",
        text: "Leave room for a match",
      },
      {
        type: "p",
        text: "A theme can become another way to be fussy. If the decade box produces three films and the group likes one of them, take the win. The idea was there to get you to a yes. It does not need to be honored past that.",
      },
      {
        type: "p",
        text: "Synema fits after the theme, not instead of it. You set the mood however you like, then everyone swipes in private and you keep the movies you agree on. The night can have a little ceremony. The choice does not have to.",
      },
      {
        type: "h2",
        text: "Common questions",
      },
      {
        type: "faq",
        items: [
          {
            q: "What if we cannot agree on a theme?",
            a: "Drop the theme and use a runtime cap. A number rejects films. A vibe does not. You can still put snacks out after the title exists.",
          },
          {
            q: "How do we avoid spending the night browsing?",
            a: "Put the idea in the invite, before anyone is on the sofa. Then give the choice a limit: one service, a short list, and the first film you share a yes on. Another theme will not help once you are already in the menu.",
          },
          {
            q: "What about a movie night for two?",
            a: "You do not need a theme. You need the same fence and a private yes, so one person is not pitching while the other vetoes. That is the [movie picker for couples](/guides/movie-picker-for-couples).",
          },
        ],
      },
    ],
  },
  {
    slug: "best-movie-picker-apps",
    title: "Best Movie Picker Apps, Sorted by the Job They Do",
    metaTitle: "Best Movie Picker Apps, Sorted by the Job They Do – Synema",
    metaDescription:
      "Movie picker apps, streaming guides, and film diaries solve different problems. How to tell which one you actually need tonight.",
    description:
      "A group match, a random start, a streaming search, or a diary. They are not the same tool.",
    category: "Picker tools",
    publishedAt: "2026-09-29",
    updatedAt: "2026-09-29",
    inlineCta:
      "If the job is agreeing with the people in the room, Synema lets everyone swipe privately and reveals the movies you agree on.",
    bottomCta: {
      kicker: "Stop debating. Start watching.",
      title: "Synema is for the agreement. Other tools can keep the rest.",
      body: "Open a room, swipe on your own phone, and keep the movies everyone wants to watch.",
    },
    related: [
      "movie-picker-for-friends",
      "movie-picker-for-couples",
      "letterboxd-alternatives-for-movie-discovery",
    ],
    blocks: [
      {
        type: "p",
        text: "Best movie picker app is a search that covers at least four different products. A way for a group to agree. A button that starts something so you can stop choosing. A guide to which service has the film. A diary of what you have already seen. Installing all four is a good way to recreate the scroll.",
      },
      {
        type: "p",
        text: "This page sorts those jobs. Synema is one of them. It is the wrong tool if you wanted a public log of every film you have watched, and it is not on the App Store or Google Play yet. The useful question is which problem you opened an app to solve.",
      },
      {
        type: "figure",
        src: guideImages.swipe,
        alt: "Synema swipe screen showing a movie card you can like or pass in private.",
        caption: "A picker is a pass over one pile. A diary and a streaming search are different screens.",
        variant: "product",
        priority: true,
      },
      {
        type: "h2",
        text: "Name the problem before the app",
      },
      {
        type: "checklist",
        items: [
          "Are other people part of the decision, or is it just you?",
          "Do you need a title, or the service that has a title you already chose?",
          "Do you want a record afterward?",
          "Do you want a suggestion for one person, or an overlap between people?",
        ],
      },
      {
        type: "p",
        text: "If you cannot answer those, you are browsing. That can be a pleasant hour. It is a poor way to start a movie at nine.",
      },
      {
        type: "h2",
        text: "When the room has to agree",
      },
      {
        type: "p",
        text: "This is the actual movie-picker job. Same short list for everyone who will watch. Answers kept separate until the pass is done. Something visible that counts as finished. A poll in a group chat often fails this, because the options were chosen by one person and the votes are a small performance.",
      },
      {
        type: "p",
        text: "[Synema](/) is built for that pass. One person creates a room and invites the others, up to five, with a link or a QR code. Everyone swipes the same movies on their own phone. Likes stay private. A match is when everyone swipes right on the same movie. On your own, a right swipe saves a film to a personal watchlist. Synema also shows where a movie is streaming in your country.",
      },
      {
        type: "p",
        text: "Downloading it is free, and joining someone else's room is free. Hosting a group room needs Synema Pro. Swiping on your own does not need a subscription. You can [join the waitlist](/#waitlist). An invite-only [Android beta](/beta-testing) is open if you want to try it before the public launch.",
      },
      {
        type: "p",
        text: "Other swipe-to-match apps exist. They are not interchangeable, and this page will not pretend to have audited each one's rules. Before you install one, check three things: whether a match needs everyone or only a majority, whether people can see each other's answers while they are still deciding, and whether the pile can be limited to services you actually have. A picker that ignores those three is a poll with extra animation.",
      },
      {
        type: "p",
        text: "You can run the same pass on paper. The steps between people are in [how to choose a movie together](/guides/how-to-choose-a-movie-together). The two-person version is a [movie picker for couples](/guides/movie-picker-for-couples). The group-chat version is a [movie picker for friends](/guides/movie-picker-for-friends).",
      },
      {
        type: "cta",
      },
      {
        type: "h2",
        text: "When you just need something to start",
      },
      {
        type: "p",
        text: "Sometimes nobody wants a process. They want the menu to go away. A random draw from a list you already filtered — a wheel, a slip of paper, a play-something button inside one streaming app — is a legitimate tool for that mood. Some services will simply start a title for you. That helps when you are alone, on one service, and you do not mind what it is.",
      },
      {
        type: "p",
        text: "Random fails when people have real nos. It is a stop rule, not a negotiation. Use it after the pile is small and the mood is shared. Using it on the entire catalog is how you land on a film nobody would have defended. The weeknight version, with a timer and a default, is [what should we watch tonight](/guides/what-to-watch-tonight).",
      },
      {
        type: "h2",
        text: "When you need to know where it is streaming",
      },
      {
        type: "p",
        text: "[JustWatch](https://www.justwatch.com) is a streaming guide. You look up a title, or filter by the services you pay for, and it shows where a film can be streamed, rented, or bought. It also keeps a watchlist. [Reelgood](https://reelgood.com) sits in the same category: where to watch, across services, rather than a vote among the people on the couch.",
      },
      {
        type: "p",
        text: "Use one of these after you have a title, or to build the short pile in the first place. Do not expect either to settle an argument. Availability also changes by country and by week, so treat it as a lookup, not as a fact you memorized last month.",
      },
      {
        type: "h2",
        text: "When you want a diary, ratings, or a database",
      },
      {
        type: "p",
        text: "[Letterboxd](https://letterboxd.com) is for logging films, rating them, writing about them, and reading other people. A list there can put a movie in your head. It does not take a private vote from the room. The side-by-side with Synema is [Synema vs Letterboxd](/compare/synema-vs-letterboxd). If you opened Letterboxd hoping it would choose for the couch, the closer page is [Letterboxd alternatives for deciding what to watch](/guides/letterboxd-alternatives-for-movie-discovery).",
      },
      {
        type: "p",
        text: "[IMDb](https://www.imdb.com) is the wide database: cast, ratings, and a place to look a film up when someone says the one with. That is useful. It will not tell you that the other three people would actually start it tonight.",
      },
      {
        type: "h2",
        text: "Pick the tool that matches the job",
      },
      {
        type: "table",
        caption: "What each kind of app is for, and what to stop asking it to do",
        columns: ["Job", "What helps", "What it will not do"],
        rows: [
          [
            "Agree with the people watching",
            "A private pass on one shared pile. Synema is built for this. A shared note works too.",
            "Keep a public diary of everything you have seen",
          ],
          [
            "Start something without a debate",
            "A random draw from a small list you already filtered",
            "Respect a hard no it never asked about",
          ],
          [
            "Find which service has it",
            "A streaming guide such as JustWatch",
            "Decide between people",
          ],
          [
            "Remember and talk about films",
            "Letterboxd",
            "End the scroll in the room",
          ],
          [
            "Look up a title or a rating",
            "IMDb",
            "Know what this room wants tonight",
          ],
        ],
      },
      {
        type: "h2",
        text: "Ignore the longer feature list",
      },
      {
        type: "p",
        text: "Trailers, a public profile, and a score out of ten are extras. The decision needs a small pile, an honest yes, and a point where you stop. If an app does not have those, it is a catalog in a different coat. An app for choosing a movie together is not the same thing as an app that recommends films to one person. A recommendation can fill the pile. The people in the room still have to answer it.",
      },
      {
        type: "h2",
        text: "Common questions",
      },
      {
        type: "faq",
        items: [
          {
            q: "What is the best movie picker app?",
            a: "There is not one. If other people are choosing with you, use a shared private pass. If you only need the service that has a film, use a streaming guide. If you want a log of what you have seen, use Letterboxd. Synema is for the first of those, and it is not a replacement for the other two.",
          },
          {
            q: "Are apps for choosing a movie together different from recommendation apps?",
            a: "Yes. A recommendation app suggests titles to one person. Choosing together means the people in the room have answered the same list. A good suggestion can still lose the room.",
          },
          {
            q: "Is a group chat poll enough?",
            a: "Only if the options were not chosen by one person and the votes are not a performance. Most chat polls fail both. The friends version of that problem is the [movie picker for friends](/guides/movie-picker-for-friends).",
          },
        ],
      },
    ],
  },
  {
    slug: "letterboxd-alternatives-for-movie-discovery",
    title: "Letterboxd Alternatives for Deciding What to Watch",
    metaTitle: "Letterboxd Alternatives for Deciding What to Watch – Synema",
    metaDescription:
      "Letterboxd is a diary and a community. If you wanted help deciding what to watch with other people, these are the alternatives that fit that job.",
    description:
      "When the thing you wanted was a decision, not another place to log films.",
    category: "Comparisons",
    publishedAt: "2026-09-29",
    updatedAt: "2026-09-29",
    inlineCta:
      "Deciding with the people on the couch is the part Synema is for. Everyone swipes privately, and you keep the movies you agree on.",
    bottomCta: {
      kicker: "Stop debating. Start watching.",
      title: "Keep Letterboxd for the diary. Use a pass for the decision.",
      body: "Synema is the overlap between the people who are actually watching.",
    },
    related: [
      "best-movie-picker-apps",
      "how-to-choose-a-movie-together",
      "movie-picker-for-friends",
    ],
    blocks: [
      {
        type: "p",
        text: "Most lists of Letterboxd alternatives are shopping for another diary. Ratings, reviews, a watchlist, people to follow. That is a fair search if you want to leave Letterboxd and keep the same job.",
      },
      {
        type: "p",
        text: "This page is for a narrower miss. You like films. You may already use Letterboxd. And you still cannot get the room to press play. A second diary will not fix that. The alternative you want depends on which part of movie night is actually stuck.",
      },
      {
        type: "figure",
        src: guideImages.cinema,
        alt: "A dark cinema seen from the back row, with the screen lit.",
        caption: "A feed can suggest a film. The people in the room still have to agree.",
        wide: true,
        priority: true,
      },
      {
        type: "h2",
        text: "What Letterboxd is good at",
      },
      {
        type: "p",
        text: "[Letterboxd](https://letterboxd.com) is a social network for film. People log what they have watched, rate films, write reviews, keep lists, and follow each other. Finding something to watch often happens sideways, through someone's review or a list, rather than through a shared decision with the people on your couch.",
      },
      {
        type: "p",
        text: "If that diary and that community are what you wanted, Synema is not the alternative. It does not keep a public log, it does not publish ratings or reviews, and the only group is the room you invited.",
      },
      {
        type: "h2",
        text: "The part it does not finish",
      },
      {
        type: "p",
        text: "A list can start a pick. Agreeing with the other people in the room still happens somewhere else, usually in a chat or a long scroll. That difference is the whole of [Synema vs Letterboxd](/compare/synema-vs-letterboxd). Read that if you want the two products next to each other. The rest of this page is where to go once you know which job you have.",
      },
      {
        type: "cta",
      },
      {
        type: "h2",
        text: "If you still want a diary",
      },
      {
        type: "p",
        text: "Then you want an ordinary Letterboxd alternative, and you should not install a decision app and hope it grows a community. [IMDb](https://www.imdb.com) will give you a database and ratings. [JustWatch](https://www.justwatch.com) will tell you where a title is available and hold a watchlist. Neither replaces a social log of films you have seen, with reviews and people you follow.",
      },
      {
        type: "p",
        text: "If the public diary is the point, stay with Letterboxd, or accept that you are changing the job. Switching apps will not make logging more interesting if you did not enjoy logging.",
      },
      {
        type: "h2",
        text: "If you want help deciding",
      },
      {
        type: "p",
        text: "Sort the alternative by the decision you are stuck on. These are different products, and using all of them in one evening is how the menu wins.",
      },
      {
        type: "h3",
        text: "The people in the room cannot agree",
      },
      {
        type: "p",
        text: "You need an overlap, not a better feed. Same list, a yes that stays private until everyone has answered, and a stop at the first film the room would actually start. Synema is built for that: a room of up to five, everyone swipes, a match when everyone swipes right. It will not log the film afterward. Letterboxd still can.",
      },
      {
        type: "p",
        text: "The version without an app is [how to choose a movie together](/guides/how-to-choose-a-movie-together). A wider map of picker, search, and diary tools is [best movie picker apps](/guides/best-movie-picker-apps).",
      },
      {
        type: "h3",
        text: "You are alone and the catalog is the problem",
      },
      {
        type: "p",
        text: "Shrink it. One service, a runtime cap, about ten titles, and the first one you would actually start. That method is [how to decide what movie to watch](/guides/how-to-decide-what-movie-to-watch). A streaming guide helps you build the pile. A diary helps if you already marked films during the week, when nobody was waiting.",
      },
      {
        type: "h3",
        text: "You know the film and not the service",
      },
      {
        type: "p",
        text: "That is a streaming guide's job, or the search inside the apps you already pay for. Do it after the title exists. Looking up availability in the middle of the argument adds a second decision, which is the thing you were trying to finish.",
      },
      {
        type: "h2",
        text: "What not to swap in",
      },
      {
        type: "p",
        text: "An app that calls itself a Letterboxd alternative and then offers another public profile is still a diary. An app that writes you a personal shortlist from a mood is a suggestion for one person. Both can be pleasant. Neither asks the other people on the couch.",
      },
      {
        type: "p",
        text: "A reasonable split is boring, which is why it works. Use Letterboxd to remember films and to browse other people's taste. Use a short private pass, in Synema or on a note, when the people who are actually watching need to agree. Use a streaming guide once you have a title and need a play button.",
      },
      {
        type: "h2",
        text: "Common questions",
      },
      {
        type: "faq",
        items: [
          {
            q: "Is Synema a Letterboxd alternative?",
            a: "Only if the thing you wanted from Letterboxd was help deciding with other people. For a diary, ratings, and a community, it is not a replacement. The side-by-side is [Synema vs Letterboxd](/compare/synema-vs-letterboxd).",
          },
          {
            q: "What should I use to find something to watch tonight?",
            a: "It depends who is deciding. Alone, a smaller pile beats a new social network. With other people, look for a shared pass rather than a better feed. [Best movie picker apps](/guides/best-movie-picker-apps) sorts that by job.",
          },
          {
            q: "Should I stop using Letterboxd?",
            a: "No. Logging a film and choosing one tonight are different evenings. Plenty of people can do both, as long as they do not ask one app to finish the other's job.",
          },
        ],
      },
    ],
  },
  {
    slug: "best-movies-to-watch-with-friends",
    title: "Best Movies to Watch with Friends, by the Kind of Night",
    metaTitle: "Best Movies to Watch with Friends, by the Kind of Night – Synema",
    metaDescription:
      "Films that tend to work with friends, grouped by the night you actually have: easy, paying attention, or short enough to finish.",
    description:
      "A pile to steal from, grouped by whether the room will talk, watch, or need to be done.",
    category: "Movie night",
    publishedAt: "2026-09-29",
    updatedAt: "2026-09-29",
    inlineCta:
      "Once you have a short list, Synema lets everyone swipe privately and reveals the movies you agree on.",
    bottomCta: {
      kicker: "Stop debating. Start watching.",
      title: "Take a few of these. Leave the rest for another night.",
      body: "Synema is a way to see which titles the room actually overlaps on.",
    },
    related: [
      "movie-picker-for-friends",
      "movie-night-ideas",
      "what-to-watch-tonight",
    ],
    blocks: [
      {
        type: "p",
        text: "A list of best movies to watch with friends is a bad assignment and a useful pile. Nobody needs to get through it. The films below are grouped by the kind of evening they tend to survive: a room that will talk, a room that will actually look at the screen, and a night that has to end.",
      },
      {
        type: "p",
        text: "Taste still wins. If your friends hate crime capers, Ocean's Eleven will not become good because it is on a list. Use the lane, take four or five titles, and throw out the rest without a speech.",
      },
      {
        type: "figure",
        src: guideImages.friendsAtScreen,
        alt: "Three people seen from behind, watching a movie together.",
        caption: "The film has to survive the room you have, not the room in the poster.",
        wide: true,
        priority: true,
      },
      {
        type: "h2",
        text: "What usually works in a group",
      },
      {
        type: "p",
        text: "A friend-group film can be rejoined if someone gets up for a drink. It gives people a reason to react. It does not require eight earlier movies as homework. And it is not so long that the last half hour belongs to phones.",
      },
      {
        type: "p",
        text: "That is a filter, not a ranking. A quiet, difficult film can be the right choice for a different night, with people who came to be quiet. It is a poor default for a hangout.",
      },
      {
        type: "h2",
        text: "When people are going to talk",
      },
      {
        type: "p",
        text: "These still work if the room is a little loud. The plot is legible, the scenes are short, and missing a minute does not sink you.",
      },
      {
        type: "h3",
        text: "Ocean's Eleven",
      },
      {
        type: "p",
        text: "The 2001 one. You can step out and still know, broadly, that they are stealing something in Las Vegas. The pleasure is the plan and the clothes, which a chatty room does not ruin. It is a poor choice only if someone in the group has a hard rule against heist movies.",
      },
      {
        type: "h3",
        text: "Game Night",
      },
      {
        type: "p",
        text: "It is already about friends who turned a hangout into a plot. The joke and the story are the same thing, so a little talking does less damage than it does to a thriller. Meaner than it looks in the trailer. Fine for adults who wanted a comedy and can handle that.",
      },
      {
        type: "h3",
        text: "Hot Fuzz",
      },
      {
        type: "p",
        text: "A village mystery that becomes an action film, on purpose. You do not need to have seen the other films it is nodding at. It escalates in a way groups tend to enjoy out loud. Skip it if half the room wanted something gentle.",
      },
      {
        type: "h3",
        text: "The Nice Guys",
      },
      {
        type: "p",
        text: "A 1970s detective comedy that is funnier and more sour than Game Night. The case is followable. Bring it when the room can take a bit of cruelty in the jokes, and not when someone asked for cozy.",
      },
      {
        type: "h3",
        text: "School of Rock",
      },
      {
        type: "p",
        text: "Broad, musical, and hard to be too cool for, for one evening. Useful when the group includes someone who did not come to watch a film and will still stay for this one. If everyone wanted something sharper, pick from the list above instead.",
      },
      {
        type: "cta",
      },
      {
        type: "h2",
        text: "When the room will actually watch",
      },
      {
        type: "p",
        text: "These want eyes on the screen. They are a good plan if you say that out loud first. They are a bad plan for a party that happens to have a television nearby.",
      },
      {
        type: "h3",
        text: "Mad Max: Fury Road",
      },
      {
        type: "p",
        text: "Almost everything that matters is visual, and the story is a chase. It fails if people want to talk through it. It works if they will look up. Nobody needs the earlier Mad Max films to follow this one.",
      },
      {
        type: "h3",
        text: "Spider-Man: Into the Spider-Verse",
      },
      {
        type: "p",
        text: "Fast, and designed so you can feel the joke without a comics education. The style is the entertainment, which means a room of people staring at their phones will waste it. A room that likes animation, including people who claim they do not, often stays.",
      },
      {
        type: "h3",
        text: "Knives Out",
      },
      {
        type: "p",
        text: "A mystery the group can play along with, which is a different pleasure from a film you endure in silence. It runs long for a weeknight. Fine when nobody has an early morning. You do not need the later films.",
      },
      {
        type: "h3",
        text: "Parasite",
      },
      {
        type: "p",
        text: "Excellent with friends who will read subtitles and stay quiet. A bad choice for a chatty hangout, not because subtitles are a lesser way to watch, but because the room will not talk and read at the same time. Say that before you put it on the list, so the no can happen early.",
      },
      {
        type: "h2",
        text: "When the night has to end",
      },
      {
        type: "p",
        text: "These are short enough for a weeknight. Well under two hours, and they do not ask the group to settle in for an epic.",
      },
      {
        type: "ul",
        items: [
          "The Princess Bride. A fairy tale people quote, including people who arrived expecting to be above it.",
          "Shaun of the Dead. A comedy that happens to have zombies. Easy to rewatch. Skip if someone hates horror-adjacent jokes.",
          "Clue. A short, silly whodunit that already feels like a dinner party. The pleasure is the pace.",
          "Hunt for the Wilderpeople. Warm and odd, and it does not require anyone to have seen a trailer.",
          "Paddington 2. It sounds like a film for children. It is also a remarkably reliable way for a skeptical adult room to end up in a better mood. Offer it as itself, not as a bit.",
        ],
      },
      {
        type: "h2",
        text: "Films that often fail the room, even when they are good",
      },
      {
        type: "p",
        text: "A three-hour cut on a night someone has work in the morning. The runtime was the decision, and the list lost.",
      },
      {
        type: "p",
        text: "Anything that needs the previous films, unless the whole room is already in on the series. Homework is how one enthusiast programs the night and calls it sharing.",
      },
      {
        type: "p",
        text: "A film one person loves and has been trying to make the others respect. That can be their turn. It should be labeled as their turn, not smuggled in as the group's pick. How to tell those apart is in [how to choose a movie together](/guides/how-to-choose-a-movie-together).",
      },
      {
        type: "h2",
        text: "Use the list as a pile, then stop",
      },
      {
        type: "p",
        text: "Pick one lane. Easy, actually watching, or short. Take four or five titles from it. Each person marks yes or no without narrating. Play the first film you share a real yes on. Do not reopen the full list to see if a slightly better option was further down.",
      },
      {
        type: "p",
        text: "If you want the fence before the titles — one service, a runtime, a genre you refuse to stack five deep — that is [movie night ideas](/guides/movie-night-ideas). If the question is simply tonight and the clock is the boss, use [what should we watch tonight](/guides/what-to-watch-tonight).",
      },
      {
        type: "p",
        text: "The negotiation, once the pile is this small, is what a [movie picker for friends](/guides/movie-picker-for-friends) is for. You can do it with a note. Synema does it as a private swipe in one room, and shows you the overlap. It will not make a chatty group sit still for Parasite. It will stop you from spending the evening agreeing to watch all of the above.",
      },
      {
        type: "h2",
        text: "Common questions",
      },
      {
        type: "faq",
        items: [
          {
            q: "What if half the room has already seen it?",
            a: "Ask whether they want to watch it again. A familiar film can be a yes. If they do not want to sit through it, that is a no, and it should count. Do not make them stay quiet and then talk over the opening.",
          },
          {
            q: "Do we need a theme?",
            a: "A lane is enough. A theme helps when it can reject a movie. A few that do are in [movie night ideas](/guides/movie-night-ideas).",
          },
          {
            q: "What about a movie for two?",
            a: "Different room, different failure. One person scrolls and the other vetoes. Start with the [movie picker for couples](/guides/movie-picker-for-couples), not with a longer friends list.",
          },
        ],
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
