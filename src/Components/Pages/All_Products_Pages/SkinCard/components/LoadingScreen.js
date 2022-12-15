import { Box, Center, Flex, Spinner } from "@chakra-ui/react";

const LoadingScreen = () => {
    return (
            <Center>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            </Center>
    );
};

export default LoadingScreen;