// I created this categorization based on several info I could find on the web, such as:
// https://magicseaweed.com/help/surf-forecasting-basics/measuring-wave-heights
// https://www.surfnation.com.au/pages/how-to-choose-the-right-surfboard
// https://www.stokedfortravel.com/surfboard-shapes-guide/
import {FitnessLevel, ShapeType, SkillLevel} from "../types/types";

interface ShapeTypeBasedOnWaveHeightCm {
    [height: string]: {
        [key in SkillLevel]: ShapeType[];
    }
}

// I created this categorization based on several info I could find on the web, such as:
// https://magicseaweed.com/help/surf-forecasting-basics/measuring-wave-heights
// https://www.surfnation.com.au/pages/how-to-choose-the-right-surfboard
// https://www.stokedfortravel.com/surfboard-shapes-guide/
export const SHAPE_TYPE_BASED_ON_WAVE_HEIGHT_CM: ShapeTypeBasedOnWaveHeightCm = {
    '30': {  // Ankle to knee
        [SkillLevel.BEGINNER]: [ShapeType.EGG, ShapeType.FUNBOARD_MALIBU, ShapeType.LONGBOARD, ShapeType.SUP],
        [SkillLevel.INTERMEDIATE]: [ShapeType.EGG, ShapeType.FUNBOARD_MALIBU, ShapeType.FISH, ShapeType.LONGBOARD, ShapeType.SUP],
        [SkillLevel.INTERMEDIATE_ADVANCED]: [ShapeType.LONGBOARD, ShapeType.SUP, ShapeType.FUNBOARD_MALIBU, ShapeType.FISH, ShapeType.EGG],
        [SkillLevel.ADVANCED]: [ShapeType.LONGBOARD, ShapeType.SUP, ShapeType.FUNBOARD_MALIBU, ShapeType.FISH, ShapeType.EGG, ShapeType.SHORTBOARD],
        [SkillLevel.PRO]: [ShapeType.LONGBOARD, ShapeType.SUP, ShapeType.FUNBOARD_MALIBU, ShapeType.FISH, ShapeType.EGG, ShapeType.SHORTBOARD],
    },
    '60': {  // Knee to thigh
        [SkillLevel.BEGINNER]: [ShapeType.EGG, ShapeType.FUNBOARD_MALIBU, ShapeType.LONGBOARD, ShapeType.SUP],
        [SkillLevel.INTERMEDIATE]: [ShapeType.EGG, ShapeType.FUNBOARD_MALIBU, ShapeType.FISH, ShapeType.LONGBOARD, ShapeType.SUP, ShapeType.SHORTBOARD],
        [SkillLevel.INTERMEDIATE_ADVANCED]: [ShapeType.LONGBOARD, ShapeType.SUP, ShapeType.FISH, ShapeType.FUNBOARD_MALIBU, ShapeType.EGG, ShapeType.SHORTBOARD],
        [SkillLevel.ADVANCED]: [ShapeType.LONGBOARD, ShapeType.SUP, ShapeType.FUNBOARD_MALIBU, ShapeType.FISH, ShapeType.EGG, ShapeType.SHORTBOARD],
        [SkillLevel.PRO]: [ShapeType.LONGBOARD, ShapeType.SUP, ShapeType.FUNBOARD_MALIBU, ShapeType.FISH, ShapeType.EGG, ShapeType.SHORTBOARD],
    },
    '90': {  // Waist
        [SkillLevel.BEGINNER]: [ShapeType.EGG, ShapeType.FUNBOARD_MALIBU, ShapeType.LONGBOARD, ShapeType.SUP],
        [SkillLevel.INTERMEDIATE]: [ShapeType.EGG, ShapeType.FUNBOARD_MALIBU, ShapeType.FISH, ShapeType.LONGBOARD, ShapeType.SUP, ShapeType.SHORTBOARD],
        [SkillLevel.INTERMEDIATE_ADVANCED]: [ShapeType.SHORTBOARD, ShapeType.LONGBOARD, ShapeType.SUP, ShapeType.FISH, ShapeType.FUNBOARD_MALIBU, ShapeType.EGG],
        [SkillLevel.ADVANCED]: [ShapeType.LONGBOARD, ShapeType.SUP, ShapeType.FUNBOARD_MALIBU, ShapeType.SHORTBOARD, ShapeType.FISH, ShapeType.EGG],
        [SkillLevel.PRO]: [ShapeType.LONGBOARD, ShapeType.SUP, ShapeType.SHORTBOARD, ShapeType.FUNBOARD_MALIBU, ShapeType.FISH, ShapeType.EGG],
    },
    '120': {  // Chest
        [SkillLevel.BEGINNER]: [ShapeType.EGG, ShapeType.FUNBOARD_MALIBU],
        [SkillLevel.INTERMEDIATE]: [ShapeType.EGG, ShapeType.FUNBOARD_MALIBU, ShapeType.FISH, ShapeType.LONGBOARD, ShapeType.SUP, ShapeType.SHORTBOARD],
        [SkillLevel.INTERMEDIATE_ADVANCED]: [ShapeType.SHORTBOARD, ShapeType.LONGBOARD, ShapeType.SUP, ShapeType.FISH, ShapeType.FUNBOARD_MALIBU, ShapeType.EGG],
        [SkillLevel.ADVANCED]: [ShapeType.LONGBOARD, ShapeType.SUP, ShapeType.FUNBOARD_MALIBU, ShapeType.SHORTBOARD, ShapeType.FISH, ShapeType.EGG],
        [SkillLevel.PRO]: [ShapeType.LONGBOARD, ShapeType.SUP, ShapeType.SHORTBOARD, ShapeType.FUNBOARD_MALIBU, ShapeType.FISH, ShapeType.EGG],
    },
    '150': {  // Head
        [SkillLevel.BEGINNER]: [],
        [SkillLevel.INTERMEDIATE]: [ShapeType.FISH, ShapeType.LONGBOARD, ShapeType.SUP, ShapeType.SHORTBOARD],
        [SkillLevel.INTERMEDIATE_ADVANCED]: [ShapeType.SHORTBOARD, ShapeType.LONGBOARD, ShapeType.SUP, ShapeType.FISH],
        [SkillLevel.ADVANCED]: [ShapeType.LONGBOARD, ShapeType.SUP, ShapeType.SHORTBOARD, ShapeType.FISH],
        [SkillLevel.PRO]: [ShapeType.SHORTBOARD, ShapeType.LONGBOARD, ShapeType.SUP, ShapeType.FISH],
    },
    '180': {  // 2x over head
        [SkillLevel.BEGINNER]: [],
        [SkillLevel.INTERMEDIATE]: [],
        [SkillLevel.INTERMEDIATE_ADVANCED]: [ShapeType.SHORTBOARD],
        [SkillLevel.ADVANCED]: [ShapeType.SHORTBOARD],
        [SkillLevel.PRO]: [ShapeType.SHORTBOARD],
    },
    '240': {  // 3x over head
        [SkillLevel.BEGINNER]: [],
        [SkillLevel.INTERMEDIATE]: [],
        [SkillLevel.INTERMEDIATE_ADVANCED]: [],
        [SkillLevel.ADVANCED]: [ShapeType.SHORTBOARD, ShapeType.GUN],
        [SkillLevel.PRO]: [ShapeType.SHORTBOARD, ShapeType.GUN],
    }
}

