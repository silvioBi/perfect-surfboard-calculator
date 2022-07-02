import React, {useState} from 'react';
import {Badge, Button, Text, Flex, Heading, VStack} from '@chakra-ui/react';
import CalculatorForm from "../calculatorForm/CalculatorForm";
import {Age, FitnessLevel, SkillLevel, Surfboard} from "../../types/types";
import {calculatePerfectBoards} from "../../helpers/boardCalculator";
import SurfboardsExpo from "../surfboardsExpo/SurfboardsExpo";
import Footer from "../footer/Footer";

function App() {
    const [surfboards, setSurfboards] = useState<Surfboard[]>([]);
    const [expoVisible, setExpoVisible] = useState<boolean>(false);

    const handleChange = (
        age: Age,
        height: number,
        weight: number,
        fitnessLevel: FitnessLevel,
        skillLevel: SkillLevel,
        waveHeight: number,
    ) => {
        setSurfboards(calculatePerfectBoards({
                age, height, weight, fitnessLevel, skillLevel
            }, waveHeight
        ));
    }
    return (
        <Flex
            justifyContent='space-between'
            flexDirection='column'
            wrap='nowrap'
            height='100vh'
        >
            <VStack padding={2}>
                {!expoVisible &&
                    <CalculatorForm handleChange={handleChange}/>
                }
                {!expoVisible &&
                    <Button
                        disabled={surfboards.length === 0}
                        onClick={() => setExpoVisible(true)}
                    >
                        <Badge colorScheme='purple'>{surfboards.length}</Badge>
                        <Text pl='2'>surfboards compatible with you</Text>
                    </Button>
                }
                {expoVisible &&
                    <SurfboardsExpo
                        surfboards={surfboards}
                        goBack={() => setExpoVisible(false)}
                    />
                }
            </VStack>
            <Footer/>
        </Flex>
    );
}

export default App;
