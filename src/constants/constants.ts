// I created this categorization based on several info I could find on the web, such as:
// https://magicseaweed.com/help/surf-forecasting-basics/measuring-wave-heights
// https://www.surfnation.com.au/pages/how-to-choose-the-right-surfboard
// https://www.stokedfortravel.com/surfboard-shapes-guide/
import { FitnessLevel, ShapeType, SkillLevel } from "../types/types";

interface ShapeTypeBasedOnWaveHeightCm {
  [height: string]: {
    [key in SkillLevel]: ShapeType[];
  };
}

// I created this categorization based on several info I could find on the web, such as:
// https://magicseaweed.com/help/surf-forecasting-basics/measuring-wave-heights
// https://www.surfnation.com.au/pages/how-to-choose-the-right-surfboard
// https://www.stokedfortravel.com/surfboard-shapes-guide/
export const SHAPE_TYPE_BASED_ON_WAVE_HEIGHT_CM: ShapeTypeBasedOnWaveHeightCm =
  {
    "30": {
      // Ankle to knee
      [SkillLevel.BEGINNER]: [
        ShapeType.EGG,
        ShapeType.FUNBOARD_MALIBU,
        ShapeType.LONGBOARD,
        ShapeType.SUP,
      ],
      [SkillLevel.INTERMEDIATE]: [
        ShapeType.EGG,
        ShapeType.FUNBOARD_MALIBU,
        ShapeType.FISH,
        ShapeType.LONGBOARD,
        ShapeType.SUP,
      ],
      [SkillLevel.INTERMEDIATE_ADVANCED]: [
        ShapeType.LONGBOARD,
        ShapeType.SUP,
        ShapeType.FUNBOARD_MALIBU,
        ShapeType.FISH,
        ShapeType.EGG,
      ],
      [SkillLevel.ADVANCED]: [
        ShapeType.LONGBOARD,
        ShapeType.SUP,
        ShapeType.FUNBOARD_MALIBU,
        ShapeType.FISH,
        ShapeType.EGG,
        ShapeType.SHORTBOARD,
      ],
      [SkillLevel.PRO]: [
        ShapeType.LONGBOARD,
        ShapeType.SUP,
        ShapeType.FUNBOARD_MALIBU,
        ShapeType.FISH,
        ShapeType.EGG,
        ShapeType.SHORTBOARD,
      ],
    },
    "60": {
      // Knee to thigh
      [SkillLevel.BEGINNER]: [
        ShapeType.EGG,
        ShapeType.FUNBOARD_MALIBU,
        ShapeType.LONGBOARD,
        ShapeType.SUP,
      ],
      [SkillLevel.INTERMEDIATE]: [
        ShapeType.EGG,
        ShapeType.FUNBOARD_MALIBU,
        ShapeType.FISH,
        ShapeType.LONGBOARD,
        ShapeType.SUP,
        ShapeType.SHORTBOARD,
      ],
      [SkillLevel.INTERMEDIATE_ADVANCED]: [
        ShapeType.LONGBOARD,
        ShapeType.SUP,
        ShapeType.FISH,
        ShapeType.FUNBOARD_MALIBU,
        ShapeType.EGG,
        ShapeType.SHORTBOARD,
      ],
      [SkillLevel.ADVANCED]: [
        ShapeType.LONGBOARD,
        ShapeType.SUP,
        ShapeType.FUNBOARD_MALIBU,
        ShapeType.FISH,
        ShapeType.EGG,
        ShapeType.SHORTBOARD,
      ],
      [SkillLevel.PRO]: [
        ShapeType.LONGBOARD,
        ShapeType.SUP,
        ShapeType.FUNBOARD_MALIBU,
        ShapeType.FISH,
        ShapeType.EGG,
        ShapeType.SHORTBOARD,
      ],
    },
    "90": {
      // Waist
      [SkillLevel.BEGINNER]: [
        ShapeType.EGG,
        ShapeType.FUNBOARD_MALIBU,
        ShapeType.LONGBOARD,
        ShapeType.SUP,
      ],
      [SkillLevel.INTERMEDIATE]: [
        ShapeType.EGG,
        ShapeType.FUNBOARD_MALIBU,
        ShapeType.FISH,
        ShapeType.LONGBOARD,
        ShapeType.SUP,
        ShapeType.SHORTBOARD,
      ],
      [SkillLevel.INTERMEDIATE_ADVANCED]: [
        ShapeType.SHORTBOARD,
        ShapeType.LONGBOARD,
        ShapeType.SUP,
        ShapeType.FISH,
        ShapeType.FUNBOARD_MALIBU,
        ShapeType.EGG,
      ],
      [SkillLevel.ADVANCED]: [
        ShapeType.LONGBOARD,
        ShapeType.SUP,
        ShapeType.FUNBOARD_MALIBU,
        ShapeType.SHORTBOARD,
        ShapeType.FISH,
        ShapeType.EGG,
      ],
      [SkillLevel.PRO]: [
        ShapeType.LONGBOARD,
        ShapeType.SUP,
        ShapeType.SHORTBOARD,
        ShapeType.FUNBOARD_MALIBU,
        ShapeType.FISH,
        ShapeType.EGG,
      ],
    },
    "120": {
      // Chest
      [SkillLevel.BEGINNER]: [ShapeType.EGG, ShapeType.FUNBOARD_MALIBU],
      [SkillLevel.INTERMEDIATE]: [
        ShapeType.EGG,
        ShapeType.FUNBOARD_MALIBU,
        ShapeType.FISH,
        ShapeType.LONGBOARD,
        ShapeType.SUP,
        ShapeType.SHORTBOARD,
      ],
      [SkillLevel.INTERMEDIATE_ADVANCED]: [
        ShapeType.SHORTBOARD,
        ShapeType.LONGBOARD,
        ShapeType.SUP,
        ShapeType.FISH,
        ShapeType.FUNBOARD_MALIBU,
        ShapeType.EGG,
      ],
      [SkillLevel.ADVANCED]: [
        ShapeType.LONGBOARD,
        ShapeType.SUP,
        ShapeType.FUNBOARD_MALIBU,
        ShapeType.SHORTBOARD,
        ShapeType.FISH,
        ShapeType.EGG,
      ],
      [SkillLevel.PRO]: [
        ShapeType.LONGBOARD,
        ShapeType.SUP,
        ShapeType.SHORTBOARD,
        ShapeType.FUNBOARD_MALIBU,
        ShapeType.FISH,
        ShapeType.EGG,
      ],
    },
    "150": {
      // Head
      [SkillLevel.BEGINNER]: [],
      [SkillLevel.INTERMEDIATE]: [
        ShapeType.FISH,
        ShapeType.LONGBOARD,
        ShapeType.SUP,
        ShapeType.SHORTBOARD,
      ],
      [SkillLevel.INTERMEDIATE_ADVANCED]: [
        ShapeType.SHORTBOARD,
        ShapeType.LONGBOARD,
        ShapeType.SUP,
        ShapeType.FISH,
      ],
      [SkillLevel.ADVANCED]: [
        ShapeType.LONGBOARD,
        ShapeType.SUP,
        ShapeType.SHORTBOARD,
        ShapeType.FISH,
      ],
      [SkillLevel.PRO]: [
        ShapeType.SHORTBOARD,
        ShapeType.LONGBOARD,
        ShapeType.SUP,
        ShapeType.FISH,
      ],
    },
    "180": {
      // 2x over head
      [SkillLevel.BEGINNER]: [],
      [SkillLevel.INTERMEDIATE]: [],
      [SkillLevel.INTERMEDIATE_ADVANCED]: [ShapeType.SHORTBOARD],
      [SkillLevel.ADVANCED]: [ShapeType.SHORTBOARD],
      [SkillLevel.PRO]: [ShapeType.SHORTBOARD],
    },
    "240": {
      // 3x over head
      [SkillLevel.BEGINNER]: [],
      [SkillLevel.INTERMEDIATE]: [],
      [SkillLevel.INTERMEDIATE_ADVANCED]: [],
      [SkillLevel.ADVANCED]: [ShapeType.SHORTBOARD, ShapeType.GUN],
      [SkillLevel.PRO]: [ShapeType.SHORTBOARD, ShapeType.GUN],
    },
  };

