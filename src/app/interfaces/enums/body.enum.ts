export enum Body {
    Average = 'Average',
    Little = 'Little',
    Large = 'Large',
};

export type BodyEnumStrings = keyof typeof Body;