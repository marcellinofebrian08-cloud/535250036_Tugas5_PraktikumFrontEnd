export interface Game {
  id: number;
  name: string;
  category: string;
  players: string;
  duration: string;
  difficulty: string;
}

export const games: Game[] = [];