type WeightVolumeLitersTable = {
  [key in SkillLevel]: {
    [weight: string]: number;
  };
};

export const WEIGHT_VOLUME_LITERS_TABLE: WeightVolumeLitersTable = {
  [SkillLevel.BEGINNER]: {
    "35": 25.9,
    "40": 29.2,
    "45": 32.4,
    "50": 35.5,
    "55": 37.95,
    "60": 40.8,
    "65": 44.2,
    "70": 47.6,
    "75": 51.0,
    "80": 54.4,
    "85": 57.8,
    "90": 61.2,
    "95": 64.6,
    "100": 68.0,
    "105": 71.4,
    "110": 74.8,
  },
  [SkillLevel.INTERMEDIATE]: {
    "35": 21.0,
    "40": 23.6,
    "45": 26.1,
    "50": 28.5,
    "55": 30.25,
    "60": 32.4,
    "65": 35.1,
    "70": 37.8,
    "75": 40.5,
    "80": 43.2,
    "85": 45.9,
    "90": 48.6,
    "95": 51.3,
    "100": 54.0,
    "105": 56.7,
    "110": 59.4,
  },
  [SkillLevel.INTERMEDIATE_ADVANCED]: {
    "35": 16.8,
    "40": 18.8,
    "45": 20.7,
    "50": 22.5,
    "55": 23.65,
    "60": 25.2,
    "65": 27.3,
    "70": 29.4,
    "75": 31.5,
    "80": 33.6,
    "85": 35.7,
    "90": 37.8,
    "95": 39.9,
    "100": 42.0,
    "105": 44.1,
    "110": 46.2,
  },
  [SkillLevel.ADVANCED]: {
    "35": 15.75,
    "40": 17.2,
    "45": 18.9,
    "50": 20.5,
    "55": 21.45,
    "60": 22.8,
    "65": 24.7,
    "70": 26.6,
    "75": 28.5,
    "80": 30.4,
    "85": 32.3,
    "90": 34.2,
    "95": 36.1,
    "100": 38.0,
    "105": 39.9,
    "110": 41.8,
  },
  [SkillLevel.PRO]: {
    "35": 15.05,
    "40": 16.4,
    "45": 18.0,
    "50": 19.0,
    "55": 19.8,
    "60": 21.0,
    "65": 22.75,
    "70": 24.5,
    "75": 26.25,
    "80": 28.0,
    "85": 29.75,
    "90": 31.5,
    "95": 33.25,
    "100": 35.0,
    "105": 36.75,
    "110": 38.5,
  },
};

