export interface Game {
  id: string;
  title: string;
  genre?: string;
  coverUrl: string;
  rating: number;
  likes: number;
  coverAspectRatio?: number;
  showInfo?: boolean;
  featured?: boolean;
  category?: string;
  price?: string;
  description?: string;
}

export interface LeaderboardEntry {
  rank: number;
  playerName: string;
  avatarInitials: string;
  avatarColor: string;
  gamesPlayed: number;
  totalScore: number;
  streakDays: number;
  favoriteGame: string;
}

export type AuthMode = 'login' | 'register';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload extends LoginPayload {
  name: string;
  confirmPassword: string;
}
