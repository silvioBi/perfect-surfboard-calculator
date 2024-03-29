import React, { useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Heading,
  InputGroup,
  InputRightAddon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  VStack,
} from "@chakra-ui/react";
import { Age, FitnessLevel, SkillLevel } from "../../types/types";
import TouchFriendlyTooltip from "../touchFriendlyTooltip/TouchFriendlyTooltip";

type Props = {
  handleChange: (
    age: Age,
    height: number,
    weight: number,
    fitnessLevel: FitnessLevel,
    skillLevel: SkillLevel,
    waveHeight: number
  ) => void;
};

const FITNESS_LEVEL_TOOLTIP_TEXT = (
  <div>
    <ul>
      <li>
        <b>poor:</b> surfing 1 times per week or other training 1 times per week
      </li>
      <li>
        <b>average:</b> surfing 2 times per week or other training 2 times per
        week
      </li>
      <li>
        <b>good:</b> surfing 3 times per week or other training 3 times per week
      </li>
      <li>
        <b>excellent:</b> surfing 4 times per week or other training 4 times per
        week
      </li>
    </ul>
  </div>
);

const SKILL_LEVEL_TOOLTIP_TEXT = (
  <div>
    <ul>
      <li>
        <b>beginner:</b> first timers, learning to stand, focusing on their wave
        count
      </li>
      <li>
        <b>intermediate:</b> riders are progressive surfers capable of trimming
        the wave face. Developing their movements whilst completing half of the
        attempted moves. Catching roughly half or slightly more than half of
        your attempted waves
      </li>
      <li>
        <b>intermediate/advanced:</b> able to link moves whilst having
        confidence and understanding of each condition. Able to complete above
        average at 60-70% completion of each manoeuvre. catching 7/10 attempted
        waves
      </li>
      <li>
        <b>advanced:</b> able to complete complex manoeuvres with confidence,
        control, and consistency. Whilst completing 70-80% of attempted
        manoeuvres, and catching 8 out of 10 attempted waves
      </li>
      <li>
        <b>pro:</b> you’re a borderline pro, a strong, fit rider capable of
        making critical manoeuvres with total control, power, and speed.
        Averaging an 80 - 90% completion rate and catch 9 out of 10 waves you
        paddle for
      </li>
    </ul>
  </div>
);

