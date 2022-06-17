import {
  Grid,
  GridItem,
  Heading,
  Text,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  AccordionIcon,
  Image,
  Button,
  Container,
} from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import BaseContainer from "../structural-components/base-container";

const Flooring: FC = () => {
  const navigate = useNavigate();
  const floorServices = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Nunc vitae massa eu quam lacinia tristique id nec mi.",
    "Quisque ut nisi sit amet ante malesuada tincidunt vitae quis ex.",
    "Sed nec sapien faucibus, lacinia leo elementum, feugiat elit.",
  ];
  return (
    <Container maxW={"container.xl"}>
      <Grid
        templateColumns={"1fr 1fr"}
        p={"3rem"}
        templateRows={"auto auto 1fr"}
        gap={4}
      >
        <GridItem rowSpan={1}>
          <Heading size={"xl"} textAlign={"left"} pb={5}>
            Skal du have lagt nyt gulv eller installeret gulvvarme?
          </Heading>
          <Text textAlign={"left"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tortor elit, varius et nisi id, venenatis fringilla justo. Nam
            porta, erat et commodo semper, tortor augue euismod nibh, et
            interdum ante tortor nec risus. Nam fermentum imperdiet ipsum nec
            porta. Ut vel fringilla est. Vivamus sed dolor justo. Quisque ac
            tellus id nisl accumsan eleifend. In felis orci, aliquam non cursus
            sit amet, convallis a odio. Sed tempor tincidunt pulvinar. Donec
            bibendum pulvinar ante sit amet posuere. Etiam porta blandit purus
            ac lacinia. Pellentesque non tortor id orci gravida convallis in et
            nibh.
          </Text>
        </GridItem>

        <GridItem rowSpan={2}>
          <Heading size={"lg"} pb={5} textAlign={"left"}>
            Vi tilbyder følgende services til dit gulv
          </Heading>
          <Accordion allowToggle>
            {floorServices.map((fs, idx) => {
              return (
                <AccordionItem key={idx}>
                  <h2>
                    <AccordionButton>
                      <Box flex={1} textAlign={"left"}>
                        {fs}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text textAlign={"left"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris tortor elit, varius et nisi id, venenatis fringilla
                      justo. Nam porta, erat et commodo semper, tortor augue
                      euismod nibh, et interdum ante tortor nec risus. Nam
                      fermentum imperdiet ipsum nec porta. Ut vel fringilla est.
                      Vivamus sed dolor justo. Quisque ac tellus id nisl
                      accumsan eleifend. In felis orci, aliquam non cursus sit
                      amet, convallis a odio. Sed tempor tincidunt pulvinar.
                      Donec bibendum pulvinar ante sit amet posuere. Etiam porta
                      blandit purus ac lacinia. Pellentesque non tortor id orci
                      gravida convallis in et nibh.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </GridItem>

        <GridItem colSpan={1} rowSpan={2}>
          <Image src={"/gallery/renovation.jpg"} />
        </GridItem>

        <GridItem colSpan={1}>
          <Button
            colorScheme={"green"}
            p={"2rem"}
            size={"lg"}
            onClick={() => navigate("/kontakt")}
          >
            Kontakt for tilbud!
          </Button>
        </GridItem>
      </Grid>
    </Container>
  );
};
export default Flooring;
