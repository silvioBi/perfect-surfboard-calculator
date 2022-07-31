import {
  FinsConfiguration,
  ShapeType,
  Surfboard,
  Surfer,
} from "../types/types";
import {
  AGE_VOLUME_FACTOR,
  FITNESS_VOLUME_FACTOR,
  SHAPE_LEGTH_FEET_BASED_ON_SURFER_WEIGHT,
  SHAPE_TYPE_BASED_ON_WAVE_HEIGHT_CM,
  WEIGHT_VOLUME_LITERS_TABLE,
} from "../constants/constants";

const getSurferWeightAs5Multiple = (surfer: Surfer): number => {
  const weightAs5Multiple = surfer.weight + ((5 - surfer.weight) % 5);
  if (weightAs5Multiple < 35) return 35;
  if (weightAs5Multiple > 110) return 110;
  return weightAs5Multiple;
};
const getIdealSurfboardVolumeInLiters = (surfer: Surfer): number => {
  const weightAs5Multiple = getSurferWeightAs5Multiple(surfer);
  const baseVolume =
    WEIGHT_VOLUME_LITERS_TABLE[surfer.skillLevel][weightAs5Multiple.toString()];

  let ageFactor = 1;
  Object.entries(AGE_VOLUME_FACTOR).forEach(([ageLimit, factor]) => {
    if (surfer.age < ageLimit) ageFactor = factor;
  });
  const fitnessFactor = FITNESS_VOLUME_FACTOR[surfer.fitnessLevel];
  return parseFloat((baseVolume * ageFactor * fitnessFactor).toFixed(2));
};
const getIdealSurfboardShapesForSurfer = (
  surfer: Surfer,
  waveHeight: number
): ShapeType[] => {
  let shapesForWaveHeight =
    SHAPE_TYPE_BASED_ON_WAVE_HEIGHT_CM["30"][surfer.skillLevel]; // default
  Object.entries(SHAPE_TYPE_BASED_ON_WAVE_HEIGHT_CM).forEach(
    ([waveHeightForShape, shapes]) => {
      if (parseInt(waveHeightForShape) < waveHeight) {
        shapesForWaveHeight = shapes[surfer.skillLevel];
      }
    }
  );
  return shapesForWaveHeight;
};

const getIdealSurfboardLengthHumanReadable = (
  surfer: Surfer,
  shape: ShapeType
): string => {
  const weightAs5Multiple = getSurferWeightAs5Multiple(surfer);
  const ranges =
    SHAPE_LEGTH_FEET_BASED_ON_SURFER_WEIGHT[shape][surfer.skillLevel];
  let rangeForWeight = ranges["65"];
  Object.entries(ranges).forEach(([weightRange, range]) => {
    if (parseInt(weightRange) <= weightAs5Multiple) rangeForWeight = range;
  });
  const rmin = rangeForWeight?.min,
    rmax = rangeForWeight?.max;
  if (rmin && !rmax) return `+ ${rmin?.feet}" ${rmin?.inches}'`;
  if (!rmin && rmax) return `- ${rmax?.feet}" ${rmax?.inches}'`;
  if (rmin?.feet === rmax?.feet && rmin?.inches === rmax?.inches)
    return `${rmax?.feet}" ${rmax?.inches}'`;
  return `${rmin?.feet}" ${rmin?.inches}' - ${rmax?.feet}" ${rmax?.inches}'`;
};

const calculatePerfectBoards = (
  surfer: Surfer,
  waveHeight: number
): Surfboard[] => {
  const shapes = getIdealSurfboardShapesForSurfer(surfer, waveHeight);
  const surfboardVolume = getIdealSurfboardVolumeInLiters(surfer);

  const surfboards: Surfboard[] = [];
  shapes.forEach((shape) => {
    surfboards.push({
      volumeLiters: surfboardVolume,
      lengthFeet: getIdealSurfboardLengthHumanReadable(surfer, shape),
      widthFeet: null, // TODO
      thicknessFeet: null, // TODO
      finsConfiguration: FinsConfiguration.THRUSTER, // TODO
      shapeType: shape,
    });
  });
  return surfboards;
};

export { calculatePerfectBoards };
