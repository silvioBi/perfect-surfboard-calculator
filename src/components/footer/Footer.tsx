import {Flex, Link, Text} from "@chakra-ui/react";

export default () => {
    // TODO actually add the links
    return(
        <Flex bg='#303841' padding='2'>
            <Text fontSize='sm' color='#ffff'>
            This is an open source project <b>in active development</b> please take it with a grain of salt and don't rely solely on it for choosing your board, all the code is <Link textDecoration='underline' href='https://github.com/silvioBi/perfect-surfboard-calculator'> available on Github</Link>,
                if you spot any bug or have any suggestions or want to collaborate please <Link textDecoration='underline' href='mailto:biasiol.silvio@gmail.com'> reach me</Link>,
                also if you like what you see you can <Link textDecoration='underline' href='https://www.buymeacoffee.com/silvioBi'>support it with a donation</Link>
            </Text>
        </Flex>
    )
}