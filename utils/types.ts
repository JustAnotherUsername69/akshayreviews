export type Category = 'Watched' | 'Currently Watching' | 'Watchlist' | 'Dropped' | 'Rewatching';

export interface MediaItem {
  id: string;
  title: string;
  category: Category;
  rating: number;
  comment: string;
  platform: string;
  dateWatched: string;
  genre?: string;
  thumbnail?: string;
}
