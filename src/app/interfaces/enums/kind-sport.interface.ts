export enum KindSport {
    Agility = 'Agility',
    Frisbee = 'Frisbee',
    PitchAndGo = 'Pitch and go',
    Flyball = 'Flyball',
    WeightPulling = 'Weight pulling',
    DrivingSports = 'DrivingSports',
};

export type KindSportEnumStrings = keyof typeof KindSport;