import {
  Box,
  Container,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Skeleton,
  useMediaQuery,
  Text,
} from "@chakra-ui/react";
import { FC, useEffect, useMemo, useState } from "react";

const Gallery: FC = () => {
  const [images, setImages] = useState([""]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getImages()
      .then((res) => setImages(res))
      .catch((err) => Error(err))
      .finally(() => setIsLoaded(true));
  }, []);

  function getImages(): Promise<string[]> {
    return new Promise((resolve) => {
      const imgArr: string[] = [];
      for (let i = 1; i < 25; i++) {
        const idx = Math.floor(Math.random() * 4 + 1);
        imgArr.push(`/demoGallery/${idx}.jpg`);
      }
      resolve(imgArr);
    });
  }

  const [isSmallDevice] = useMediaQuery("(max-width: 600px)");
  return (
    <>
      {isLoaded ? (
        <SimpleGrid gap={10} columns={isSmallDevice ? 1 : 3} p={"1rem"}>
          {images.map((img) => {
            return (
              <GridItem>
                <Image src={img} />
              </GridItem>
            );
          })}
        </SimpleGrid>
      ) : (
        <Text>Test</Text>
      )}
    </>
  );
};
export default Gallery;
