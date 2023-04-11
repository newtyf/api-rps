type pick = {
  color: string;
  id: number;
  img: string;
  name: string;
};

export interface IUSER {
  name: string;
  belongsRoom: string;
  pick: pick | null;
  points: number;
}
