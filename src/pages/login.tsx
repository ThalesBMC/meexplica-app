import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  useDisclosure,
  Image,
  Link,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

export default function LoginPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.50" p={10}>
      <Stack align="center" spacing={8}>
        <Image src="vercel.svg" w="100px" mx="auto" />
        <Text as="h1" fontSize="4xl" fontWeight="extrabold" textAlign="center">
          Welcome back!
        </Text>
        <Text as="h2" fontSize="xl" textAlign="center">
          Sign in to continue
        </Text>
        <FormControl as={Box} rounded="md" p={4} bg="white" w="100%" maxW="sm">
          <FormLabel fontWeight="medium" htmlFor="email">
            Email
          </FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            rounded="md"
            p={2}
            focusBorderColor="teal.500"
          />
          <FormLabel fontWeight="medium" mt={4} htmlFor="password">
            Password
          </FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            rounded="md"
            p={2}
            focusBorderColor="teal.500"
          />
          <Button
            rounded="md"
            bgColor="teal"
            color="white"
            mt={4}
            w="100%"
            onClick={onOpen}
          >
            Sign in
          </Button>
        </FormControl>
        <Link
          href="/forgot"
          fontSize="sm"
          color="teal.500"
          alignSelf="center"
          mt={6}
        >
          Forgot password?
        </Link>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Welcome!</ModalHeader>
          <ModalBody>You have successfully logged in.</ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
