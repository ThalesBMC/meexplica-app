import {
  Container,
  Grid,
  GridItem,
  Flex,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";

function statsTitleDescription() {
  return (
    <Container py={20} maxW="container.lg">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
          <Heading as="h2">Diminuição de tempo pesquisando</Heading>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection="column">
            <Text fontSize="4xl" fontWeight="bold">
              90%
            </Text>
            <Box fontSize="sm">
              No tempo de pesquisas em plataformas de buscas para encontrar uma
              resposta
            </Box>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection="column">
            <Text fontSize="4xl" fontWeight="bold">
              95%
            </Text>
            <Box fontSize="sm">
              No tempo para fazer uma atividade do colégio e faculdade
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default statsTitleDescription;
