export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "cta" };

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
      "A calmer way for couples to choose a movie together, when one person usually ends up scrolling and the other ends up vetoing.",
    description:
      "How to pick a movie you both want, without one person scrolling and the other quietly giving up.",
    category: "For couples",
    publishedAt: published,
    updatedAt: published,
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
      "how-to-decide-what-movie-to-watch",
      "what-to-watch-tonight",
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
        type: "h3",
        text: "Start with a constraint",
      },
      {
        type: "p",
        text: "Under two hours. Nothing either of you has seen. Something light, because it is Tuesday. A constraint turns an endless home screen into a pile a person can actually finish. If you cannot agree on a constraint, you will not agree on a title, and it is better to notice that in the first minute.",
      },
      {
        type: "h3",
        text: "Name the mood in one sentence",
      },
      {
        type: "p",
        text: "Funny and easy is a decision. The one with the actor from that show is a search that grows. Say the mood out loud, once, and then stop adding genres. If you want a looser evening with more people, the same idea scales — see the notes on a [movie picker for friends](/guides/movie-picker-for-friends).",
      },
      {
        type: "h3",
        text: "Do a quiet pass, then stop at the first real yes",
      },
      {
        type: "p",
        text: "Each person looks at the same ten or fifteen movies and marks yes or no. No commentary until you are both done. Then compare. You will often find you already agreed and had not said it. If you both would watch it, watch it. Holding out for a better option is how the same series gets a fourth rewatch.",
      },
      {
        type: "p",
        text: "The longer version of this, including what to do when the list is still huge, is in [how to decide what movie to watch](/guides/how-to-decide-what-movie-to-watch).",
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
        type: "ul",
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
    ],
  },
  {
    slug: "movie-picker-for-friends",
    title: "Movie Picker for Friends: Decide What to Watch Together",
    metaTitle:
      "Movie Picker for Friends: Decide What to Watch Together – Synema",
    metaDescription:
      "Group chats full of maybe and anything is fine rarely pick a film. How friends can decide what to watch without a long debate.",
    description:
      "How a group can leave with one movie, instead of a thread full of maybes.",
    category: "For friends",
    publishedAt: published,
    updatedAt: published,
    inlineCta:
      "Rather than another group chat poll? Synema lets everyone swipe privately and shows the movies you all like.",
    bottomCta: {
      kicker: "Stop debating. Start watching.",
      title:
        "Synema helps couples and groups find the movie everyone actually wants to watch.",
      body: "Everyone swipes on their own phone. A movie counts when the room actually wants it.",
    },
    related: [
      "movie-picker-for-couples",
      "movie-night-ideas",
      "how-to-decide-what-movie-to-watch",
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
        type: "h3",
        text: "Cap the guest list in your head",
      },
      {
        type: "p",
        text: "Five people can still share one movie. Eight people are a party that happens to have a screen nearby, and the film matters less than the snacks. If you are trying to please a crowd, pick something familiar and loud, on purpose. If you want a real pick, keep the room small enough that a match means something.",
      },
      {
        type: "h3",
        text: "Agree on a lane",
      },
      {
        type: "p",
        text: "New to everyone, or comfort rewatch. Funny, or tense. Home by midnight, which quietly rules out the long ones. Write the lane in the chat in a single sentence so later suggestions have somewhere to bounce off. A theme can do this job too — there are a few that work in [movie night ideas](/guides/movie-night-ideas).",
      },
      {
        type: "h3",
        text: "Give everyone the same pile",
      },
      {
        type: "p",
        text: "One person can build a list of twelve to twenty films that fit the lane, including where they are streaming. Then everyone marks yes or no on their own. Building the pile is hosting. Marking it is the decision. Those are different jobs, and they should not happen in the same breath.",
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
        type: "ul",
        items: [
          "Everyone answers the same list",
          "Likes stay private until the pass is done",
          "A match is a movie most of the room would start",
          "The first solid match ends the search",
        ],
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
        type: "p",
        text: "Synema is a movie picker for friends in that narrower sense. You open a room, everyone swipes on their own, and a movie surfaces when the room likes it. Couples can use the same trick — the [movie picker for couples](/guides/movie-picker-for-couples) is the two-person version of this problem. With friends, the only extra rule is to stop when you have a match. The hangout was the point.",
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
    updatedAt: published,
    inlineCta:
      "If you'd rather not run the process by hand, Synema lets everyone swipe privately and reveals the movies you agree on.",
    bottomCta: {
      kicker: "Stop debating. Start watching.",
      title:
        "Synema helps couples and groups find the movie everyone actually wants to watch.",
      body: "Bring the same list, keep the likes private, and skip the part where someone has to nominate a film.",
    },
    related: [
      "what-to-watch-tonight",
      "movie-picker-for-couples",
      "movie-night-ideas",
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
        type: "h2",
        text: "Why scrolling feels productive",
      },
      {
        type: "p",
        text: "Scrolling gives you the feeling of progress. New posters, new trailers, a sense that the right film is one row down. It rarely is. Each extra minute raises the standard. The movie you would have enjoyed at 8:10 now has to justify the search that replaced it.",
      },
      {
        type: "p",
        text: "Other people make this worse in a specific way. If you are choosing for a group, every title is a small social risk. You start filtering for what is defensible, which is a different list from what you want. That is how what movie should we watch turns into what movie will nobody complain about.",
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
        type: "ul",
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
        type: "p",
        text: "The first movie that clears the room is the movie. If you are alone, the first film you would start without bargaining with yourself is the movie. A stop rule sounds strict and feels like relief. You can always watch the runner-up another night. You cannot watch a film you never start.",
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
    slug: "what-to-watch-tonight",
    title: "What Should We Watch Tonight?",
    metaTitle: "What Should We Watch Tonight? – Synema",
    metaDescription:
      "What should we watch tonight? A short plan for picking a movie when you're tired, the catalog is huge, and nobody wants to choose wrong.",
    description:
      "A ten-minute plan for the nightly question, including a rule for when to just press play.",
    category: "Tonight",
    publishedAt: published,
    updatedAt: published,
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
        type: "h3",
        text: "Minute one: who is in the room",
      },
      {
        type: "p",
        text: "Just you, a partner, or friends who have opinions. The more people, the smaller the pile should be. Two people can wander a bit. A group needs a lane. If friends are coming over and the night is meant to feel like an event, borrow a theme from [movie night ideas](/guides/movie-night-ideas) and then come back to the timer.",
      },
      {
        type: "h3",
        text: "Minutes two to six: a short list",
      },
      {
        type: "p",
        text: "Collect about ten films that fit the runtime and the energy. Pull from a note you already keep, from one streaming service, or from whatever people have mentioned this week. Do not tour five apps. Five apps is how the timer loses.",
      },
      {
        type: "h3",
        text: "Minutes seven to ten: honest yes or no",
      },
      {
        type: "p",
        text: "Each person marks the list without narrating. Then compare. Play the first film you share a yes on. If you are solo, play the first film you would start without a speech about how you should watch something better.",
      },
      {
        type: "h2",
        text: "Good enough is the correct standard",
      },
      {
        type: "p",
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
        type: "ul",
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
        text: "With friends, the failure mode is the group chat. Anything is fine until it is time to press play. Same timer, same list, likes kept on each person's own screen. A movie picker earns its place on a Tuesday precisely because nobody wants a production. They want the question to end.",
      },
      {
        type: "p",
        text: "Synema is the short version of this plan. You swipe the same movies in private, and the titles you agree on are the ones left standing. Tonight does not need a better algorithm. It needs a smaller decision and a point where you stop.",
      },
    ],
  },
  {
    slug: "movie-night-ideas",
    title: "Movie Night Ideas That Make Choosing a Movie Easier",
    metaTitle:
      "Movie Night Ideas That Make Choosing a Movie Easier – Synema",
    metaDescription:
      "Movie night ideas that make the choice smaller: themes, constraints, and a way for the group to agree before the snacks get cold.",
    description:
      "Themes and constraints that shrink the choice, so the night starts on a movie instead of a menu.",
    category: "Movie night",
    publishedAt: published,
    updatedAt: published,
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
      "how-to-decide-what-movie-to-watch",
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
        type: "h2",
        text: "Use the idea as a filter",
      },
      {
        type: "p",
        text: "Any theme you cannot use to reject a movie is just a vibe. Under ninety minutes is a filter. Cozy is a mood that still contains half of streaming. Prefer filters. You can add atmosphere after the title exists.",
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
        type: "h2",
        text: "Rituals that are about the room, not the algorithm",
      },
      {
        type: "p",
        text: "Some of the best movie night ideas barely touch the catalog. They make the decision feel lighter because the night is already a little arranged.",
      },
      {
        type: "ul",
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
        text: "Friends make this easier when the invite includes the rule. Movie at 8, under two hours, nothing any of us has seen is a better text than what do you want to watch. People can opt out of the rule before they are on your sofa. A [movie picker for friends](/guides/movie-picker-for-friends) is what you use after they have opted in.",
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
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