const CalculatorForm = ({ handleChange }: Props) => {
  const {
    age: ageLocalStorage,
    height: heightLocalStorage,
    weight: weightLocalStorage,
    fitnessLevel: fitnessLevelLocalStorage,
    skillLevel: skillLevelLocalStorage,
    waveHeight: waveHeightLocalStorage,
  } = JSON.parse(
    window.localStorage.getItem("SURFBOARD_CALCULATOR_STATE") ?? "{}"
  ) ?? {};

  const [age, setAge] = React.useState<Age>(
    ageLocalStorage ?? Age.FROM_TWENTY_TILL_TWENTYNINE
  );

  const [height, setHeight] = React.useState<number>(heightLocalStorage ?? 180);
  const [weight, setWeight] = React.useState<number>(weightLocalStorage ?? 70);

  const [fitnessLevel, setFitnessLevel] = React.useState<FitnessLevel>(
    fitnessLevelLocalStorage ?? FitnessLevel.GOOD
  );
  const [skillLevel, setSkillLevel] = React.useState<SkillLevel>(
    skillLevelLocalStorage ?? SkillLevel.BEGINNER
  );
  const [waveHeight, setWaveHeight] = React.useState<number>(
    waveHeightLocalStorage ?? 100
  );

  useEffect(() => {
    window.localStorage.setItem(
      "SURFBOARD_CALCULATOR_STATE",
      JSON.stringify({
        age,
        height,
        weight,
        fitnessLevel,
        skillLevel,
        waveHeight,
      })
    );
    handleChange(age, height, weight, fitnessLevel, skillLevel, waveHeight);
  }, [age, height, weight, fitnessLevel, skillLevel, waveHeight]);

  return (
    <>
      <Heading>🌊 Surfboard calculator</Heading>
      <VStack padding={4}>
        <FormControl>
          <FormLabel htmlFor="age">👶🏼 How old are you?</FormLabel>
          <Select
            id="age"
            value={age}
            onChange={(event) => setAge(event.target.value as Age)}
          >
            <option value={Age.NINETEEN_OR_BELOW}>
              {Age.NINETEEN_OR_BELOW}
            </option>
            <option value={Age.FROM_TWENTY_TILL_TWENTYNINE}>
              {Age.FROM_TWENTY_TILL_TWENTYNINE}
            </option>
            <option value={Age.FROM_THIRTY_TILL_FORTYNINE}>
              {Age.FROM_THIRTY_TILL_FORTYNINE}
            </option>
            <option value={Age.FROM_FIFTY_TILL_FIFTYNINE}>
              {Age.FROM_FIFTY_TILL_FIFTYNINE}
            </option>
            <option value={Age.ABOVE_SIXTY}>{Age.ABOVE_SIXTY}</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="height">📏 How tall are you?</FormLabel>
          <InputGroup>
            <NumberInput
              size="noBorder"
              onChange={(valueString) =>
                valueString ? setHeight(parseInt(valueString)) : null
              }
              value={height}
              max={300}
              min={100}
            >
              <NumberInputField id="height" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <InputRightAddon children="cm" />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="weight">🐋 What's your weight?</FormLabel>
          <InputGroup>
            <NumberInput
              size="noBorder"
              onChange={(valueString) =>
                valueString ? setWeight(parseInt(valueString)) : null
              }
              value={weight}
              max={150}
              min={30}
            >
              <NumberInputField id="weight" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <InputRightAddon children="kg" />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="fitnessLevel">
            🏋🏼 What's your fitness level?
            <TouchFriendlyTooltip
              fontSize="xs"
              label={FITNESS_LEVEL_TOOLTIP_TEXT}
              aria-label="A tooltip"
            >
              &nbsp;ℹ️
            </TouchFriendlyTooltip>
          </FormLabel>
          <Select
            id="fitnessLevel"
            value={fitnessLevel}
            onChange={(event) =>
              setFitnessLevel(event.target.value as FitnessLevel)
            }
          >
            <option value={FitnessLevel.POOR}>{FitnessLevel.POOR}</option>
            <option value={FitnessLevel.AVERAGE}>{FitnessLevel.AVERAGE}</option>
            <option value={FitnessLevel.GOOD}>{FitnessLevel.GOOD}</option>
            <option value={FitnessLevel.EXCELLENT}>
              {FitnessLevel.EXCELLENT}
            </option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="skillLevel">
            🏄🏼‍ How good are you at surfing?
            <TouchFriendlyTooltip
              placement="top"
              fontSize="xs"
              label={SKILL_LEVEL_TOOLTIP_TEXT}
              aria-label="A tooltip"
            >
              &nbsp;ℹ️
            </TouchFriendlyTooltip>
          </FormLabel>
          <Select
            id="skillLevel"
            value={skillLevel}
            onChange={(event) =>
              setSkillLevel(event.target.value as SkillLevel)
            }
          >
            <option value={SkillLevel.BEGINNER}>{SkillLevel.BEGINNER}</option>
            <option value={SkillLevel.INTERMEDIATE}>
              {SkillLevel.INTERMEDIATE}
            </option>
            <option value={SkillLevel.INTERMEDIATE_ADVANCED}>
              {SkillLevel.INTERMEDIATE_ADVANCED}
            </option>
            <option value={SkillLevel.ADVANCED}>{SkillLevel.ADVANCED}</option>
            <option value={SkillLevel.PRO}>{SkillLevel.PRO}</option>
          </Select>
        </FormControl>

        <FormControl pb={4}>
          <FormLabel htmlFor="height">
            🌊 How big are the waves you will ride?
          </FormLabel>
          <InputGroup>
            <NumberInput
              size="noBorder"
              onChange={(valueString) =>
                valueString ? setWaveHeight(parseInt(valueString)) : null
              }
              value={waveHeight}
              max={300}
            >
              <NumberInputField id="height" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <InputRightAddon children="cm" />
          </InputGroup>
        </FormControl>
      </VStack>
    </>
  );
};

export default CalculatorForm;
