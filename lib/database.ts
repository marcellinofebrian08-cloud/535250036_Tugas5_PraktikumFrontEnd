export interface Game {
  id: number;
  name: string;
  category: string;
  players: string;
  duration: string;
  difficulty: string;
  emoji: string;
  description: string;
}

export const games: Game[] = [
  {
    id: 1,
    name: "Monopoly",
    category: "Keluarga",
    players: "2-6 pemain",
    duration: "90 menit",
    difficulty: "Mudah",
    emoji: "🎩",
    description:
      "Beli properti, bangun rumah dan hotel, lalu bikin lawan bangkrut bayar sewa.",
  },
  {
    id: 2,
    name: "The Game of Life",
    category: "Keluarga",
    players: "2-4 pemain",
    duration: "60 menit",
    difficulty: "Mudah",
    emoji: "🚗",
    description:
      "Putar roda dan jalani hidup dari kuliah, kerja, menikah, sampai pensiun.",
  },
  {
    id: 3,
    name: "Dungeons & Dragons",
    category: "Kooperatif",
    players: "3-6 pemain",
    duration: "180 menit",
    difficulty: "Sulit",
    emoji: "🐉",
    description:
      "Petualangan fantasi dipandu Dungeon Master, lempar dadu d20 dan tentukan nasib party-mu.",
  },
  {
    id: 4,
    name: "Catan",
    category: "Strategi",
    players: "3-4 pemain",
    duration: "60-90 menit",
    difficulty: "Sedang",
    emoji: "🌾",
    description:
      "Kumpulkan sumber daya, bangun desa dan jalan, lalu tawar-menawar dengan pemain lain.",
  },
  {
    id: 5,
    name: "Risk",
    category: "Strategi",
    players: "2-6 pemain",
    duration: "120 menit",
    difficulty: "Sulit",
    emoji: "🗺️",
    description:
      "Kerahkan pasukan, lempar dadu, dan taklukkan wilayah demi wilayah di peta dunia.",
  },
  {
    id: 6,
    name: "Catur",
    category: "Strategi",
    players: "2 pemain",
    duration: "30-60 menit",
    difficulty: "Sulit",
    emoji: "♟️",
    description:
      "Adu strategi klasik satu lawan satu, satu langkah salah bisa langsung skakmat.",
  },
  {
    id: 7,
    name: "Codenames",
    category: "Party",
    players: "4-8 pemain",
    duration: "15 menit",
    difficulty: "Mudah",
    emoji: "🕵️",
    description:
      "Dua tim adu kode rahasia, cukup satu kata petunjuk untuk menebak agen sendiri.",
  },
  {
    id: 8,
    name: "Pictionary",
    category: "Party",
    players: "4-8 pemain",
    duration: "45 menit",
    difficulty: "Mudah",
    emoji: "✏️",
    description:
      "Gambar petunjuk secepat mungkin dan biarkan timmu menebak sebelum waktu habis.",
  },
  {
    id: 9,
    name: "Ticket to Ride",
    category: "Keluarga",
    players: "2-5 pemain",
    duration: "45 menit",
    difficulty: "Mudah",
    emoji: "🚂",
    description:
      "Kumpulkan kartu kereta dan sambungkan rute antar kota di peta sebelum lawanmu.",
  },
  {
    id: 10,
    name: "Dixit",
    category: "Party",
    players: "3-8 pemain",
    duration: "30 menit",
    difficulty: "Mudah",
    emoji: "🎨",
    description:
      "Tebak kartu bergambar unik dari cerita pemain lain, makin kreatif makin seru.",
  },
  {
    id: 11,
    name: "Pandemic",
    category: "Kooperatif",
    players: "2-4 pemain",
    duration: "45 menit",
    difficulty: "Sedang",
    emoji: "🦠",
    description:
      "Kerja sama keliling peta dunia untuk menemukan obat sebelum wabah menyebar.",
  },
  {
    id: 12,
    name: "Forbidden Island",
    category: "Kooperatif",
    players: "2-4 pemain",
    duration: "30 menit",
    difficulty: "Mudah",
    emoji: "🏝️",
    description:
      "Selamatkan empat harta karun dan kabur dari pulau yang pelan-pelan tenggelam.",
  },
];
