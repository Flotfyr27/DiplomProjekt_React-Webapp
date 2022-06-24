import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  useMediaQuery,
} from "@chakra-ui/react";
import { FC } from "react";
import Helmet from "react-helmet";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import ContactForm from "../components/widget/contactForm";

const Project: FC = () => {
  const [isSmallDevice] = useMediaQuery("(max-width: 600px)");
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Projekter</title>
      </Helmet>
      <Grid
        // h={"100%"}
        templateRows={`${
          isSmallDevice ? "repeat(7,auto)" : "50px repeat(3,1fr)"
        }`}
        templateColumns={`${isSmallDevice ? "1fr" : "repeat(3, 1fr)"}`}
        gap={3}
        p={"2rem"}
      >
        <GridItem bg={"white"} colSpan={isSmallDevice ? 1 : 3} rowSpan={1}>
          <Header
            header={"Vi har en lang række tilbud, der passer netop dig!"}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Link onClick={() => navigate("/projekter/isolering")}>
            <Center pos={"relative"}>
              <Box
                bg={"black"}
                pos={"absolute"}
                w={"100%"}
                h={"100%"}
                opacity={0.25}
              ></Box>
              <Heading pos={"absolute"} color={"white"}>
                Isolering
              </Heading>
              <Image src={"./gallery/insulation.jpg"} />
            </Center>
          </Link>
        </GridItem>

        <GridItem colSpan={1}>
          <Link onClick={() => navigate("/projekter/gulve")}>
            <Center pos={"relative"}>
              <Box
                bg={"black"}
                pos={"absolute"}
                w={"100%"}
                h={"100%"}
                opacity={0.25}
              ></Box>
              <Heading color={"white"} pos={"absolute"}>
                Gulv
              </Heading>
              <Image src={"./gallery/renovation.jpg"} />
            </Center>
          </Link>
        </GridItem>
        {isSmallDevice ? (
          <>
            <GridItem colSpan={1}>
              <Link onClick={() => navigate("/projekter/tag-og-renovering")}>
                <Center pos={"relative"}>
                  <Box
                    bg={"black"}
                    pos={"absolute"}
                    w={"100%"}
                    h={"100%"}
                    opacity={0.25}
                  ></Box>
                  <Heading color={"white"} pos={"absolute"}>
                    Nyt tag / renovering
                  </Heading>
                  <Image src={"./gallery/roof.jpg"} />
                </Center>
              </Link>
            </GridItem>

            <GridItem colSpan={1}>
              <Link onClick={() => navigate("/projekter/terasse-vindue-dør")}>
                <Center pos={"relative"}>
                  <Box
                    bg={"black"}
                    pos={"absolute"}
                    w={"100%"}
                    h={"100%"}
                    opacity={0.25}
                  ></Box>
                  <Heading color={"white"} pos={"absolute"}>
                    {"Terasse, Vinduer, og Døre"}
                  </Heading>
                  <Image src={"./gallery/terrace.jpg"} />
                </Center>
              </Link>
            </GridItem>

            <GridItem colSpan={1} rowSpan={2}>
              <ContactForm />
            </GridItem>
          </>
        ) : (
          <>
            <GridItem colSpan={1} rowSpan={2}>
              <ContactForm />
            </GridItem>
            <GridItem colSpan={1}>
              <Link onClick={() => navigate("/projekter/tag-og-renovering")}>
                <Center pos={"relative"}>
                  <Box
                    bg={"black"}
                    pos={"absolute"}
                    w={"100%"}
                    h={"100%"}
                    opacity={0.25}
                  ></Box>
                  <Heading color={"white"} pos={"absolute"}>
                    {"Nyt tag / renovering"}
                  </Heading>
                  <Image src={"./gallery/roof.jpg"} />
                </Center>
              </Link>
            </GridItem>
            <GridItem colSpan={1}>
              <Link onClick={() => navigate("/projekter/terasse-vindue-dør")}>
                <Center pos={"relative"}>
                  <Box
                    bg={"black"}
                    pos={"absolute"}
                    w={"100%"}
                    h={"100%"}
                    opacity={0.25}
                  ></Box>
                  <Heading color={"white"} pos={"absolute"}>
                    {"Terasse, Vinduer, og Døre"}
                  </Heading>
                  <Image src={"./gallery/terrace.jpg"} />
                </Center>
              </Link>
            </GridItem>
          </>
        )}
      </Grid>
    </>
  );
};
export default Project;
