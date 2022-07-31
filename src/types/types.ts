export enum Age {
  NINETEEN_OR_BELOW = "19 or less",
  FROM_TWENTY_TILL_TWENTYNINE = "20-29",
  FROM_THIRTY_TILL_FORTYNINE = "30-49",
  FROM_FIFTY_TILL_FIFTYNINE = "50-59",
  ABOVE_SIXTY = "60 or more",
}

export enum FitnessLevel {
  POOR = "poor",
  AVERAGE = "average",
  GOOD = "good",
  EXCELLENT = "excellent",
}

export enum SkillLevel {
  BEGINNER = "beginner",
  INTERMEDIATE = "intermediate",
  INTERMEDIATE_ADVANCED = "intermediate/advanced",
  ADVANCED = "advanced",
  PRO = "pro",
}

export interface Surfer {
  age: Age;
  height: number;
  weight: number;
  fitnessLevel: FitnessLevel;
  skillLevel: SkillLevel;
}

export enum FinsConfiguration {
  SINGLE = "single",
  TWIN = "twin",
  THRUSTER = "thruster",
  TWO_PLUS_ONE = "2+1",
  QUAD = "quad",
}

export enum ShapeType {
  GUN = "gun",
  SUP = "sup",
  LONGBOARD = "longboard",
  FUNBOARD_MALIBU = "funboard/malibu",
  EGG = "egg",
  SHORTBOARD = "shortboard",
  FISH = "fish",
  // TODO HYBRID = 'hybrid'
  // TODO TOW_IN = 'tow-in'
}

export interface Surfboard {
  volumeLiters: number;
  lengthFeet: string;
  widthFeet: string | null;
  thicknessFeet: string | null;
  finsConfiguration: FinsConfiguration;
  shapeType: ShapeType;
}