type WeightVolumeLitersTable = {
    [key in SkillLevel]: {
        [weight: string]: number;
    }
}

export const WEIGHT_VOLUME_LITERS_TABLE: WeightVolumeLitersTable = {
    [SkillLevel.BEGINNER]: {
        '35': 25.9,
        '40': 29.20,
        '45': 32.40,
        '50': 35.50,
        '55': 37.95,
        '60': 40.80,
        '65': 44.20,
        '70': 47.60,
        '75': 51.00,
        '80': 54.40,
        '85': 57.80,
        '90': 61.20,
        '95': 64.60,
        '100': 68.00,
        '105': 71.40,
        '110': 74.80,
    },
    [SkillLevel.INTERMEDIATE]: {
        '35': 21.00,
        '40': 23.60,
        '45': 26.10,
        '50': 28.50,
        '55': 30.25,
        '60': 32.40,
        '65': 35.10,
        '70': 37.80,
        '75': 40.50,
        '80': 43.20,
        '85': 45.90,
        '90': 48.60,
        '95': 51.30,
        '100': 54.00,
        '105': 56.70,
        '110': 59.40,
    },
    [SkillLevel.INTERMEDIATE_ADVANCED]: {
        '35': 16.80,
        '40': 18.80,
        '45': 20.70,
        '50': 22.50,
        '55': 23.65,
        '60': 25.20,
        '65': 27.30,
        '70': 29.40,
        '75': 31.50,
        '80': 33.60,
        '85': 35.70,
        '90': 37.80,
        '95': 39.90,
        '100': 42.00,
        '105': 44.10,
        '110': 46.20,
    },
    [SkillLevel.ADVANCED]: {
        '35': 15.75,
        '40': 17.20,
        '45': 18.90,
        '50': 20.50,
        '55': 21.45,
        '60': 22.80,
        '65': 24.70,
        '70': 26.60,
        '75': 28.50,
        '80': 30.40,
        '85': 32.30,
        '90': 34.20,
        '95': 36.10,
        '100': 38.00,
        '105': 39.90,
        '110': 41.80,
    },
    [SkillLevel.PRO]: {
        '35': 15.05,
        '40': 16.40,
        '45': 18.00,
        '50': 19.00,
        '55': 19.80,
        '60': 21.00,
        '65': 22.75,
        '70': 24.50,
        '75': 26.25,
        '80': 28.00,
        '85': 29.75,
        '90': 31.50,
        '95': 33.25,
        '100': 35.00,
        '105': 36.75,
        '110': 38.50,
    },
}

