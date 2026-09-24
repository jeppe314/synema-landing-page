/** Editorial stills from images.unsplash.com. Query string is fixed so next.config can allowlist it. */
const editorial = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=75`;

export const guideImages = {
  coupleAtScreen: editorial("photo-1629646526460-f0a346dbf930"),
  friendsAtScreen: editorial("photo-1548095115-45697e222a58"),
  livingRoom: editorial("photo-1692188071339-2825a8a997f1"),
  cinema: editorial("photo-1688678004647-945d5aaf91c1"),
  emptyCinema: editorial("photo-1489599849927-2ee91cede3ba"),
  swipe: "/screenshots/swipe-movies.png",
  match: "/screenshots/match.png",
  createRoom: "/screenshots/create-room.png",
} as const;
