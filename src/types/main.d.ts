type ERuneTier = import("@/data/runes").ERuneTier;

type TItemTypeId =
  | "Claws"
  | "Daggers"
  | "Swords"
  | "Maces"
  | "Axes"
  | "Polearms"
  | "Canes"
  | "Staves"
  | "Guns"
  | "Bows"
  | "Books"
  | "Spellblades"
  | "Chainsaws"
  | "Wands"
  | "Body Armors"
  | "Shields"
  | "Helms"
  | "Boots"
  | "Flasks"
  | "Claw"
  | "Dagger"
  | "Sword"
  | "Mace"
  | "Axe"
  | "Polearm"
  | "Cane"
  | "Stave"
  | "Gun"
  | "Bow"
  | "Book"
  | "Spellblade"
  | "Chainsaw"
  | "Wand"
  | "Body Armor"
  | "Shield"
  | "Helm"
  | "Boot"
  | "Flask"
  | "Staff"
  | "Helmet"
  | "Throwing";

type TRuneId =
  | "Ol"
  | "Old"
  | "Tor"
  | "Naf"
  | "Eth"
  | "Uth"
  | "Tul"
  | "Rex"
  | "Ert"
  | "Thal"
  | "Ymn"
  | "Sal"
  | "Nut"
  | "Del"
  | "Hel"
  | 'Io'
  | "Lum"
  | "Co"
  | "Fel"
  | "Lem"
  | "Pul"
  | "Um"
  | "Mal"
  | "Ist"
  | "Gul"
  | "Vex"
  | "Qi"
  | "Xo"
  | "Sur"
  | "Ber"
  | "Jah"
  | "Drax"
  | "Zed"
  | "Fawn"
  | "Flo"
  | "Nju"
  | "Jol";

    type TRuneDef = {
  name: TRuneId;
  tier: ERuneTier;
};

type TRunewordId = string;

type TRuneword = {
  title: TRunewordId;
  runes: TRuneId[];
  level: number;
  ttypes: TItemTypeId[];
  ladder?: boolean; // display "ladder only" icon next to runeword name
  tinfos?: string; // optional `(subtext)` shown in Item Type column
  version?: string; // optional patch version eg `2.4` tag shown next to runeword name
};

type TRunewordMeta = {
  [runewordId: string]: string;
};

type TRunewordItem = TRuneword & {
  filterMatch: boolean; // true if this item matches current search filter
};
