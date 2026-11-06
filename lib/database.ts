// data website disimpan langsung di sini, nggak perlu sqlite karena isinya statis
export interface Game {
  id: number;
  name: string;
  category: string;
  players: string;
  duration: string;
  difficulty: string;
}

// diisi nanti waktu bikin section koleksi game
export const games: Game[] = [];
