import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Stack,
  Text,
  Flex,
  Button,
  useColorMode,
  List,
  ListIcon,
  ListItem,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";

export default function PaymentPage() {
  const { colorMode } = useColorMode();

  return (
    <Box p={8}>
      <Flex direction="column" align="center" justify="center">
        <Stack spacing={4} shouldWrapChildren direction="row">
          <Box
            maxW="330px"
            w="full"
            bg={useColorModeValue("white", "gray.800")}
            boxShadow="2xl"
            rounded="md"
            overflow="hidden"
          >
            <Stack
              textAlign="center"
              p={6}
              color={useColorModeValue("gray.800", "white")}
              align="center"
            >
              <Text
                fontSize="sm"
                fontWeight={500}
                p={2}
                px={3}
                bg={useColorModeValue("green.50", "green.400")}
                color={useColorModeValue("green.500", "green.50")}
                rounded="full"
              >
                1 month
              </Text>
              <Stack direction="row" align="center" justify="center">
                <Text fontSize="3xl">$</Text>
                <Text fontSize="6xl" fontWeight={800}>
                  19.99
                </Text>
                <Text color="gray.500">/month</Text>
              </Stack>
            </Stack>

            <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  Billed Every month
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  14-day money back guarantee
                </ListItem>
              </List>

              <Button
                mt={10}
                w="full"
                bg="green.400"
                color="white"
                rounded="xl"
                boxShadow="0 5px 20px 0px rgb(72 187 120 / 43%)"
                _hover={{
                  bg: "green.500",
                }}
                _focus={{
                  bg: "green.500",
                }}
              >
                Start your Free trial
              </Button>
            </Box>
          </Box>
          <Box
            maxW="330px"
            w="full"
            bg={useColorModeValue("white", "gray.800")}
            rounded="md"
            overflow="hidden"
            position="relative"
            boxShadow={useColorModeValue(
              "0 5px 20px 0px rgb(72 187 120 / 43%)",
              "0px 5px 20px 0px rgba(94, 117, 160, 0.43)"
            )}
          >
            <Badge
              position="absolute"
              top={2}
              right={2}
              fontSize="xs"
              fontWeight={700}
              bg="green.400"
              p={2}
              rounded="full"
              color="white"
              boxShadow="0 5px 20px 0px rgb(72 187 120 / 43%)"
            >
              Popular
            </Badge>

            <Stack
              textAlign="center"
              p={6}
              color={useColorModeValue("gray.800", "white")}
              align="center"
            >
              <Text
                fontSize="sm"
                fontWeight={500}
                p={2}
                px={3}
                bg={useColorModeValue("green.50", "green.400")}
                color={useColorModeValue("green.500", "green.50")}
                rounded="full"
              >
                12 months
              </Text>
              <Stack direction="row" align="center" justify="center">
                <Text fontSize="3xl">$</Text>
                <Text fontSize="6xl" fontWeight={800}>
                  9.99
                </Text>
                <Text color="gray.500">/month</Text>
              </Stack>
            </Stack>

            <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  Billed Every 12 months
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  14-day money back guarantee
                </ListItem>
              </List>

              <Button
                mt={10}
                w="full"
                bg="green.400"
                color="white"
                rounded="xl"
                boxShadow="0 5px 20px 0px rgb(72 187 120 / 43%)"
                _hover={{
                  bg: "green.500",
                }}
                _focus={{
                  bg: "green.500",
                }}
              >
                Start your Free trial
              </Button>
            </Box>
          </Box>
          <Box
            maxW="330px"
            w="full"
            bg={useColorModeValue("white", "gray.800")}
            boxShadow="2xl"
            rounded="md"
            overflow="hidden"
          >
            <Stack
              textAlign="center"
              p={6}
              color={useColorModeValue("gray.800", "white")}
              align="center"
            >
              <Text
                fontSize="sm"
                fontWeight={500}
                bg={useColorModeValue("green.50", "green.400")}
                color={useColorModeValue("green.500", "green.50")}
                p={2}
                px={3}
                rounded="full"
              >
                6 months
              </Text>
              <Stack direction="row" align="center" justify="center">
                <Text fontSize="3xl">$</Text>
                <Text fontSize="6xl" fontWeight={800}>
                  16.99
                </Text>
                <Text color="gray.500">/month</Text>
              </Stack>
            </Stack>

            <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  Billed Every 6 months
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  14-day money back guarantee
                </ListItem>
              </List>

              <Button
                mt={10}
                w="full"
                bg="green.400"
                color="white"
                rounded="xl"
                boxShadow="0 5px 20px 0px rgb(72 187 120 / 43%)"
                _hover={{
                  bg: "green.500",
                }}
                _focus={{
                  bg: "green.500",
                }}
              >
                Start your Free trial
              </Button>
            </Box>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
