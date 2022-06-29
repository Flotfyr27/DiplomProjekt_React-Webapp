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
  useMediaQuery,
} from "@chakra-ui/react";
import { FC } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Terrace: FC = () => {
  const [isSmallDevice] = useMediaQuery("(max-width: 600px)");
  const navigate = useNavigate();
  const services = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Nunc vitae massa eu quam lacinia tristique id nec mi.",
    "Quisque ut nisi sit amet ante malesuada tincidunt vitae quis ex.",
    "Sed nec sapien faucibus, lacinia leo elementum, feugiat elit.",
  ];
  return (
    <>
      <Helmet>
        <title>{"Terasse, vinduer, og døre"}</title>
      </Helmet>
      <Container maxW={"container.xl"}>
        <Grid
          templateColumns={`${isSmallDevice ? "1fr" : "1fr 1fr"}`}
          p={"3rem"}
          templateRows={"auto auto 1fr"}
          gap={4}
        >
          <GridItem rowSpan={1}>
            <Heading size={"xl"} textAlign={"left"} pb={5}>
              Udskiftning af vinduer og døre, samt etablering og renovering af
              terasse
            </Heading>
            <Text textAlign={"left"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tortor elit, varius et nisi id, venenatis fringilla justo. Nam
              porta, erat et commodo semper, tortor augue euismod nibh, et
              interdum ante tortor nec risus. Nam fermentum imperdiet ipsum nec
              porta. Ut vel fringilla est. Vivamus sed dolor justo. Quisque ac
              tellus id nisl accumsan eleifend. In felis orci, aliquam non
              cursus sit amet, convallis a odio. Sed tempor tincidunt pulvinar.
              Donec bibendum pulvinar ante sit amet posuere. Etiam porta blandit
              purus ac lacinia. Pellentesque non tortor id orci gravida
              convallis in et nibh.
            </Text>
          </GridItem>

          <GridItem rowSpan={2}>
            <Heading size={"lg"} pb={5} textAlign={"left"}>
              Forbindelse til naturen med solide døre, klar glas, og en lækker
              terasse!
            </Heading>
            <Accordion allowToggle>
              {services.map((fs, idx) => {
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
                        Mauris tortor elit, varius et nisi id, venenatis
                        fringilla justo. Nam porta, erat et commodo semper,
                        tortor augue euismod nibh, et interdum ante tortor nec
                        risus. Nam fermentum imperdiet ipsum nec porta. Ut vel
                        fringilla est. Vivamus sed dolor justo. Quisque ac
                        tellus id nisl accumsan eleifend. In felis orci, aliquam
                        non cursus sit amet, convallis a odio. Sed tempor
                        tincidunt pulvinar. Donec bibendum pulvinar ante sit
                        amet posuere. Etiam porta blandit purus ac lacinia.
                        Pellentesque non tortor id orci gravida convallis in et
                        nibh.
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </GridItem>

          <GridItem colSpan={1} rowSpan={2}>
            <Image src={"/gallery/terrace.jpg"} />
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
    </>
  );
};
export default Terrace;
