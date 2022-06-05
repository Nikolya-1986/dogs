export enum Variety {
    Frequent = 'Frequent',
    Rare = 'Rare',
};

export type VarietyEnumStrings = keyof typeof Variety;