export const AGE_VOLUME_FACTOR = {
  31: 1,
  51: 1.08,
  61: 1.2,
  120: 1.3,
};

const SUP_STANDARD_SIZES = {
  "65": {
    min: { feet: 10, inches: 0 },
    max: { feet: 10, inches: 6 },
  },
  "75": {
    min: { feet: 10, inches: 0 },
    max: { feet: 10, inches: 6 },
  },
  "80": {
    min: { feet: 11, inches: 0 },
    max: { feet: 11, inches: 6 },
  },
  "90": {
    min: { feet: 11, inches: 0 },
    max: { feet: 11, inches: 6 },
  },
  "110": {
    min: { feet: 11, inches: 11 },
    max: { feet: 12, inches: 0 },
  },
};

const LONGBOARD_STANDARD_SIZES = {
  "65": {
    min: { feet: 9, inches: 0 },
    max: { feet: 9, inches: 2 },
  },
  "75": {
    min: { feet: 9, inches: 0 },
    max: { feet: 9, inches: 2 },
  },
  "80": {
    min: { feet: 9, inches: 4 },
    max: { feet: 9, inches: 6 },
  },
  "90": {
    min: { feet: 9, inches: 4 },
    max: { feet: 9, inches: 6 },
  },
  "110": {
    min: { feet: 10, inches: 0 },
  },
};

const FUNBOARD_MALIBU_STANDARD_SIZES = {
  "65": {
    min: { feet: 7, inches: 0 },
    max: { feet: 7, inches: 2 },
  },
  "75": {
    min: { feet: 7, inches: 2 },
    max: { feet: 7, inches: 4 },
  },
  "80": {
    min: { feet: 7, inches: 6 },
    max: { feet: 7, inches: 6 },
  },
  "90": {
    min: { feet: 7, inches: 7 },
    max: { feet: 7, inches: 7 },
  },
  "110": {
    min: { feet: 7, inches: 8 },
    max: { feet: 7, inches: 8 },
  },
};

