import { Avatar, Flex, Text } from "@chakra-ui/react";
import type React from "react";
import { useEffect, useRef } from "react";

interface Message {
  from: string;
  text: string;
}

interface Props {
  messages: Message[];
}
const AlwaysScrollToBottom: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView();
    }
  });
  return <div ref={elementRef} />;
};

const Messages: React.FC<Props> = ({ messages }) => {
  return (
    <Flex w="100%" h="80%" overflowY="scroll" flexDirection="column" p="3">
      {messages.map((item, index) => {
        if (item.from === "me") {
          return (
            <Flex key={+index} w="100%" justify="flex-end">
              <Flex
                bg="black"
                color="white"
                minW="100px"
                maxW="350px"
                my="1"
                p="3"
              >
                <Text>{item.text}</Text>
              </Flex>
            </Flex>
          );
        }
        return (
          <Flex key={+index} w="100%">
            <Avatar
              name="Computer"
              src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
              bg="blue.300"
            />
            <Flex
              bg="gray.100"
              color="black"
              minW="100px"
              maxW="350px"
              my="1"
              p="3"
            >
              <Text>{item.text}</Text>
            </Flex>
          </Flex>
        );
      })}
      <AlwaysScrollToBottom />
    </Flex>
  );
};

export default Messages;
