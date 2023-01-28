import { Flex } from "@chakra-ui/react";

import Benefits from "./Benefits";
import { CallToAction } from "./CallToAction";
import Results from "./Results";
import Testimonials from "./Testimonials";

export default function Landing() {
  return (
    //     Hero: This is typically the first thing visitors see when they arrive on the page, and it should grab their attention and communicate the main value proposition of the product or service.

    // Benefits: This section should explain the specific benefits that customers will receive by using the product or service. It is a good idea to use headlines and bullet points to make it easy to scan.

    // Results: This section should provide social proof of the effectiveness of the product or service. This could include statistics, case studies, or testimonials from satisfied customers.

    // Testimonials: This section should include quotes and/or videos from satisfied customers.

    // Call to Action: This is the button or link that visitors should click to take the next step, such as signing up for a free trial or making a purchase. This should be prominently displayed and easy to find.
    // talvez seja legal além de melhorar o copy adicionar mais alguma seção importante ai vejo materiais de landing.
    // Talvez seja legal adicionar mais um botão de Get Started em outro local tipo em outra seção ai pesquiso
    // e analiso na landign da gente se faz sentido ter outro botão, estudo os materiais de como fazer uma landing rapidao.
    <Flex flexDir="column" px="8">
      <CallToAction />
      <Benefits />
      <Results />

      <Testimonials />
    </Flex>
  );
}
