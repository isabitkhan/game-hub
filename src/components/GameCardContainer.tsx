import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";
interface Prop {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Prop) => {
  return (
    <div>
      <Box width="270px" borderRadius={10} overflow="hidden">
        {children}
      </Box>
    </div>
  );
};

export default GameCardContainer;
