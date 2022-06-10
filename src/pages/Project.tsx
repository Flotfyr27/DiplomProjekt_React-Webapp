import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  HStack,
  List,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import Helmet from "react-helmet";
import Header from "../components/header";
import BaseContainer from "../structural-components/base-container";
import SectionHeaderContainer from "../structural-components/section-header-container";

const Project: FC = () => {
  return (
    <div>
      <Helmet>
        <title>Projekter</title>
      </Helmet>
      <SectionHeaderContainer>
        <Header header={"Projekter vi tidligere har foretaget"} />
      </SectionHeaderContainer>
      <BaseContainer>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex={1} textAlign={"left"}>
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </BaseContainer>
      <BaseContainer>
        <List></List>
      </BaseContainer>
    </div>
  );
};
export default Project;