const SHORTBOARD_STANDARD_SIZES = {
  "65": {
    min: { feet: 6, inches: 0 },
    max: { feet: 6, inches: 4 },
  },
  "75": {
    min: { feet: 6, inches: 2 },
    max: { feet: 6, inches: 6 },
  },
  "80": {
    min: { feet: 6, inches: 4 },
    max: { feet: 6, inches: 8 },
  },
  "90": {
    min: { feet: 6, inches: 8 },
    max: { feet: 7, inches: 2 },
  },
  "110": {
    min: { feet: 7, inches: 2 },
  },
};

const SHORTBOARD_ADVANCED_SIZES = {
  "65": {
    min: { feet: 5, inches: 5 },
    max: { feet: 5, inches: 10 },
  },
  "75": {
    min: { feet: 5, inches: 7 },
    max: { feet: 6, inches: 1 },
  },
  "80": {
    min: { feet: 5, inches: 10 },
    max: { feet: 6, inches: 3 },
  },
  "90": {
    min: { feet: 6, inches: 0 },
    max: { feet: 6, inches: 5 },
  },
  "110": {
    min: { feet: 6, inches: 2 },
  },
};

const FISH_STANDARD_SIZES = {
  "65": {
    min: { feet: 5, inches: 10 },
    max: { feet: 6, inches: 2 },
  },
  "75": {
    min: { feet: 5, inches: 10 },
    max: { feet: 6, inches: 2 },
  },
  "80": {
    min: { feet: 6, inches: 4 },
    max: { feet: 6, inches: 7 },
  },
  "90": {
    min: { feet: 6, inches: 8 },
    max: { feet: 7, inches: 2 },
  },
  "110": {
    min: { feet: 7, inches: 6 },
    max: { feet: 8, inches: 0 },
  },
};

const FISH_ADVANCED_SIZES = {
  "65": {
    min: { feet: 5, inches: 8 },
    max: { feet: 6, inches: 2 },
  },
  "75": {
    min: { feet: 5, inches: 9 },
    max: { feet: 6, inches: 5 },
  },
  "80": {
    min: { feet: 6, inches: 0 },
    max: { feet: 6, inches: 7 },
  },
  "90": {
    min: { feet: 6, inches: 3 },
    max: { feet: 6, inches: 8 },
  },
  "110": {
    min: { feet: 6, inches: 5 },
  },
};

const EGG_ADVANCED_AND_PRO_SIZES = {
  "65": {
    max: { feet: 6, inches: 6 },
  },
  "75": {
    max: { feet: 6, inches: 6 },
  },
  "80": {
    min: { feet: 6, inches: 6 },
    max: { feet: 6, inches: 10 },
  },
  "90": {
    min: { feet: 6, inches: 10 },
    max: { feet: 7, inches: 2 },
  },
  "110": {
    min: { feet: 6, inches: 10 },
    max: { feet: 7, inches: 2 },
  },
};

const GUN_STANDARD_SIZES = {
  "65": {
    min: { feet: 6, inches: 10 },
    max: { feet: 7, inches: 4 },
  },
  "75": {
    min: { feet: 7, inches: 2 },
    max: { feet: 7, inches: 8 },
  },
  "80": {
    min: { feet: 7, inches: 6 },
    max: { feet: 8, inches: 0 },
  },
  "90": {
    min: { feet: 7, inches: 10 },
    max: { feet: 8, inches: 4 },
  },
  "110": {
    min: { feet: 7, inches: 10 },
    max: { feet: 8, inches: 4 },
  },
};

type ShapeLengthFeetConversionTable = {
  [key in ShapeType]: {
    [key in SkillLevel]: {
      [weight: string]: {
        min?: { feet: number; inches: number };
        max?: { feet: number; inches: number };
      };
    };
  };
};

