import React, { useState } from "react";
import { Badge, Button, Text, Flex, VStack, Tooltip } from "@chakra-ui/react";
import CalculatorForm from "../calculatorForm/CalculatorForm";
import { Age, FitnessLevel, SkillLevel, Surfboard } from "../../types/types";
import { calculatePerfectBoards } from "../../helpers/boardCalculator";
import SurfboardsExpo from "../surfboardsExpo/SurfboardsExpo";
import Footer from "../footer/Footer";

const showSurfboardsButtonText =
  "Unfortunately we could not find any surfboard matching your criteria, change the values and try again and if you think is an error please drop me a email: biasiol.silvio@gmail.com";

function App() {
  const [surfboards, setSurfboards] = useState<Surfboard[]>([]);
  const [expoVisible, setExpoVisible] = useState<boolean>(false);

  const handleChange = (
    age: Age,
    height: number,
    weight: number,
    fitnessLevel: FitnessLevel,
    skillLevel: SkillLevel,
    waveHeight: number
  ) => {
    setSurfboards(
      calculatePerfectBoards(
        {
          age,
          height,
          weight,
          fitnessLevel,
          skillLevel,
        },
        waveHeight
      )
    );
  };
  return (
    <Flex
      justifyContent="space-between"
      flexDirection="column"
      wrap="nowrap"
      height="100vh"
    >
      <VStack padding={4}>
        {!expoVisible && <CalculatorForm handleChange={handleChange} />}
        {!expoVisible && (
          <Tooltip
            placement="top"
            shouldWrapChildren
            label={showSurfboardsButtonText}
            isDisabled={surfboards.length > 0}
          >
            <Button
              disabled={surfboards.length === 0}
              onClick={() => setExpoVisible(true)}
            >
              <Badge colorScheme="purple">{surfboards.length}</Badge>
              <Text pl="2">surfboards compatible with you</Text>
            </Button>
          </Tooltip>
        )}
        {expoVisible && (
          <SurfboardsExpo
            surfboards={surfboards}
            goBack={() => setExpoVisible(false)}
          />
        )}
      </VStack>
      <Footer />
    </Flex>
  );
}

export default App;
