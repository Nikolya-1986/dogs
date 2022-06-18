export enum Body {
    Average = 'Average',
    Little = 'Little',
    Large = 'Large',
    All = 'All',
};

export type BodyEnumStrings = keyof typeof Body;