// The length calculation follows several charts from different websites:
// https://www.surfertoday.com/board-size-chart/surf
// https://www.wetsuitwearhouse.com/blog/surfboard-size-chart-guide/
// https://finbin.net/egg-surfboard///Egg_Surfboard_Size_Chart
// https://ibaworldtour.com/what-size-gun-surfboard-do-i-need/
export const SHAPE_LEGTH_FEET_BASED_ON_SURFER_WEIGHT: ShapeLengthFeetConversionTable =
  {
    [ShapeType.SUP]: {
      [SkillLevel.BEGINNER]: {
        "65": {
          min: { feet: 10, inches: 0 },
          max: { feet: 10, inches: 8 },
        },
        "75": {
          min: { feet: 10, inches: 0 },
          max: { feet: 10, inches: 8 },
        },
        "80": {
          min: { feet: 11, inches: 3 },
          max: { feet: 12, inches: 0 },
        },
        "90": {
          min: { feet: 11, inches: 8 },
          max: { feet: 12, inches: 0 },
        },
        "110": {
          min: { feet: 11, inches: 11 },
          max: { feet: 12, inches: 0 },
        },
      },
      [SkillLevel.INTERMEDIATE]: SUP_STANDARD_SIZES,
      [SkillLevel.INTERMEDIATE_ADVANCED]: SUP_STANDARD_SIZES,
      [SkillLevel.ADVANCED]: SUP_STANDARD_SIZES,
      [SkillLevel.PRO]: SUP_STANDARD_SIZES,
    },
    [ShapeType.LONGBOARD]: {
      [SkillLevel.BEGINNER]: {
        "65": {
          min: { feet: 9, inches: 2 },
          max: { feet: 9, inches: 4 },
        },
        "75": {
          min: { feet: 9, inches: 4 },
          max: { feet: 9, inches: 6 },
        },
        "80": {
          min: { feet: 9, inches: 6 },
          max: { feet: 9, inches: 8 },
        },
        "90": {
          min: { feet: 9, inches: 8 },
          max: { feet: 10, inches: 0 },
        },
        "110": {
          min: { feet: 10, inches: 0 },
        },
      },
      [SkillLevel.INTERMEDIATE]: LONGBOARD_STANDARD_SIZES,
      [SkillLevel.INTERMEDIATE_ADVANCED]: LONGBOARD_STANDARD_SIZES,
      [SkillLevel.ADVANCED]: LONGBOARD_STANDARD_SIZES,
      [SkillLevel.PRO]: LONGBOARD_STANDARD_SIZES,
    },
    [ShapeType.FUNBOARD_MALIBU]: {
      [SkillLevel.BEGINNER]: {
        "65": {
          min: { feet: 7, inches: 2 },
          max: { feet: 7, inches: 4 },
        },
        "75": {
          min: { feet: 7, inches: 4 },
          max: { feet: 7, inches: 6 },
        },
        "80": {
          min: { feet: 7, inches: 6 },
          max: { feet: 7, inches: 8 },
        },
        "90": {
          min: { feet: 7, inches: 8 },
          max: { feet: 7, inches: 8 },
        },
        "110": {
          min: { feet: 7, inches: 8 },
        },
      },
      [SkillLevel.INTERMEDIATE]: FUNBOARD_MALIBU_STANDARD_SIZES,
      [SkillLevel.INTERMEDIATE_ADVANCED]: FUNBOARD_MALIBU_STANDARD_SIZES,
      [SkillLevel.ADVANCED]: FUNBOARD_MALIBU_STANDARD_SIZES,
      [SkillLevel.PRO]: FUNBOARD_MALIBU_STANDARD_SIZES,
    },
    [ShapeType.SHORTBOARD]: {
      [SkillLevel.BEGINNER]: {
        "65": {
          min: { feet: 6, inches: 2 },
          max: { feet: 6, inches: 4 },
        },
        "75": {
          min: { feet: 6, inches: 4 },
          max: { feet: 6, inches: 8 },
        },
        "80": {
          min: { feet: 6, inches: 6 },
          max: { feet: 6, inches: 10 },
        },
        "90": {
          min: { feet: 6, inches: 10 },
          max: { feet: 7, inches: 4 },
        },
        "110": {
          min: { feet: 7, inches: 4 },
        },
      },
      [SkillLevel.INTERMEDIATE]: SHORTBOARD_STANDARD_SIZES,
      [SkillLevel.INTERMEDIATE_ADVANCED]: SHORTBOARD_STANDARD_SIZES,
      [SkillLevel.ADVANCED]: SHORTBOARD_ADVANCED_SIZES,
      [SkillLevel.PRO]: SHORTBOARD_ADVANCED_SIZES,
    },
    [ShapeType.FISH]: {
      [SkillLevel.BEGINNER]: {
        "65": {
          min: { feet: 6, inches: 1 },
          max: { feet: 6, inches: 4 },
        },
        "75": {
          min: { feet: 6, inches: 3 },
          max: { feet: 6, inches: 8 },
        },
        "80": {
          min: { feet: 6, inches: 5 },
          max: { feet: 6, inches: 10 },
        },
        "90": {
          min: { feet: 6, inches: 9 },
          max: { feet: 7, inches: 4 },
        },
        "110": {
          min: { feet: 7, inches: 8 },
        },
      },
      [SkillLevel.INTERMEDIATE]: FISH_STANDARD_SIZES,
      [SkillLevel.INTERMEDIATE_ADVANCED]: FISH_STANDARD_SIZES,
      [SkillLevel.ADVANCED]: FISH_ADVANCED_SIZES,
      [SkillLevel.PRO]: FISH_ADVANCED_SIZES,
    },
    [ShapeType.EGG]: {
      [SkillLevel.BEGINNER]: {
        "65": {
          min: { feet: 6, inches: 10 },
          max: { feet: 6, inches: 10 },
        },
        "75": {
          min: { feet: 6, inches: 10 },
          max: { feet: 6, inches: 10 },
        },
        "80": {
          min: { feet: 7, inches: 2 },
          max: { feet: 7, inches: 2 },
        },
        "90": {
          min: { feet: 7, inches: 2 },
        },
        "110": {
          min: { feet: 7, inches: 2 },
        },
      },
      [SkillLevel.INTERMEDIATE]: {
        "65": {
          min: { feet: 6, inches: 6 },
          max: { feet: 7, inches: 2 },
        },
        "75": {
          min: { feet: 6, inches: 6 },
          max: { feet: 7, inches: 2 },
        },
        "80": {
          min: { feet: 6, inches: 10 },
          max: { feet: 7, inches: 2 },
        },
        "90": {
          min: { feet: 6, inches: 10 },
          max: { feet: 7, inches: 2 },
        },
        "110": {
          min: { feet: 7, inches: 2 },
        },
      },
      [SkillLevel.INTERMEDIATE_ADVANCED]: {
        "65": {
          min: { feet: 6, inches: 6 },
          max: { feet: 6, inches: 10 },
        },
        "75": {
          min: { feet: 6, inches: 6 },
          max: { feet: 6, inches: 10 },
        },
        "80": {
          min: { feet: 6, inches: 6 },
          max: { feet: 7, inches: 2 },
        },
        "90": {
          min: { feet: 6, inches: 10 },
          max: { feet: 7, inches: 2 },
        },
        "110": {
          min: { feet: 7, inches: 2 },
        },
      },
      [SkillLevel.ADVANCED]: EGG_ADVANCED_AND_PRO_SIZES,
      [SkillLevel.PRO]: EGG_ADVANCED_AND_PRO_SIZES,
    },
    [ShapeType.GUN]: {
      [SkillLevel.BEGINNER]: GUN_STANDARD_SIZES,
      [SkillLevel.INTERMEDIATE]: GUN_STANDARD_SIZES,
      [SkillLevel.INTERMEDIATE_ADVANCED]: GUN_STANDARD_SIZES,
      [SkillLevel.ADVANCED]: GUN_STANDARD_SIZES,
      [SkillLevel.PRO]: FISH_ADVANCED_SIZES,
    },
    // TODO also calculate the length for the board types below
    // 'hybrid': {}, TODO
    // 'tow-in': {}, TODO
  };

export const FITNESS_VOLUME_FACTOR = {
  [FitnessLevel.POOR]: 1.2,
  [FitnessLevel.AVERAGE]: 1.1,
  [FitnessLevel.GOOD]: 1.05,
  [FitnessLevel.EXCELLENT]: 1,
};
