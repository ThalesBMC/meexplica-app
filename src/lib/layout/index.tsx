import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      margin="0 auto"
      // maxWidth={800}
      position="relative"
      transition="0.5s ease-out"
      minH="100vh"
    >
      <Box
      //  margin={{ md: "8" }}
      >
        <Header />
        <Box as="main" marginY={22}>
          {children}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
