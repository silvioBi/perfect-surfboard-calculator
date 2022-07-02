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
            <Wrap padding='12' spacing='8' justify='center'>
                {surfboards.map((surfboard, i) => <SurfboardDetail key={i} surfboard={surfboard}/>)}
            </Wrap>
            <Wrap paddingBottom='8' justify='center'>
                <Button onClick={goBack}>
                    ⏪ Go back
                </Button>
            </Wrap>
        </>
    )
}

export default SurfboardsExpo