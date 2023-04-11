export interface IRoom {
  integrantes: string[];
  state: "START" | "END" | "WAIT";
  winner: string | null;
}
