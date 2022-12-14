//   satyaranjan is responsible

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  const { logout } = useAuth0();

  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <Flex
      justifyContent="space-between"
      px="10"
      bg="blue.400 "
      py="2"
      alignItems={"center"}
    >
      <Box>
        <input placeholder="Search Product" />
      </Box>
      <Box>
        <Flex justifyContent="space-between" alignItems={"center"}>
          <Flex justifyContent="space-between" alignItems={"center"}>
            <Box>
              <h2>Welcome !</h2>
              {isAuthenticated ? <h4 fontWeight="bold">{user.name}</h4> : ""}
            </Box>
            <Box ml="5">
              {isAuthenticated ? (
                <Box>
                  <Image
                    h="50"
                    mr="5"
                    borderRadius={50}
                    src={user.picture}
                    alt="name"
                  />{" "}
                </Box>
              ) : (
                ""
              )}
            </Box>
          </Flex>
          <Box>
            {isAuthenticated ? (
              <Button
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </Button>
            ) : (
              <Button onClick={() => loginWithRedirect()}>Log In</Button>
            )}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Login;