export const AGE_VOLUME_FACTOR = {
    31: 1,
    51: 1.08,
    61: 1.20,
    120: 1.30,
}

const SUP_STANDARD_SIZES = {
    '65': {
        'min': {'feet': 10, 'inches': 0},
        'max': {'feet': 10, 'inches': 6},
    },
    '75': {
        'min': {'feet': 10, 'inches': 0},
        'max': {'feet': 10, 'inches': 6},
    },
    '80': {
        'min': {'feet': 11, 'inches': 0},
        'max': {'feet': 11, 'inches': 6},
    },
    '90': {
        'min': {'feet': 11, 'inches': 0},
        'max': {'feet': 11, 'inches': 6},
    },
    '110': {
        'min': {'feet': 11, 'inches': 11},
        'max': {'feet': 12, 'inches': 0},
    },
}

const LONGBOARD_STANDARD_SIZES = {
    '65': {
        'min': {'feet': 9, 'inches': 0},
        'max': {'feet': 9, 'inches': 2},
    },
    '75': {
        'min': {'feet': 9, 'inches': 0},
        'max': {'feet': 9, 'inches': 2},
    },
    '80': {
        'min': {'feet': 9, 'inches': 4},
        'max': {'feet': 9, 'inches': 6},
    },
    '90': {
        'min': {'feet': 9, 'inches': 4},
        'max': {'feet': 9, 'inches': 6},
    },
    '110': {
        'min': {'feet': 10, 'inches': 0},
    },
}

const FUNBOARD_MALIBU_STANDARD_SIZES = {
    '65': {
        'min': {'feet': 7, 'inches': 0},
        'max': {'feet': 7, 'inches': 2},
    },
    '75': {
        'min': {'feet': 7, 'inches': 2},
        'max': {'feet': 7, 'inches': 4},
    },
    '80': {
        'min': {'feet': 7, 'inches': 6},
        'max': {'feet': 7, 'inches': 6},
    },
    '90': {
        'min': {'feet': 7, 'inches': 7},
        'max': {'feet': 7, 'inches': 7},
    },
    '110': {
        'min': {'feet': 7, 'inches': 8},
        'max': {'feet': 7, 'inches': 8},
    },
}

