import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  VStack,
  Button,
  chakra,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import type { ReactElement } from "react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        color="white"
        rounded="full"
        bg="gray.100"
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color="gray.600">{text}</Text>
    </Stack>
  );
};

export default function Benefits() {
  return (
    <Box p={4} w="5xl" alignSelf="center">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title="Atividades de maneira rápida"
          text="Faça suas atividades do colégio, faculdade em poucos minutos ao invés de horas"
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title="Pesquisa para trabalho na velocidade da luz"
          text="Termina sua pesquisa de um trabalho  com uma simples pergunta para nossa aplicação"
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title="Resposta Imediata"
          text="Receba as respostas das suas atividades, pesquisas e projetos de maneira IMEDIATA"
        />
      </SimpleGrid>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              Não perca mais dias fazendo atividades e pesquisas
            </chakra.h2>
            <Button colorScheme="green" size="md">
              Comece agora
            </Button>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>
              Seja mais rápido! <br /> Não perca mais um minuto
              <br />
              Não se preocupe mais com trabalhos do colégio e faculdade
              <br />
              Comece a usar o Me explica
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}
