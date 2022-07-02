import {Surfboard} from "../../types/types";
import {Box, Code, HStack, Image, Text} from "@chakra-ui/react";
import {getSurfboardDescription, getSurfboardImage} from "../../helpers/surfboardInfo";

interface Props {
    surfboard: Surfboard
}

const renderProperty = (name: string, value: any) => {
    return <HStack>
        <Text fontWeight='semibold' fontSize='small'>{name}</Text><Code>{value}</Code>
    </HStack>
}

export default ({surfboard}: Props) => {
    return (
        <Box maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image
                src={getSurfboardImage(surfboard.shapeType)}
                alt={surfboard.shapeType}
            />
            <Box
                m='2'
                fontWeight='semibold'
                as='h4'
                noOfLines={1}
            >
                {surfboard.shapeType[0].toUpperCase() + surfboard.shapeType.slice(1).toLowerCase()}
            </Box>
            <Box m='2'>
                {renderProperty('Volume (lt)', surfboard.volumeLiters)}
                {renderProperty('Length (ft)', surfboard.lengthFeet)}
                {renderProperty('Width (ft)', surfboard.widthFeet)}
                {renderProperty('Thickness (ft)', surfboard.thicknessFeet)}
                {renderProperty('Fins configuration', surfboard.finsConfiguration)}
            </Box>
            <Box m='2' color='gray.600' fontSize='sm'>
                {getSurfboardDescription(surfboard.shapeType)}
            </Box>
        </Box>
    )
}