const SHORTBOARD_STANDARD_SIZES = {
    '65': {
        'min': {'feet': 6, 'inches': 0},
        'max': {'feet': 6, 'inches': 4},
    },
    '75': {
        'min': {'feet': 6, 'inches': 2},
        'max': {'feet': 6, 'inches': 6},
    },
    '80': {
        'min': {'feet': 6, 'inches': 4},
        'max': {'feet': 6, 'inches': 8},
    },
    '90': {
        'min': {'feet': 6, 'inches': 8},
        'max': {'feet': 7, 'inches': 2},
    },
    '110': {
        'min': {'feet': 7, 'inches': 2},
    },
}

const SHORTBOARD_ADVANCED_SIZES = {
    '65': {
        'min': {'feet': 5, 'inches': 5},
        'max': {'feet': 5, 'inches': 10},
    },
    '75': {
        'min': {'feet': 5, 'inches': 7},
        'max': {'feet': 6, 'inches': 1},
    },
    '80': {
        'min': {'feet': 5, 'inches': 10},
        'max': {'feet': 6, 'inches': 3},
    },
    '90': {
        'min': {'feet': 6, 'inches': 0},
        'max': {'feet': 6, 'inches': 5},
    },
    '110': {
        'min': {'feet': 6, 'inches': 2},
    },
}

const FISH_STANDARD_SIZES = {
    '65': {
        'min': {'feet': 5, 'inches': 10},
        'max': {'feet': 6, 'inches': 2},
    },
    '75': {
        'min': {'feet': 5, 'inches': 10},
        'max': {'feet': 6, 'inches': 2},
    },
    '80': {
        'min': {'feet': 6, 'inches': 4},
        'max': {'feet': 6, 'inches': 7},
    },
    '90': {
        'min': {'feet': 6, 'inches': 8},
        'max': {'feet': 7, 'inches': 2},
    },
    '110': {
        'min': {'feet': 7, 'inches': 6},
        'max': {'feet': 8, 'inches': 0},
    },
}

const FISH_ADVANCED_SIZES = {
    '65': {
        'min': {'feet': 5, 'inches': 8},
        'max': {'feet': 6, 'inches': 2},
    },
    '75': {
        'min': {'feet': 5, 'inches': 9},
        'max': {'feet': 6, 'inches': 5},
    },
    '80': {
        'min': {'feet': 6, 'inches': 0},
        'max': {'feet': 6, 'inches': 7},
    },
    '90': {
        'min': {'feet': 6, 'inches': 3},
        'max': {'feet': 6, 'inches': 8},
    },
    '110': {
        'min': {'feet': 6, 'inches': 5},
    },
}

const EGG_ADVANCED_AND_PRO_SIZES = {
    '65': {
        'max': {'feet': 6, 'inches': 6},
    },
    '75': {
        'max': {'feet': 6, 'inches': 6},
    },
    '80': {
        'min': {'feet': 6, 'inches': 6},
        'max': {'feet': 6, 'inches': 10},
    },
    '90': {
        'min': {'feet': 6, 'inches': 10},
        'max': {'feet': 7, 'inches': 2},
    },
    '110': {
        'min': {'feet': 6, 'inches': 10},
        'max': {'feet': 7, 'inches': 2},
    },
}

const GUN_STANDARD_SIZES = {
    '65': {
        'min': {'feet': 6, 'inches': 10},
        'max': {'feet': 7, 'inches': 4},
    },
    '75': {
        'min': {'feet': 7, 'inches': 2},
        'max': {'feet': 7, 'inches': 8},
    },
    '80': {
        'min': {'feet': 7, 'inches': 6},
        'max': {'feet': 8, 'inches': 0},
    },
    '90': {
        'min': {'feet': 7, 'inches': 10},
        'max': {'feet': 8, 'inches': 4},
    },
    '110': {
        'min': {'feet': 7, 'inches': 10},
        'max': {'feet': 8, 'inches': 4},
    },
}

type ShapeLengthFeetConversionTable = {
    [key in ShapeType]: {
        [key in SkillLevel]: {
            [weight: string]: {
                min?: { feet: number, inches: number }
                max?: { feet: number, inches: number }
            }
        }
    }
}

