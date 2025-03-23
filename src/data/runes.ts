export const enum ERuneTier {
  LOW = 1,
  MID = 2,
  HIGH = 3,
  ANGELIC = 4
};

const runes: TRuneDef[] = [
  { name: "Ol", tier: 1 },
  { name: "Old", tier: 1 },
  { name: "Tor", tier: 1 },
  { name: "Naf", tier: 1 },
  { name: "Eth", tier: 1 },
  { name: "Uth", tier: 1 },
  { name: "Tul", tier: 1 },
  { name: "Rex", tier: 1 },
  { name: "Ert", tier: 1 },
  { name: "Thal", tier: 1 },
  { name: "Ymn", tier: 1 },
  { name: "Sal", tier: 1 },
  { name: "Nut", tier: 1 },
  { name: "Del", tier: 1 },
  { name: "Hel", tier: 1 },
  { name: 'Io', tier: 1 },
  { name: "Lum", tier: 1 },
  { name: "Co", tier: 1 },
  { name: "Fel", tier: 1 },

  { name: "Lem", tier: 2 },
  { name: "Pul", tier: 2 },
  { name: "Um", tier: 2 },
  { name: "Mal", tier: 2 },
  { name: "Ist", tier: 2 },
  { name: "Gul", tier: 2 },
  { name: "Vex", tier: 2 },

  { name: "Qi", tier: 3 },
  { name: "Xo", tier: 3 },
  { name: "Sur", tier: 3 },
  { name: "Ber", tier: 3 },
  { name: "Jah", tier: 3 },
  { name: "Drax", tier: 3 },
  { name: "Zed", tier: 3 },

  { name: "Fawn", tier: 4 },
  { name: "Flo", tier: 4 },
  { name: "Nju", tier: 4 },
  { name: "Jol", tier: 4 }

];

export function runesIds() {
  return runes.map((rune) => rune.name);
}

export default runes;
