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
      "A movie picker for couples: you each choose independently, then watch a film you both liked. Synema is an upcoming swipe-to-match app.",
    description:
      "Each of you chooses independently, then you compare the movies you both liked.",
    category: "For couples",
    publishedAt: published,
    updatedAt: "2026-10-03",
    inlineCta:
      "Public launch is upcoming. Join the waitlist and we will email you when Synema is ready for couples to try.",
    bottomCta: {
      kicker: "Stop debating. Start watching.",
      title: "Hear when Synema launches.",
      body: "You each swipe on your own phone. A match is a movie you both liked.",
    },
    related: [
      "movie-picker-for-friends",
      "how-to-choose-a-movie-together",
      "how-to-decide-what-movie-to-watch",
    ],
    blocks: [
      {
        type: "p",
        text: "A movie picker for couples helps you find a film you both want to watch. You each choose independently, then compare the movies you both liked.",
      },
      {
        type: "p",
        text: "Synema is an upcoming app where you swipe on movies and shared likes become matches. Join the waitlist to hear when it launches.",
      },
      {
        type: "h2",
        text: "How Synema works",
      },
      {
        type: "p",
        text: "One of you opens a room and the other joins. You each swipe through the same movies on your own phone. A movie becomes a match when you both like it. Public launch is upcoming, and Synema is not on the App Store or Google Play yet.",
      },
      {
        type: "figure",
        src: guideImages.swipe,
        alt: "Synema swipe screen showing a movie card you can like or pass in private.",
        caption: "Each person swipes through the same movies on their own phone.",
        variant: "product",
        priority: true,
      },
      {
        type: "figure",
        src: guideImages.match,
        alt: "Synema match screen with a WATCH stamp after both people liked the same movie.",
        caption: "A match is a movie you both liked.",
        variant: "product",
      },
      {
        type: "cta",
      },
      {
        type: "h2",
        text: "Choose a film together tonight",
      },
      {
        type: "p",
        text: "You can do this with a note while you wait for Synema. Keep the list small enough to finish.",
      },
      {
        type: "steps",
        items: [
          {
            title: "Agree on mood and runtime",
            text: "One sentence is enough: easy and under two hours, or something you have both been meaning to see. If you cannot agree on the shape of the night, you will not agree on a title.",
          },
          {
            title: "Shortlist 10 movies",
            text: "Pull them from one service, or from titles you have already mentioned this week. Ten is enough. If the hard part is cutting a huge catalog down to that list, use [how to decide what movie to watch](/guides/how-to-decide-what-movie-to-watch).",
          },
          {
            title: "Independently mark yes or no",
            text: "Each of you goes through the same ten without commenting. A yes means you would start that movie tonight.",
          },
          {
            title: "Choose a shared yes",
            text: "Compare your marks and play the first film you both said yes to. You do not need a better option than the one you already share.",
          },
        ],
      },
      {
        type: "h2",
        text: "When nothing overlaps",
      },
      {
        type: "p",
        text: "An empty overlap means you wanted different kinds of night. Say so, then use a fallback: the shortest film either of you marked, a coin flip between the last two, or whoever did not choose last time. Save the other mood for another night.",
      },
      {
        type: "p",
        text: "If the stuck part is the rules of the disagreement, read [how to choose a movie together](/guides/how-to-choose-a-movie-together). For more than two people, use the [movie picker for friends](/guides/movie-picker-for-friends). A streaming search and a film diary are different tools, which is the split in [best movie picker apps](/guides/best-movie-picker-apps).",
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
            a: "Agree on a mood and a runtime, shortlist about ten films, and mark them independently. Watch the first one you both said yes to. If the catalog is the problem, the longer version is [how to decide what movie to watch](/guides/how-to-decide-what-movie-to-watch).",
          },
          {
            q: "When can we use Synema?",
            a: "Public launch is upcoming. Synema is not on the App Store or Google Play yet. Join the waitlist and you will get an email when it launches. An invite-only [Android beta](/beta-testing) is open if you want to test early.",
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
      "How a small group picks one movie: one shared list, private answers, and a Synema room of up to five when the app launches.",
    description:
      "Coordinate a group around one film. A Synema room holds up to five people.",
    category: "For friends",
    publishedAt: published,
    updatedAt: "2026-10-03",
    inlineCta:
      "Synema is upcoming. A room holds up to five, everyone swipes privately, and a match is when everyone swipes right.",
    bottomCta: {
      kicker: "Stop debating. Start watching.",
      title: "A room of up to five, when Synema launches.",
      body: "Everyone swipes on their own phone. A movie matches when the whole room swipes right.",
    },
    related: [
      "how-to-choose-a-movie-together",
      "best-movies-to-watch-with-friends",
      "movie-picker-for-couples",
    ],
    blocks: [
      {
        type: "p",
        text: "A movie picker for friends helps a small group leave with one film. Everyone answers the same list on their own, and you stop when you share a yes.",
      },
      {
        type: "p",
        text: "The work is coordination. A group chat adds late replies, jokes, and people who say anything is fine. This page is about getting an answer from the people who will actually watch.",
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
            title: "Cap the room",
            text: "Five people can still share one movie. A Synema room holds up to five. Eight people are a party that happens to have a screen nearby, and the film matters less than the snacks. For a real pick, keep the group inside that size, or split a bigger crowd into two smaller ones.",
          },
          {
            title: "Agree on a lane",
            text: "New to everyone, or comfort rewatch. Funny, or tense. Home by midnight, which quietly rules out the long ones. Write the lane in the chat in a single sentence so later suggestions have somewhere to bounce off. A theme can do this job too — there are a few that work in [movie night ideas](/guides/movie-night-ideas).",
          },
          {
            title: "Give everyone the same pile",
            text: "One person builds about ten films that fit the lane. How to shrink a catalog to that size is [how to decide what movie to watch](/guides/how-to-decide-what-movie-to-watch). Everyone else marks yes or no on their own. Building the list and answering it are different jobs.",
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
          "In a Synema room, a match is when everyone swipes right",
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
        text: "Synema does this in one room of up to five. Someone creates it and invites the people who are watching. Everyone swipes the same movies, and a match is when everyone swipes right. Public launch is upcoming, and the app is not on the App Store or Google Play yet. Two people can start with the [movie picker for couples](/guides/movie-picker-for-couples).",
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
      "Shrink the list before you scroll. A way to decide what to watch that works on your own, and as the first step when other people are choosing too.",
    description:
      "Make the catalog smaller, including when you are choosing alone, then stop.",
    category: "Deciding",
    publishedAt: published,
    updatedAt: "2026-10-03",
    inlineCta:
      "Synema is an upcoming app for the pass after the list is small. Join the waitlist to hear when it launches.",
    bottomCta: {
      kicker: "Stop debating. Start watching.",
      title: "The short list still works with a notepad.",
      body: "Synema launches later. Until then, close the catalog once the pile is small enough to finish.",
    },
    related: [
      "how-to-choose-a-movie-together",
      "what-to-watch-tonight",
      "movie-picker-for-couples",
    ],
    blocks: [
      {
        type: "p",
        text: "Deciding what to watch gets easier when the list gets smaller. This page is that reduction. It works if you are choosing alone, and it is the first step when other people are choosing with you.",
      },
      {
        type: "p",
        text: "The catalog is the problem here, not the argument. If the stuck part is a disagreement between people, use [how to choose a movie together](/guides/how-to-choose-a-movie-together). If it is just the two of you, start with the [movie picker for couples](/guides/movie-picker-for-couples).",
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
        text: "On your own, that higher standard is the whole stall. With other people it gets worse, because you start filtering for what is defensible. That social part lives in [how to choose a movie together](/guides/how-to-choose-a-movie-together). Stay here to make the pile smaller.",
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
        text: "Judging the open internet never ends, because the internet does not end. Judging twenty movies can end in a few minutes. On your own, judge that pile once. If other people are with you, hand them the same pile. The rules for comparing their answers are in [how to choose a movie together](/guides/how-to-choose-a-movie-together).",
      },
      {
        type: "h3",
        text: "Use a stop rule",
      },
      {
        type: "pullout",
        text: "The first film you would actually start is the movie.",
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
        text: "A weeknight with a clock has a shorter plan in [what should we watch tonight](/guides/what-to-watch-tonight). A group that has to coordinate is the [movie picker for friends](/guides/movie-picker-for-friends).",
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
        text: "Synema is an upcoming app for swiping through one shared pile, with a match when the people in the room agree. Public launch is still ahead. The notepad version above is what you can use tonight.",
      },
    ],
  },
  {
    slug: "how-to-choose-a-movie-together",
    title: "How to Choose a Movie Together Without Arguing or Endless Scrolling",
    metaTitle:
      "How to Choose a Movie Together Without Arguing or Endless Scrolling – Synema",
    metaDescription:
      "Rules for choosing a movie with other people: what a yes means, who can block a film, and what to do when the group disagrees.",
    description:
      "Handle the disagreement: what counts as a yes, who has a veto, and which backup you will use.",
    category: "Together",
    publishedAt: "2026-09-29",
    updatedAt: "2026-10-03",
    inlineCta:
      "Synema is upcoming. Swipes stay private until everyone has answered, in a room of up to five.",
    bottomCta: {
      kicker: "Stop debating. Start watching.",
      title: "These rules work on paper tonight.",
      body: "Synema launches later. A match there is when everyone in the room swipes right.",
    },
    related: [
      "how-to-decide-what-movie-to-watch",
      "movie-picker-for-couples",
      "movie-picker-for-friends",
    ],
    blocks: [
      {
        type: "p",
        text: "Choosing a movie together gets stuck on the rules, not on the size of the catalog. Decide what a yes means, who has a say, and what you will do if you disagree, before anyone names a film.",
      },
      {
        type: "p",
        text: "Making the list smaller is a different job, in [how to decide what movie to watch](/guides/how-to-decide-what-movie-to-watch). This page is the disagreement.",
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
            text: "For two people, both of you have to want it. For a few friends, say whether one hard no blocks the film. Treating every mild preference as a veto is how you rewatch something harmless. Coordinating that group is the [movie picker for friends](/guides/movie-picker-for-friends). In Synema, a match is when everyone swipes right.",
          },
          {
            title: "The backup, chosen now",
            text: "Shortest film left, a coin flip, or whoever did not choose last time. Pick the backup while everyone is still pleasant. You will not invent a fair one later.",
          },
        ],
      },
      {
        type: "p",
        text: "Two people have a narrower version of these rules. That page is the [movie picker for couples](/guides/movie-picker-for-couples).",
      },
      {
        type: "h2",
        text: "Take the performance out of the pass",
      },
      {
        type: "p",
        text: "Once the rules are set, use a list that is already small. How big that list should be is [how to decide what movie to watch](/guides/how-to-decide-what-movie-to-watch).",
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
        text: "Synema is built for that pass, and public launch is upcoming. A room holds up to five. Everyone swipes the same movies, and a match is when everyone swipes right. It will not referee two people who want different kinds of evening, and it is not a diary of what you have seen. [Best movie picker apps](/guides/best-movie-picker-apps) and [Synema and Letterboxd](/compare/synema-vs-letterboxd) keep those jobs apart.",
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
            a: "The couples page is two people choosing independently. The friends page is coordinating a group, including a Synema room of up to five. This page is the disagreement under both: what a yes means, who can block a film, and what to do when tastes split. Start with [movie picker for couples](/guides/movie-picker-for-couples) or [movie picker for friends](/guides/movie-picker-for-friends) if that is the room you have.",
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
      "What should we watch tonight? Start from the time you have and one mood, then pick from a short list before the evening disappears.",
    description:
      "Use the clock and the mood in the room, then start something within about ten minutes.",
    category: "Tonight",
    publishedAt: published,
    updatedAt: "2026-10-03",
    inlineCta:
      "Synema is upcoming. Tonight, use the clock and a short list. Join the waitlist if you want a note when the app launches.",
    bottomCta: {
      kicker: "Stop debating. Start watching.",
      title: "Tonight only needs the time you have.",
      body: "Pick from that window. Synema can wait until launch.",
    },
    related: [
      "how-to-decide-what-movie-to-watch",
      "movie-night-ideas",
      "movie-picker-for-couples",
    ],
    blocks: [
      {
        type: "p",
        text: "What you watch tonight should depend on the time you have and the mood in the room. Decide those two things, then pick from a short list.",
      },
      {
        type: "p",
        text: "This is a plan you can use on a weeknight. Shrinking a huge catalog, including when you are alone and not on a clock, is [how to decide what movie to watch](/guides/how-to-decide-what-movie-to-watch).",
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
            text: "Mark yes or no, then play the first film that fits the time and the mood. If you are with other people and the marks disagree, the rules are in [how to choose a movie together](/guides/how-to-choose-a-movie-together). Do not restart the timer to debate them.",
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
        text: "With a partner, use the same clock and mood, then choose independently. That version is the [movie picker for couples](/guides/movie-picker-for-couples).",
      },
      {
        type: "p",
        text: "With friends, cap the plan to the people in the room. A Synema room holds up to five, and coordinating that group is the [movie picker for friends](/guides/movie-picker-for-friends). If you need titles that tend to survive a group, steal a few from [movies to watch with friends](/guides/best-movies-to-watch-with-friends).",
      },
      {
        type: "p",
        text: "Synema is upcoming, so it will not pick the movie for tonight. The ten minutes above will. Public launch is still ahead, and the app is not on the App Store or Google Play yet.",
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
    title: "Best Movie Picker Apps, by the Job You Need",
    metaTitle: "Best Movie Picker Apps, by the Job You Need – Synema",
    metaDescription:
      "Five tools you can use now for a group pick, a random start, a streaming search, or a film log. Synema is upcoming, not a public download.",
    description:
      "Choose a tool for the job: agree together, start at random, find a service, or keep a log.",
    category: "Picker tools",
    publishedAt: "2026-09-29",
    updatedAt: "2026-10-03",
    inlineCta:
      "Public launch is upcoming. Join the waitlist if you want a room where a match is a movie everyone swiped right on.",
    bottomCta: {
      kicker: "Stop debating. Start watching.",
      title: "Synema is an upcoming way to agree.",
      body: "It is not on the App Store or Google Play yet. Join the waitlist and we will email you at launch.",
    },
    related: [
      "letterboxd-alternatives-for-movie-discovery",
      "how-to-choose-a-movie-together",
      "movie-picker-for-friends",
    ],
    blocks: [
      {
        type: "p",
        text: "There is no single best movie picker app. The useful choice is the tool that matches the job: agreeing with other people, starting something at random, finding which service has a title, or keeping a log and discovering films. The five below are ones you can open now. Notes follow each product's own site, help pages, or store listing. This is not a hands-on test, and it leaves out prices, ratings, and download counts.",
      },
      {
        type: "p",
        text: "Synema is not one of those five. Public launch is upcoming, and it is not on the App Store or Google Play. It is listed separately below, with a waitlist.",
      },
      {
        type: "figure",
        src: guideImages.swipe,
        alt: "Synema swipe screen showing a movie card you can like or pass in private.",
        caption: "Synema's swipe screen is part of an upcoming app, not a store listing you can download today.",
        variant: "product",
        priority: true,
      },
      {
        type: "h2",
        text: "Tools you can use now",
      },
      {
        type: "table",
        caption: "Five current tools, matched to a job. This is not a ranking.",
        columns: ["Tool", "Best use", "Relevant features", "Availability", "Important limitation"],
        rows: [
          [
            "Movie Swiper",
            "Choosing together",
            "A shared link, private swipes, and a match when everyone likes the same title. Filters cover genre, runtime, year, ratings, and content limits. [Site](https://movieswiper.app/).",
            "A website. The site says it needs no account and no install.",
            "Titles are popular films from TMDB. The site does not describe a diary or a streaming-availability search.",
          ],
          [
            "Reelgood Roulette",
            "A random start",
            "Picks a movie or TV show from a genre you choose. [Roulette](https://reelgood.com/roulette/). The wider app looks up where titles stream. [FAQ](https://reelgood.com/faq).",
            "The roulette page is on the web. The FAQ lists iPhone, Android, LG, Android TV, and Fire TV apps, and says there is no Roku app.",
            "A spin does not ask the other people in the room. The FAQ limits streaming data to the US, Canada, Australia, the UK, and New Zealand. The [Android listing](https://play.google.com/store/apps/details?id=com.reelgoodapp.reelgood&hl=en_US) was last updated on March 21, 2022.",
          ],
          [
            "JustWatch",
            "Streaming discovery",
            "Legal subscription, free, ad-supported, rental, and purchase offers. Filter to services you already have, and keep a watchlist. [What is JustWatch?](https://support.justwatch.com/article/what-is-just-watch)",
            "Free guide on the web, plus [iOS](https://apps.apple.com/us/app/justwatch-movies-tv-shows/id979227482) and [Android](https://play.google.com/store/apps/details?id=com.justwatch.justwatch) apps. A paid Pro plan exists.",
            "It answers where to watch. Its help page does not describe a private vote among people in the room. This page does not list the Pro price.",
          ],
          [
            "Letterboxd",
            "Tracking and discovery",
            "A diary, ratings, reviews, lists, a watchlist, and people to follow. [FAQ](https://letterboxd.com/faq/). The films browser includes streaming service. [Welcome](https://letterboxd.com/welcome/). Paying members can filter by favorite services. [Pro](https://letterboxd.com/about/pro/).",
            "Free membership, with paid Pro and Patron tiers. Apps for iOS, Android, and Apple TV, per the FAQ.",
            "Streaming filters and watchlist alerts are paid. Alerts use JustWatch data and may lag by up to 24 hours. [Alerts](https://letterboxd.zendesk.com/hc/en-us/articles/15178655699471-Can-I-get-notified-when-films-in-my-watchlist-are-ready-to-watch). The FAQ does not describe a private group match.",
          ],
          [
            "IMDb",
            "Look up a title",
            "Ratings, a watchlist, lists, and a Watch button for stream, rent, or buy when a provider is listed. [Where to watch](https://help.imdb.com/article/imdb/discover-watch/how-can-i-watch-a-movie-or-tv-show/G4GAAPL3XS2E99KY).",
            "Free [iOS](https://help.imdb.com/article/imdb/mobile-web-apps/ios-app-faq/GJ7P484D8FA9C48Q) and Android apps, plus the website.",
            "Providers depend on your location, and some titles have no known copy. It is a database, not a shared decision.",
          ],
        ],
      },
      {
        type: "h2",
        text: "Which job you have",
      },
      {
        type: "h3",
        text: "Other people have to agree",
      },
      {
        type: "p",
        text: "Use [Movie Swiper](https://movieswiper.app/) if you want a match only when everyone in the group likes the same title, and you want that in a browser today. If you try a different swipe app, read how it defines a match before you assume the whole room has to agree. The steps without an app are in [how to choose a movie together](/guides/how-to-choose-a-movie-together). Two people: [movie picker for couples](/guides/movie-picker-for-couples). A larger chat: [movie picker for friends](/guides/movie-picker-for-friends).",
      },
      {
        type: "h3",
        text: "You want the menu to go away",
      },
      {
        type: "p",
        text: "Use [Reelgood Roulette](https://reelgood.com/roulette/) after you pick a genre. [Letterboxd's journal](https://letterboxd.com/journal/sorting/) also says you can shuffle your own watchlist on the web, which only helps if that list already exists. A random result will not respect a no it never asked about. If the evening is short, start from the time you have in [what should we watch tonight](/guides/what-to-watch-tonight).",
      },
      {
        type: "h3",
        text: "You need the service, not another title",
      },
      {
        type: "p",
        text: "Use [JustWatch](https://support.justwatch.com/article/what-is-just-watch) when you want legal offers and a filter for services you already pay for. Use [Reelgood](https://reelgood.com/faq) for the same kind of lookup if you are in a country its FAQ lists. Do this after the title exists. Availability changes, and neither page is a promise that last month's offer is still there.",
      },
      {
        type: "h3",
        text: "You want a log, or a film to discover",
      },
      {
        type: "p",
        text: "Use [Letterboxd](https://letterboxd.com/faq/) for a diary, reviews, lists, a watchlist, and other people's taste. Use [IMDb](https://help.imdb.com/article/imdb/discover-watch/how-can-i-watch-a-movie-or-tv-show/G4GAAPL3XS2E99KY) when you need the cast, a rating, or a Watch link. If you are comparing discovery tools with Letterboxd specifically, that page is [Letterboxd alternatives for movie discovery](/guides/letterboxd-alternatives-for-movie-discovery). The side-by-side with Synema is [Synema vs Letterboxd](/compare/synema-vs-letterboxd).",
      },
      {
        type: "h2",
        text: "Synema, when it launches",
      },
      {
        type: "p",
        text: "Synema is an upcoming app for the agreement, not a public download. One person creates a room of up to five. Everyone swipes the same movies on their own phone, and a match is when everyone swipes right. On your own, a right swipe saves a film to a personal watchlist. This site says hosting a group room needs Synema Pro, while joining a room and swiping alone do not need a subscription. It also shows where a movie is available in your country, including Netflix, Disney+, Prime Video, Max, and Apple TV+, and more. That is not a guarantee that every film is listed.",
      },
      {
        type: "p",
        text: "It is not a diary of what you have seen, and it is not on the App Store or Google Play yet. [Join the waitlist](/#waitlist). An invite-only [Android beta](/beta-testing) is open if you want to test before the public launch. Until then, use the table above or the [manual method](/guides/how-to-decide-what-movie-to-watch).",
      },
      {
        type: "cta",
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
            a: "It depends on the job. For a group that must all agree, Movie Swiper is a browser tool you can use now, and Synema is an upcoming room of up to five. For a random start, use Reelgood Roulette. For where to watch, use JustWatch. For a diary and other people's lists, use Letterboxd. For a database and a Watch link, use IMDb.",
          },
          {
            q: "Is Synema available to download?",
            a: "No. Public launch is upcoming. Synema is not on the App Store or Google Play. Join the waitlist, or ask about the invite-only Android beta.",
          },
          {
            q: "Are recommendation apps the same as choosing together?",
            a: "No. A recommendation suggests titles to one person. Choosing together means the people who will watch have answered the same list. A good suggestion can still lose the room.",
          },
        ],
      },
    ],
  },
  {
    slug: "letterboxd-alternatives-for-movie-discovery",
    title: "Letterboxd Alternatives for Movie Discovery",
    metaTitle: "Letterboxd Alternatives for Movie Discovery – Synema",
    metaDescription:
      "Letterboxd already logs films and surfaces other people's taste. Alternatives for a database, a streaming search, a random pick, or a group match.",
    description:
      "Stay with Letterboxd for the diary. Switch tools when the job is lookup, streaming, or a group decision.",
    category: "Comparisons",
    publishedAt: "2026-09-29",
    updatedAt: "2026-10-03",
    inlineCta:
      "Synema is upcoming, and it is not a Letterboxd diary. Join the waitlist if you want a small group to match on a movie later.",
    bottomCta: {
      kicker: "Stop debating. Start watching.",
      title: "Letterboxd can stay. Synema is for a later job.",
      body: "Public launch is upcoming. The comparison page is the place for the two products side by side.",
    },
    related: [
      "best-movie-picker-apps",
      "how-to-decide-what-movie-to-watch",
      "how-to-choose-a-movie-together",
    ],
    blocks: [
      {
        type: "p",
        text: "A Letterboxd alternative only helps if you name the job you want done. Letterboxd is already a place to log films, rate them, read other people, and keep a watchlist. Leave it when you want a wider database, a streaming search, a random pick from a genre, or a private match with the people who are actually watching. Those are different products.",
      },
      {
        type: "figure",
        src: guideImages.cinema,
        alt: "A dark cinema seen from the back row, with the screen lit.",
        caption: "Discovery can start in a diary. Agreeing with the room is a separate step.",
        wide: true,
        priority: true,
      },
      {
        type: "h2",
        text: "What Letterboxd already does well",
      },
      {
        type: "p",
        text: "[Letterboxd's FAQ](https://letterboxd.com/faq/) describes a social network for film discussion and discovery: a diary, ratings, reviews, tags, lists, a watchlist, and people to follow. Films you mark as watched leave the watchlist. The [welcome page](https://letterboxd.com/welcome/) says you can browse the database by decade, genre, popularity, rating, and streaming service. [Letterboxd's journal](https://letterboxd.com/journal/sorting/) says you can shuffle your own watchlist on the web when you want a random title from films you already saved.",
      },
      {
        type: "p",
        text: "Paying members can set favorite streaming services, filter by what is on them, and get watchlist alerts. Those alerts use JustWatch data and may lag by up to 24 hours. [Pro](https://letterboxd.com/about/pro/). [Alerts](https://letterboxd.zendesk.com/hc/en-us/articles/15178655699471-Can-I-get-notified-when-films-in-my-watchlist-are-ready-to-watch). The free membership stays available. Apps exist for iOS, Android, and Apple TV, per the FAQ. This page does not list subscription prices.",
      },
      {
        type: "h2",
        text: "A group match is a different job",
      },
      {
        type: "p",
        text: "A list or a review can put a film in front of you. It does not record a private yes from each person on the couch and stop when they overlap. Letterboxd's FAQ does not describe that kind of group match. If that is the miss, you do not need another diary. The detailed Synema comparison stays on [Synema vs Letterboxd](/compare/synema-vs-letterboxd). A map of picker, random, streaming, and logging tools is [best movie picker apps](/guides/best-movie-picker-apps).",
      },
      {
        type: "h2",
        text: "Alternatives, and why you would pick one",
      },
      {
        type: "h3",
        text: "IMDb, for a database and a Watch link",
      },
      {
        type: "p",
        text: "Choose [IMDb](https://help.imdb.com/article/imdb/discover-watch/how-can-i-watch-a-movie-or-tv-show/G4GAAPL3XS2E99KY) when you want ratings, a watchlist, lists, and a Watch button for stream, rent, or buy. Providers depend on your location, and IMDb says some titles have no known copy. The [iOS help](https://help.imdb.com/article/imdb/mobile-web-apps/ios-app-faq/GJ7P484D8FA9C48Q) says the app is free. It will not replace Letterboxd's reviews from people you follow.",
      },
      {
        type: "h3",
        text: "JustWatch, for where it is streaming",
      },
      {
        type: "p",
        text: "Choose [JustWatch](https://support.justwatch.com/article/what-is-just-watch) when the question is which legal offer has the film: subscription, free, ads, rent, or buy, filtered to services you already have. It also keeps a watchlist. That is a closer fit than Letterboxd if you do not want a public diary and you do want the play button. A paid JustWatch Pro plan exists. This page does not list its price or extra features.",
      },
      {
        type: "h3",
        text: "Reelgood, for a streaming search or a random spin",
      },
      {
        type: "p",
        text: "Choose [Reelgood](https://reelgood.com/faq) for the same kind of where-to-watch lookup, with tracking for shows you want to resume. Its FAQ currently limits streaming data to the US, Canada, Australia, the United Kingdom, and New Zealand. [Reelgood Roulette](https://reelgood.com/roulette/) is the random piece: a movie or TV show from a genre you choose. Use it when you want a title without browsing. It does not ask anyone else in the room.",
      },
      {
        type: "h3",
        text: "Movie Swiper, for a decision with other people",
      },
      {
        type: "p",
        text: "Choose [Movie Swiper](https://movieswiper.app/) when the stuck part is agreement, not discovery. Its site describes a browser group: each person swipes, and a match is a title everyone liked. It says no account is required, and titles come from TMDB's popular catalog with filters for genre, runtime, year, ratings, and content limits. It is not a film community. Without an app, the same job is [how to choose a movie together](/guides/how-to-choose-a-movie-together). Alone, shrink the list first: [how to decide what movie to watch](/guides/how-to-decide-what-movie-to-watch).",
      },
      {
        type: "cta",
      },
      {
        type: "h2",
        text: "Where Synema fits, later",
      },
      {
        type: "p",
        text: "Synema is not a public Letterboxd replacement, and it is not on the App Store or Google Play yet. It is an upcoming app for a room of up to five, where a match is a movie everyone swiped right on. It does not keep a public diary or reviews. Read the capability comparison on [Synema vs Letterboxd](/compare/synema-vs-letterboxd), including the hosting restriction, before you treat it as something you can open tonight.",
      },
      {
        type: "h2",
        text: "Common questions",
      },
      {
        type: "faq",
        items: [
          {
            q: "What is a good Letterboxd alternative for finding movies?",
            a: "For other people's reviews and a diary, stay on Letterboxd. For a database and a Watch link, use IMDb. For which service has a title, use JustWatch, or Reelgood if you are in a country its FAQ lists. For a random genre pick, use Reelgood Roulette.",
          },
          {
            q: "Is Synema a Letterboxd alternative?",
            a: "Not for discovery, a diary, or a community. It is an upcoming way for a small group to match on one movie. The side-by-side is [Synema vs Letterboxd](/compare/synema-vs-letterboxd).",
          },
          {
            q: "Should I stop using Letterboxd?",
            a: "No, if you still want the diary, the watchlist, and other people's lists. Add a streaming guide or a group picker only for the job Letterboxd is not doing.",
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