// The length calculation follows several charts from different websites:
// https://www.surfertoday.com/board-size-chart/surf
// https://www.wetsuitwearhouse.com/blog/surfboard-size-chart-guide/
// https://finbin.net/egg-surfboard///Egg_Surfboard_Size_Chart
// https://ibaworldtour.com/what-size-gun-surfboard-do-i-need/
export const SHAPE_LEGTH_FEET_BASED_ON_SURFER_WEIGHT: ShapeLengthFeetConversionTable = {
    [ShapeType.SUP]: {
        [SkillLevel.BEGINNER]: {
            '65': {
                'min': {'feet': 10, 'inches': 0},
                'max': {'feet': 10, 'inches': 8},
            },
            '75': {
                'min': {'feet': 10, 'inches': 0},
                'max': {'feet': 10, 'inches': 8},
            },
            '80': {
                'min': {'feet': 11, 'inches': 3},
                'max': {'feet': 12, 'inches': 0},
            },
            '90': {
                'min': {'feet': 11, 'inches': 8},
                'max': {'feet': 12, 'inches': 0},
            },
            '110': {
                'min': {'feet': 11, 'inches': 11},
                'max': {'feet': 12, 'inches': 0},
            },
        },
        [SkillLevel.INTERMEDIATE]: SUP_STANDARD_SIZES,
        [SkillLevel.INTERMEDIATE_ADVANCED]: SUP_STANDARD_SIZES,
        [SkillLevel.ADVANCED]: SUP_STANDARD_SIZES,
        [SkillLevel.PRO]: SUP_STANDARD_SIZES,
    },
    [ShapeType.LONGBOARD]: {
        [SkillLevel.BEGINNER]: {
            '65': {
                'min': {'feet': 9, 'inches': 2},
                'max': {'feet': 9, 'inches': 4},
            },
            '75': {
                'min': {'feet': 9, 'inches': 4},
                'max': {'feet': 9, 'inches': 6},
            },
            '80': {
                'min': {'feet': 9, 'inches': 6},
                'max': {'feet': 9, 'inches': 8},
            },
            '90': {
                'min': {'feet': 9, 'inches': 8},
                'max': {'feet': 10, 'inches': 0},
            },
            '110': {
                'min': {'feet': 10, 'inches': 0},
            },
        },
        [SkillLevel.INTERMEDIATE]: LONGBOARD_STANDARD_SIZES,
        [SkillLevel.INTERMEDIATE_ADVANCED]: LONGBOARD_STANDARD_SIZES,
        [SkillLevel.ADVANCED]: LONGBOARD_STANDARD_SIZES,
        [SkillLevel.PRO]: LONGBOARD_STANDARD_SIZES,
    },
    [ShapeType.FUNBOARD_MALIBU]: {
        [SkillLevel.BEGINNER]: {
            '65': {
                'min': {'feet': 7, 'inches': 2},
                'max': {'feet': 7, 'inches': 4},
            },
            '75': {
                'min': {'feet': 7, 'inches': 4},
                'max': {'feet': 7, 'inches': 6},
            },
            '80': {
                'min': {'feet': 7, 'inches': 6},
                'max': {'feet': 7, 'inches': 8},
            },
            '90': {
                'min': {'feet': 7, 'inches': 8},
                'max': {'feet': 7, 'inches': 8},
            },
            '110': {
                'min': {'feet': 7, 'inches': 8},
            },
        },
        [SkillLevel.INTERMEDIATE]: FUNBOARD_MALIBU_STANDARD_SIZES,
        [SkillLevel.INTERMEDIATE_ADVANCED]: FUNBOARD_MALIBU_STANDARD_SIZES,
        [SkillLevel.ADVANCED]: FUNBOARD_MALIBU_STANDARD_SIZES,
        [SkillLevel.PRO]: FUNBOARD_MALIBU_STANDARD_SIZES,
    },
    [ShapeType.SHORTBOARD]: {
        [SkillLevel.BEGINNER]: {
            '65': {
                'min': {'feet': 6, 'inches': 2},
                'max': {'feet': 6, 'inches': 4},
            },
            '75': {
                'min': {'feet': 6, 'inches': 4},
                'max': {'feet': 6, 'inches': 8},
            },
            '80': {
                'min': {'feet': 6, 'inches': 6},
                'max': {'feet': 6, 'inches': 10},
            },
            '90': {
                'min': {'feet': 6, 'inches': 10},
                'max': {'feet': 7, 'inches': 4},
            },
            '110': {
                'min': {'feet': 7, 'inches': 4},
            },
        },
        [SkillLevel.INTERMEDIATE]: SHORTBOARD_STANDARD_SIZES,
        [SkillLevel.INTERMEDIATE_ADVANCED]: SHORTBOARD_STANDARD_SIZES,
        [SkillLevel.ADVANCED]: SHORTBOARD_ADVANCED_SIZES,
        [SkillLevel.PRO]: SHORTBOARD_ADVANCED_SIZES,
    },
    [ShapeType.FISH]: {
        [SkillLevel.BEGINNER]: {
            '65': {
                'min': {'feet': 6, 'inches': 1},
                'max': {'feet': 6, 'inches': 4},
            },
            '75': {
                'min': {'feet': 6, 'inches': 3},
                'max': {'feet': 6, 'inches': 8},
            },
            '80': {
                'min': {'feet': 6, 'inches': 5},
                'max': {'feet': 6, 'inches': 10},
            },
            '90': {
                'min': {'feet': 6, 'inches': 9},
                'max': {'feet': 7, 'inches': 4},
            },
            '110': {
                'min': {'feet': 7, 'inches': 8},
            },
        },
        [SkillLevel.INTERMEDIATE]: FISH_STANDARD_SIZES,
        [SkillLevel.INTERMEDIATE_ADVANCED]: FISH_STANDARD_SIZES,
        [SkillLevel.ADVANCED]: FISH_ADVANCED_SIZES,
        [SkillLevel.PRO]: FISH_ADVANCED_SIZES,
    },
    [ShapeType.EGG]: {
        [SkillLevel.BEGINNER]: {
            '65': {
                'min': {'feet': 6, 'inches': 10},
                'max': {'feet': 6, 'inches': 10},
            },
            '75': {
                'min': {'feet': 6, 'inches': 10},
                'max': {'feet': 6, 'inches': 10},
            },
            '80': {
                'min': {'feet': 7, 'inches': 2},
                'max': {'feet': 7, 'inches': 2},
            },
            '90': {
                'min': {'feet': 7, 'inches': 2},
            },
            '110': {
                'min': {'feet': 7, 'inches': 2},
            },
        },
        [SkillLevel.INTERMEDIATE]: {
            '65': {
                'min': {'feet': 6, 'inches': 6},
                'max': {'feet': 7, 'inches': 2},
            },
            '75': {
                'min': {'feet': 6, 'inches': 6},
                'max': {'feet': 7, 'inches': 2},
            },
            '80': {
                'min': {'feet': 6, 'inches': 10},
                'max': {'feet': 7, 'inches': 2},
            },
            '90': {
                'min': {'feet': 6, 'inches': 10},
                'max': {'feet': 7, 'inches': 2},
            },
            '110': {
                'min': {'feet': 7, 'inches': 2},
            },
        },
        [SkillLevel.INTERMEDIATE_ADVANCED]: {
            '65': {
                'min': {'feet': 6, 'inches': 6},
                'max': {'feet': 6, 'inches': 10},
            },
            '75': {
                'min': {'feet': 6, 'inches': 6},
                'max': {'feet': 6, 'inches': 10},
            },
            '80': {
                'min': {'feet': 6, 'inches': 6},
                'max': {'feet': 7, 'inches': 2},
            },
            '90': {
                'min': {'feet': 6, 'inches': 10},
                'max': {'feet': 7, 'inches': 2},
            },
            '110': {
                'min': {'feet': 7, 'inches': 2},
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
}

export const FITNESS_VOLUME_FACTOR = {
    [FitnessLevel.POOR]: 1.20,
    [FitnessLevel.AVERAGE]: 1.10,
    [FitnessLevel.GOOD]: 1.05,
    [FitnessLevel.EXCELLENT]: 1,
}