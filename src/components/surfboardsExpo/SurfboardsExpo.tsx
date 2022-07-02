import {Surfboard} from "../../types/types";
import {Button, Flex, Wrap} from "@chakra-ui/react";
import SurfboardDetail from "../surfboardDetail/SurfboardDetail";

type Props = {
    surfboards: Surfboard[];
    goBack: () => void;
}
const SurfboardsExpo = ({surfboards, goBack}: Props) => {
    if (surfboards.length === 0) {
        return null;
    }
    return (
        <>
            <Button left='6' marginTop='2' position='absolute' onClick={goBack}>
                Go back
            </Button>
            <Wrap paddingTop='16' paddingBottom='16' spacing='8' justify='center'>
                {surfboards.map((surfboard, i) => <SurfboardDetail key={i} surfboard={surfboard}/>)}
            </Wrap>
        </>
    )
}

export default SurfboardsExpo