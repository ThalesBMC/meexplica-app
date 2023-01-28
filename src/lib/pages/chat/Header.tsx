import { Flex, Avatar, AvatarBadge, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex w="100%">
      <Avatar
        size="lg"
        name="Dan Abrahmov"
        src="https://cdn.discordapp.com/attachments/1059669873199951933/1068631921166401706/IMG_9935.jpg"
      >
        <AvatarBadge boxSize="1.25em" bg="green.500" />
      </Avatar>
      <Flex flexDirection="column" mx="5" justify="center">
        <Text fontSize="lg" fontWeight="bold">
          Thales Brederodes
        </Text>
        <Text color="green.500">Online</Text>
      </Flex>
    </Flex>
  );
};

export default Header;
