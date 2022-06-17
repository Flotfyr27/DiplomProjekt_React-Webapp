import {
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { FC } from "react";
import Helmet from "react-helmet";
import ContactInfo from "../components/widget/contactInfo";
const About: FC = () => {
  const [isSmallDevice] = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <Helmet>
        <title>About us</title>
      </Helmet>
      <div>
        <Container maxW={"container.xl"}>
          <Grid
            templateColumns={`${isSmallDevice ? "1fr" : "1fr 350px"}`}
            templateRows={`${
              isSmallDevice ? "repeat(4, auto)" : "repeat(3, 1fr)"
            }`}
            p={"3rem"}
            columnGap={4}
          >
            <GridItem colStart={1}>
              <Heading textAlign={"left"}>Starten for Tømrerfirmaet</Heading>
              <Text textAlign={"left"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                eget pharetra risus. Maecenas interdum ex sit amet diam dictum,
                nec blandit elit ultricies. Nulla tempor leo vel turpis lacinia,
                id bibendum velit vehicula. Sed congue accumsan gravida. Integer
                sagittis laoreet purus et rutrum. Nunc nulla orci, tincidunt
                lacinia augue quis, gravida congue lacus. Nunc iaculis dictum
                metus eu convallis. Nunc feugiat quam vel nisl tincidunt, ac
                dignissim nulla rutrum. Etiam nec ultricies diam. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Cras nec faucibus tellus. Ut bibendum
                convallis purus eget rhoncus. Etiam maximus sed libero nec
                vehicula. Donec sed mauris eget nibh semper lobortis.
              </Text>
            </GridItem>
            <GridItem colStart={1}>
              <Heading textAlign={"left"}>Vores idealer og værdier</Heading>
              <Text textAlign={"left"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                eget pharetra risus. Maecenas interdum ex sit amet diam dictum,
                nec blandit elit ultricies. Nulla tempor leo vel turpis lacinia,
                id bibendum velit vehicula. Sed congue accumsan gravida. Integer
                sagittis laoreet purus et rutrum. Nunc nulla orci, tincidunt
                lacinia augue quis, gravida congue lacus. Nunc iaculis dictum
                metus eu convallis. Nunc feugiat quam vel nisl tincidunt, ac
                dignissim nulla rutrum. Etiam nec ultricies diam. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Cras nec faucibus tellus. Ut bibendum
                convallis purus eget rhoncus. Etiam maximus sed libero nec
                vehicula. Donec sed mauris eget nibh semper lobortis.
              </Text>
            </GridItem>
            <GridItem colStart={1}>
              <Heading textAlign={"left"}>Planer for fremtiden</Heading>
              <Text textAlign={"left"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                eget pharetra risus. Maecenas interdum ex sit amet diam dictum,
                nec blandit elit ultricies. Nulla tempor leo vel turpis lacinia,
                id bibendum velit vehicula. Sed congue accumsan gravida. Integer
                sagittis laoreet purus et rutrum. Nunc nulla orci, tincidunt
                lacinia augue quis, gravida congue lacus. Nunc iaculis dictum
                metus eu convallis. Nunc feugiat quam vel nisl tincidunt, ac
                dignissim nulla rutrum. Etiam nec ultricies diam. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Cras nec faucibus tellus. Ut bibendum
                convallis purus eget rhoncus. Etiam maximus sed libero nec
                vehicula. Donec sed mauris eget nibh semper lobortis.
              </Text>
            </GridItem>
            <GridItem
              rowStart={isSmallDevice ? 4 : 2}
              colStart={isSmallDevice ? 1 : 2}
            >
              <ContactInfo />
            </GridItem>
          </Grid>
        </Container>
      </div>
    </>
  );
};
export default About;
