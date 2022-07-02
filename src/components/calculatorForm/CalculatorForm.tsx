import React, {useEffect} from 'react';
import {
    Button,
    FormControl,
    FormLabel, Heading, NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Select,
    VStack
} from "@chakra-ui/react";
import {Age, FitnessLevel, SkillLevel, Surfboard} from "../../types/types";

type Props = {
    handleChange: (
        age: Age,
        height: number,
        weight: number,
        fitnessLevel: FitnessLevel,
        skillLevel: SkillLevel,
        waveHeight: number,
    ) => void
}

export default ({handleChange}: Props) => {
    const {
        age: ageLocalStorage,
        height: heightLocalStorage,
        weight: weightLocalStorage,
        fitnessLevel: fitnessLevelLocalStorage,
        skillLevel: skillLevelLocalStorage,
        waveHeight: waveHeightLocalStorage,
    } = JSON.parse(window.localStorage.getItem('SURFBOARD_CALCULATOR_STATE') ?? '') ?? {};
    console.log(JSON.parse(window.localStorage.getItem('SURFBOARD_CALCULATOR_STATE') ?? ''))


    const [age, setAge] = React.useState<Age>(ageLocalStorage ?? Age.FROM_TWENTY_TILL_TWENTYNINE)

    const formatHeight = (height: number) => height + ' cm'
    const parseHeightString = (heightString: string) => parseInt(heightString.replace(/^\cm/, ''))
    const [height, setHeight] = React.useState<number>(heightLocalStorage ?? 180)

    const formatWeight = (weight: number) => weight + ' kg'
    const parseWeightString = (weightString: string) => parseInt(weightString.replace(/^\kg/, ''))
    const [weight, setWeight] = React.useState<number>(weightLocalStorage ?? 70)

    const [fitnessLevel, setFitnessLevel] = React.useState<FitnessLevel>(fitnessLevelLocalStorage ?? FitnessLevel.GOOD)
    const [skillLevel, setSkillLevel] = React.useState<SkillLevel>(skillLevelLocalStorage ?? SkillLevel.BEGINNER)
    const [waveHeight, setWaveHeight] = React.useState<number>(waveHeightLocalStorage ?? 100)

    useEffect(() => {
        window.localStorage.setItem('SURFBOARD_CALCULATOR_STATE', JSON.stringify({
            age,
            height,
            weight,
            fitnessLevel,
            skillLevel,
            waveHeight,
        }));
        handleChange(
            age,
            height,
            weight,
            fitnessLevel,
            skillLevel,
            waveHeight,
        )
    }, [age, height, weight, fitnessLevel, skillLevel, waveHeight]);

    return (
        <>
            <Heading>🌊 Surfboard calculator</Heading>
            <VStack padding={4}>
                <FormControl>
                    <FormLabel htmlFor='age'>👶🏼 How old are you?</FormLabel>
                    <Select id='age' value={age} onChange={(event) => setAge(event.target.value as Age)}>
                        <option value={Age.NINETEEN_OR_BELOW}>{Age.NINETEEN_OR_BELOW}</option>
                        <option value={Age.FROM_TWENTY_TILL_TWENTYNINE}>{Age.FROM_TWENTY_TILL_TWENTYNINE}</option>
                        <option value={Age.FROM_THIRTY_TILL_FORTYNINE}>{Age.FROM_THIRTY_TILL_FORTYNINE}</option>
                        <option value={Age.FROM_FIFTY_TILL_FIFTYNINE}>{Age.FROM_FIFTY_TILL_FIFTYNINE}</option>
                        <option value={Age.ABOVE_SIXTY}>{Age.ABOVE_SIXTY}</option>
                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor='height'>📏 How tall are you (cm)?</FormLabel>
                    <NumberInput
                        onChange={(valueString) => valueString ? setHeight(parseHeightString(valueString)) : null}
                        value={formatHeight(height)}
                        max={300}
                    >
                        <NumberInputField id='height'/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor='weight'>🐋 What's your weight (kg)?</FormLabel>
                    <NumberInput
                        onChange={(valueString) => valueString ? setWeight(parseWeightString(valueString)) : null}
                        value={formatWeight(weight)}
                        max={150}
                    >
                        <NumberInputField id='weight'/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor='fitnessLevel'>🏋🏼 What's your fitness level?</FormLabel>
                    <Select id='fitnessLevel' value={fitnessLevel}
                            onChange={(event) => setFitnessLevel(event.target.value as FitnessLevel)}>
                        <option value={FitnessLevel.POOR}>{FitnessLevel.POOR}</option>
                        <option value={FitnessLevel.AVERAGE}>{FitnessLevel.AVERAGE}</option>
                        <option value={FitnessLevel.GOOD}>{FitnessLevel.GOOD}</option>
                        <option value={FitnessLevel.EXCELLENT}>{FitnessLevel.EXCELLENT}</option>
                    </Select>
                </FormControl>


                <FormControl>
                    <FormLabel htmlFor='skillLevel'>🏄🏼‍ How good are you at surfing?</FormLabel>
                    <Select id='skillLevel' value={skillLevel}
                            onChange={(event) => setSkillLevel(event.target.value as SkillLevel)}>
                        <option value={SkillLevel.BEGINNER}>{SkillLevel.BEGINNER}</option>
                        <option value={SkillLevel.INTERMEDIATE}>{SkillLevel.INTERMEDIATE}</option>
                        <option value={SkillLevel.INTERMEDIATE_ADVANCED}>{SkillLevel.INTERMEDIATE_ADVANCED}</option>
                        <option value={SkillLevel.ADVANCED}>{SkillLevel.ADVANCED}</option>
                        <option value={SkillLevel.PRO}>{SkillLevel.PRO}</option>
                    </Select>
                </FormControl>

                <FormControl pb={4}>
                    <FormLabel htmlFor='height'>🌊 How big are the waves you will ride (cm)?</FormLabel>
                    <NumberInput
                        onChange={(valueString) => valueString ? setWaveHeight(parseHeightString(valueString)) : null}
                        value={formatHeight(waveHeight)}
                        max={300}
                    >
                        <NumberInputField id='height'/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>
            </VStack>
        </>
    );
}