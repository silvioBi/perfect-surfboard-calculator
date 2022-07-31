import { Surfboard } from "../../types/types";
import { Button, Center, Wrap } from "@chakra-ui/react";
import SurfboardDetail from "../surfboardDetail/SurfboardDetail";

type Props = {
  surfboards: Surfboard[];
  goBack: () => void;
};
const SurfboardsExpo = ({ surfboards, goBack }: Props) => {
  if (surfboards.length === 0) {
    return null;
  }
  return (
    <>
      <Center maxW="700" mt="8">
        Below you may find a list of boards that might be suitable for you.
        There are a lot of different shapes that you can use and I encorauge you
        to try different types, is always fun and you might find that something
        not matching with your style is actually pretty enjoyable!
      </Center>
      <Wrap padding="12" spacing="8" justify="center">
        {surfboards.map((surfboard, i) => (
          <SurfboardDetail key={i} surfboard={surfboard} />
        ))}
      </Wrap>
      <Wrap paddingBottom="8" justify="center">
        <Button onClick={goBack}>⏪ Go back</Button>
      </Wrap>
    </>
  );
};

export default SurfboardsExpo;
