type pick = {
  color: string;
  id: number;
  img: string;
  name: string;
};

type game = {
  pick: pick | null;
  points: number;
};

interface IUSER {
  userId: string;
  id: number;
  name: string;
  belongsRoom: string;
  inGame: game;
}
